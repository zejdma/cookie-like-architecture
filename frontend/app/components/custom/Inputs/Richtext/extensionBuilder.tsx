// extensionBuilder.ts
import { Extension, Mark, Node } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import Image from "@tiptap/extension-image";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { createLowlight } from "lowlight";
import HorizontalRule from "@tiptap/extension-horizontal-rule";
import Blockquote from "@tiptap/extension-blockquote";
import TextAlign from "@tiptap/extension-text-align";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import ListItem from "@tiptap/extension-list-item";

export type TExtension = Extension | Mark | Node;

type StarterKitOptions = {
  disableHeading?: boolean;
};

const lowlight = createLowlight();

export class ExtensionBuilder {
  private extensions: TExtension[] = [];

  private static BUILT_IN_EXTENSIONS = [
    "bold",
    "italic",
    "heading",
    "paragraph",
    "blockquote",
    "bulletList",
    "orderedList",
    "listItem",
    "codeBlock",
    "horizontalRule",
  ];
  public addExtension(extension: TExtension): this {
    this.extensions.push(extension);
    return this;
  }

  public addStarterKit(options: StarterKitOptions = {}) {
    const kit = StarterKit.configure({
      heading: {
        levels: [1, 2, 3],
        HTMLAttributes: {
          class:
            "font-semibold text-lg leading-tight [&[data-level='1']]:text-2xl [&[data-level='2']]:text-xl [&[data-level='3']]:text-lg",
        },
      },
      bulletList: {
        HTMLAttributes: {
          class: "list-disc list-outside ml-6",
        },
      },
      orderedList: {
        HTMLAttributes: {
          class: "list-decimal list-outside ml-6",
        },
      },
    });
    this.addExtension(kit);
    return this;
  }

  public addLists() {
    this.addExtension(BulletList);
    this.addExtension(OrderedList);
    this.addExtension(ListItem);
    return this;
  }

  public addUnderline() {
    this.addExtension(Underline);
    return this;
  }

  public addLink() {
    this.addExtension(Link);
    return this;
  }

  public addPlaceholder(placeholderText = "Napiš něco...") {
    this.addExtension(
      Placeholder.configure({
        placeholder: () => placeholderText,
        includeChildren: true,
      })
    );
    return this;
  }

  public addImage() {
    this.addExtension(
      Image.configure({
        allowBase64: true,
        HTMLAttributes: {
          class: "rounded border border-muted",
        },
      })
    );
    return this;
  }

  public addCodeBlock() {
    this.addExtension(
      CodeBlockLowlight.configure({
        lowlight,
        HTMLAttributes: {
          class: "bg-muted p-2 rounded text-sm font-mono",
        },
      })
    );
    return this;
  }

  public addHorizontalRule() {
    this.addExtension(
      HorizontalRule.configure({
        HTMLAttributes: {
          class: "border-t border-muted my-4",
        },
      })
    );
    return this;
  }

  public addBlockquote() {
    this.addExtension(
      Blockquote.configure({
        HTMLAttributes: {
          class: "border-l-4 pl-4 italic text-muted-foreground",
        },
      })
    );
    return this;
  }

  public addTextAlign() {
    const extension = TextAlign.configure({
      types: ["heading", "paragraph"],
    });
    this.addExtension(extension);
    return this;
  }

  public build() {
    return this.extensions;
  }

  public hasExtension(name: string): boolean {
    return (
      this.extensions.some(
        (ext) => (ext as any).name === name || ext.constructor.name === name
      ) || ExtensionBuilder.BUILT_IN_EXTENSIONS.includes(name)
    );
  }
}
