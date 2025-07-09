import type { Editor } from "@tiptap/core";
import {
  Check,
  ChevronDown,
  Code,
  Heading1,
  Heading2,
  Heading3,
  ListOrdered,
  TextIcon,
  TextQuote,
} from "lucide-react";
import type { Dispatch, FC, SetStateAction } from "react";

import type { BubbleMenuItem } from "./BubbleMenu";

interface NodeSelectorProps {
  editor: Editor;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const NodeSelector: FC<NodeSelectorProps> = ({
  editor,
  isOpen,
  setIsOpen,
}) => {
  const items: BubbleMenuItem[] = [
    {
      name: "Text",
      icon: TextIcon,
      command: () =>
        editor.chain().focus().toggleNode("paragraph", "paragraph").run(),
      // I feel like there has to be a more efficient way to do this – feel free to PR if you know how!
      isActive: () =>
        editor.isActive("paragraph") &&
        !editor.isActive("bulletList") &&
        !editor.isActive("orderedList"),
    },
    {
      name: "Heading 1",
      icon: Heading1,
      command: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      isActive: () => editor.isActive("heading", { level: 1 }),
    },
    {
      name: "Heading 2",
      icon: Heading2,
      command: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      isActive: () => editor.isActive("heading", { level: 2 }),
    },
    {
      name: "Heading 3",
      icon: Heading3,
      command: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
      isActive: () => editor.isActive("heading", { level: 3 }),
    },

    {
      name: "Bullet List",
      icon: ListOrdered,
      command: () => editor.chain().focus().toggleBulletList().run(),
      isActive: () => editor.isActive("bulletList"),
    },
    {
      name: "Numbered List",
      icon: ListOrdered,
      command: () => editor.chain().focus().toggleOrderedList().run(),
      isActive: () => editor.isActive("orderedList"),
    },
    {
      name: "Quote",
      icon: TextQuote,
      command: () =>
        editor
          .chain()
          .focus()
          .toggleNode("paragraph", "paragraph")
          .toggleBlockquote()
          .run(),
      isActive: () => editor.isActive("blockquote"),
    },
    {
      name: "Code",
      icon: Code,
      command: () => editor.chain().focus().toggleCodeBlock().run(),
      isActive: () => editor.isActive("codeBlock"),
    },
  ];

  const activeItem = items.filter(item => item.isActive()).pop() ?? {
    name: "Multiple",
  };

  return (
    <div className="relative h-full">
      <button
        type="button"
        className="flex h-full items-center gap-1 whitespace-nowrap rounded-l-sm p-2 text-sm font-medium text-gray-600 hover:bg-gray-100 active:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-600 dark:active:bg-gray-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{activeItem?.name}</span>
        <ChevronDown className="h-4 w-4" />
      </button>

      {isOpen && (
        <section className="animate-in fade-in slide-in-from-top-1 fixed top-full z-[99999] mt-1 flex w-48 flex-col overflow-hidden rounded-md border border-gray-200 bg-white p-1 shadow-xl dark:border-gray-500 dark:bg-gray-700">
          {items.map((item, index) => (
            <button
              type="button"
              key={index}
              onClick={() => {
                item.command();
                setIsOpen(false);
              }}
              className="flex items-center justify-between rounded-sm px-2 py-1 text-sm text-gray-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600"
            >
              <div className="flex items-center space-x-2">
                <div className="rounded-sm border border-gray-200 p-1 dark:border-gray-500">
                  <item.icon className="h-3 w-3" />
                </div>
                <span>{item.name}</span>
              </div>
              {activeItem.name === item.name && <Check className="h-4 w-4" />}
            </button>
          ))}
        </section>
      )}
    </div>
  );
};
