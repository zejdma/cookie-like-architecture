import type { BubbleMenuProps, Editor } from "@tiptap/react";
import { BubbleMenu } from "@tiptap/react";
import {
  BoldIcon,
  CodeIcon,
  ItalicIcon,
  StrikethroughIcon,
  UnderlineIcon,
} from "lucide-react";
import type { FC } from "react";
import { useState } from "react";

import { cn } from "@bistudio-feedback/ui";

import { LinkSelector } from "./LinkSelector";
import { NodeSelector } from "./NodeSelector";

export interface BubbleMenuItem {
  name: string;
  isActive: () => boolean;
  command: () => void;
  icon: typeof BoldIcon;
}

type EditorBubbleMenuProps = Omit<BubbleMenuProps, "children"> & {
  editor: Editor;
};

export const EditorBubbleMenu: FC<EditorBubbleMenuProps> = props => {
  const items: BubbleMenuItem[] = [
    {
      name: "bold",
      isActive: () => props.editor.isActive("bold"),
      command: () => props.editor.chain().focus().toggleBold().run(),
      icon: BoldIcon,
    },
    {
      name: "italic",
      isActive: () => props.editor.isActive("italic"),
      command: () => props.editor.chain().focus().toggleItalic().run(),
      icon: ItalicIcon,
    },
    {
      name: "underline",
      isActive: () => props.editor.isActive("underline"),
      command: () => props.editor.chain().focus().toggleUnderline().run(),
      icon: UnderlineIcon,
    },
    {
      name: "strike",
      isActive: () => props.editor.isActive("strike"),
      command: () => props.editor.chain().focus().toggleStrike().run(),
      icon: StrikethroughIcon,
    },
    {
      name: "code",
      isActive: () => props.editor.isActive("code"),
      command: () => props.editor.chain().focus().toggleCode().run(),
      icon: CodeIcon,
    },
  ];

  const bubbleMenuProps: EditorBubbleMenuProps = {
    ...props,
    shouldShow: ({ editor }) => {
      // don't show if image is selected
      if (editor.isActive("image") || editor.isActive("video")) {
        return false;
      }
      return editor.view.state.selection.content().size > 0;
    },
    tippyOptions: {
      moveTransition: "transform 0.15s ease-out",
      onHidden: () => {
        setIsNodeSelectorOpen(false);

        setIsLinkSelectorOpen(false);
      },
    },
  };

  const [isNodeSelectorOpen, setIsNodeSelectorOpen] = useState(false);

  const [isLinkSelectorOpen, setIsLinkSelectorOpen] = useState(false);

  return (
    <BubbleMenu
      {...bubbleMenuProps}
      className="flex w-fit divide-x divide-gray-200 rounded-md border border-gray-200 bg-white shadow-xl dark:divide-gray-500 dark:border-gray-500 dark:bg-gray-700"
    >
      <NodeSelector
        editor={props.editor}
        isOpen={isNodeSelectorOpen}
        setIsOpen={() => {
          setIsNodeSelectorOpen(!isNodeSelectorOpen);

          setIsLinkSelectorOpen(false);
        }}
      />
      <LinkSelector
        editor={props.editor}
        isOpen={isLinkSelectorOpen}
        setIsOpen={() => {
          setIsLinkSelectorOpen(!isLinkSelectorOpen);

          setIsNodeSelectorOpen(false);
        }}
      />
      <div className="flex">
        {items.map((item, index) => (
          <button
            type="button"
            key={index}
            onClick={item.command}
            className="p-2 text-gray-600 hover:bg-gray-100 active:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-600 dark:active:bg-gray-500"
          >
            <item.icon
              className={cn("h-4 w-4", {
                "text-blue-500 dark:text-blue-400": item.isActive(),
              })}
            />
          </button>
        ))}
      </div>
    </BubbleMenu>
  );
};
