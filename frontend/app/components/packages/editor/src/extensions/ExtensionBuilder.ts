import { CustomMention } from "@/extensions/CustomMentions";
import SlashCommand from "@/extensions/SlashCommand";
import { Video } from "@/extensions/Video";
import { mentionSuggestionOptions } from "@/lib/members";
import { ImageNodeView } from "@/plugins/image-plugins";
import UploadImagesPlugin from "@/plugins/upload-images";
import { Extension, InputRule, Mark, Node } from "@tiptap/core";
import FloatingMenu from "@tiptap/extension-floating-menu";
import HorizontalRule from "@tiptap/extension-horizontal-rule";
import TiptapImage from "@tiptap/extension-image";
import TiptapLink from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import TiptapUnderline from "@tiptap/extension-underline";
import StarterKit from "@tiptap/starter-kit";
export type TExtension = Mark<any, any> | Node<any, any> | Extension<any, any>;
type TInitServerExtensionsProps = {
  disableHeading?: boolean;
};

const CustomImage = TiptapImage.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      style: {
        default: "width: 100%; height: auto;",
        parseHTML: element => {
          const width = element.getAttribute("width");
          return width
            ? `width: ${width}px; height: auto;`
            : `${element.style.cssText}`;
        },
      },
    };
  },
  addNodeView() {
    return ImageNodeView();
  },
  addProseMirrorPlugins() {
    return [UploadImagesPlugin];
  },
});

export class ExtensionBuilder {
  private extensions: TExtension[] = [];
  constructor() {
    this.extensions = [];
  }

  public addExtension(extension: TExtension) {
    this.extensions.push(extension);
    return this;
  }
  public addStarterKit({
    disableHeading = true,
  }: {
    disableHeading?: boolean;
  }) {
    const starterKit = StarterKit.configure({
      heading: disableHeading ? false : { levels: [1, 2, 3] },
      bulletList: {
        HTMLAttributes: {
          class: "list-disc list-outside leading-3 -mt-2",
        },
      },
      orderedList: {
        HTMLAttributes: {
          class: "list-decimal list-outside leading-3 -mt-2",
        },
      },
      listItem: {
        HTMLAttributes: {
          class: "leading-normal -mb-2",
        },
      },
      blockquote: {
        HTMLAttributes: {
          class: "border-l-4 border-gray-700 dark:border-gray-300",
        },
      },
      codeBlock: {
        HTMLAttributes: {
          class:
            "rounded-sm text-foreground dark:bg-gray-600 bg-gray-100 p-5 font-mono font-medium",
        },
      },
      code: {
        HTMLAttributes: {
          class:
            "rounded-md text-foreground dark:bg-gray-700 bg-gray-100 px-1.5 py-1 font-mono font-medium",
          spellcheck: "false",
        },
      },
      horizontalRule: false,
      dropcursor: {
        color: "#DBEAFE",
        width: 4,
      },
      gapcursor: false,
    });
    this.addExtension(starterKit);
    return this;
  }
  public addHorizontalRule() {
    const horizontalRule = HorizontalRule.extend({
      addInputRules() {
        return [
          new InputRule({
            find: /^(?:---|—-|___\s|\*\*\*\s)$/,
            handler: ({ state, range }) => {
              const attributes = {};

              const { tr } = state;
              const start = range.from;
              let end = range.to;

              tr.insert(start - 1, this.type.create(attributes)).delete(
                tr.mapping.map(start),
                tr.mapping.map(end)
              );
            },
          }),
        ];
      },
    }).configure({
      HTMLAttributes: {
        class: "mt-4 mb-6 border-t border-gray-300 dark:border-gray-600",
      },
    });
    this.addExtension(horizontalRule as TExtension);
    return this;
  }
  public addLink() {
    const link = TiptapLink.configure({
      HTMLAttributes: {
        class:
          "text-gray-700 dark:text-gray-200 underline underline-offset-[3px] hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer",
      },
    });
    this.addExtension(link as TExtension);
    return this;
  }
  public addPlaceholder() {
    const placeholder = Placeholder.configure({
      placeholder: ({ node }) => {
        if (node.type.name === "heading") {
          return `Heading ${node.attrs.level}`;
        }
        return "Press '/' for commands";
      },
      includeChildren: true,
    });
    this.addExtension(placeholder as TExtension);
    return this;
  }
  public addSlashCommand() {
    this.addExtension(SlashCommand as TExtension);
    return this;
  }
  public addUnderline() {
    this.addExtension(TiptapUnderline as TExtension);
    return this;
  }
  public addCustomImage() {
    const customImage = CustomImage.configure({
      allowBase64: true,
      HTMLAttributes: {
        class: "rounded-md border border-border ",
      },
    });
    this.addExtension(customImage as TExtension);
    return this;
  }
  public addVideo() {
    this.addExtension(Video as TExtension);
    return this;
  }
  public addFloatingMenu() {
    this.addExtension(FloatingMenu as TExtension);
    return this;
  }
  public addCustomMention(getMentionOptions: any) {
    const customMention = CustomMention.configure({
      suggestion: mentionSuggestionOptions(getMentionOptions),
      HTMLAttributes: {
        class:
          "rounded-md bg-gray-100 dark:bg-gray-800 px-1.5 py-1 font-medium text-gray-900 dark:text-gray-200",
      },
      // @ts-ignore
      renderHTML({ node, HTMLAttributes }) {
        return [
          "span",
          {
            ...HTMLAttributes,
            class: `rounded-md bg-gray-100 dark:bg-gray-800 px-1.5 py-1 font-medium text-gray-900 dark:text-gray-200`,
          },
          `@${node.attrs.user.username}`,
        ];
      },
    });
    this.addExtension(customMention as TExtension);
    return this;
  }

  public initServerExtensions(props?: TInitServerExtensionsProps) {
    const { disableHeading = false } = props || {};
    this.addStarterKit({ disableHeading })
      .addLink()
      .addPlaceholder()
      .addSlashCommand()
      .addUnderline()
      .addCustomImage()
      .addVideo()
      .addCustomMention(() => Promise.resolve([]))
      .addFloatingMenu();
    return this;
  }

  public build() {
    return this.extensions;
  }
}
