// toolbarBuilder.tsx
import type { Editor } from "@tiptap/react";
import type { JSX } from "react";
import { Toggle } from "~/components/ui/toggle";
import {
  AlignCenterIcon,
  AlignLeftIcon,
  AlignRightIcon,
  Bold,
  Heading1,
  Heading2,
  Heading3,
  ImageIcon,
  Italic,
  List,
  ListOrdered,
  Minus,
  QuoteIcon,
  UnderlineIcon,
} from "lucide-react";
import { ExtensionBuilder } from "./extensionBuilder";

export function getToolbarItems(
  editor: Editor,
  builder: ExtensionBuilder
): JSX.Element[] {
  const buttons: JSX.Element[] = [];

  if (builder.hasExtension("heading")) {
    [1, 2, 3].forEach((level) => {
      buttons.push(
        <Toggle
          key={`heading-${level}`}
          pressed={editor.isActive("heading", { level })}
          onPressedChange={() =>
            editor.chain().focus().toggleHeading({ level: level as 1 | 2 | 3 }).run()
          }
          aria-label={`Heading ${level}`}
          size="sm"
        >
          {level === 1 ? (
            <Heading1 size={16} />
          ) : level === 2 ? (
            <Heading2 size={16} />
          ) : (
            <Heading3 size={16} />
          )}
        </Toggle>
      );
    });
  }

  if (builder.hasExtension("bulletList")) {
    buttons.push(
      <Toggle
        key="bulletList"
        onPressedChange={() => editor.chain().focus().toggleBulletList().run()}
        pressed={editor.isActive("bulletList")}
        aria-label="Bullet List"
        size="sm"
      >
        <List size={16} />
      </Toggle>
    );
  }

  if (builder.hasExtension("orderedList")) {
    buttons.push(
      <Toggle
        key="orderedList"
        onPressedChange={() =>
          editor.chain().focus().toggleOrderedList().run()
        }
        pressed={editor.isActive("orderedList")}
        aria-label="Ordered List"
        size="sm"
      >
        <ListOrdered size={16} />
      </Toggle>
    );
  }

  if (builder.hasExtension("bold")) {
    buttons.push(
      <Toggle
        key="bold"
        pressed={editor.isActive("bold")}
        onPressedChange={() => editor.chain().focus().toggleBold().run()}
        aria-label="Bold"
        size="sm"
      >
        <Bold size={16} />
      </Toggle>
    );
  }

  if (builder.hasExtension("italic")) {
    buttons.push(
      <Toggle
        key="italic"
        pressed={editor.isActive("italic")}
        onPressedChange={() => editor.chain().focus().toggleItalic().run()}
        aria-label="Italic"
        size="sm"
      >
        <Italic size={16} />
      </Toggle>
    );
  }

  if (builder.hasExtension("underline")) {
    buttons.push(
      <Toggle
        key="underline"
        pressed={editor.isActive("underline")}
        onPressedChange={() =>
          editor.chain().focus().toggleUnderline().run()
        }
        aria-label="Underline"
        size="sm"
      >
        <UnderlineIcon size={16} />
      </Toggle>
    );
  }

  if (builder.hasExtension("image")) {
    buttons.push(
      <Toggle
        key="image"
        onPressedChange={() => {
          const url = prompt("Vlož URL obrázku");
          if (url) editor.chain().focus().setImage({ src: url }).run();
        }}
        aria-label="Insert image"
        size="sm"
      >
        <ImageIcon size={16} />
      </Toggle>
    );
  }

  if (builder.hasExtension("blockquote")) {
    buttons.push(
      <Toggle
        key="blockquote"
        onPressedChange={() =>
          editor.chain().focus().toggleBlockquote().run()
        }
        pressed={editor.isActive("blockquote")}
        aria-label="Blockquote"
        size="sm"
      >
        <QuoteIcon size={16} />
      </Toggle>
    );
  }

  if (builder.hasExtension("textAlign")) {
    buttons.push(
      <Toggle
        key="align-left"
        onPressedChange={() =>
          editor.chain().focus().setTextAlign("left").run()
        }
        pressed={editor.isActive({ textAlign: "left" })}
        aria-label="Align left"
        size="sm"
      >
        <AlignLeftIcon size={16} />
      </Toggle>,
      <Toggle
        key="align-center"
        onPressedChange={() =>
          editor.chain().focus().setTextAlign("center").run()
        }
        pressed={editor.isActive({ textAlign: "center" })}
        aria-label="Align center"
        size="sm"
      >
        <AlignCenterIcon size={16} />
      </Toggle>,
      <Toggle
        key="align-right"
        onPressedChange={() =>
          editor.chain().focus().setTextAlign("right").run()
        }
        pressed={editor.isActive({ textAlign: "right" })}
        aria-label="Align right"
        size="sm"
      >
        <AlignRightIcon size={16} />
      </Toggle>
    );
  }

  if (builder.hasExtension("horizontalRule")) {
    buttons.push(
      <Toggle
        key="hr"
        onPressedChange={() =>
          editor.chain().focus().setHorizontalRule().run()
        }
        aria-label="Horizontal rule"
        size="sm"
      >
        <Minus size={16} />
      </Toggle>
    );
  }

  return buttons;
}
