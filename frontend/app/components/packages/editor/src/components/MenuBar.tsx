import { startImageUpload } from "@/plugins/upload-images";
import { startVideoUpload } from "@/plugins/upload-video";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Toggle,
  cn,
} from "@bistudio-feedback/ui";
import { Editor } from "@tiptap/core";
import {
  AtSign,
  Bold,
  Code2,
  Heading,
  Heading2,
  Heading3,
  Image,
  Italic,
  List,
  ListOrdered,
  MoreHorizontal,
  Quote,
  Redo,
  Strikethrough,
  Underline,
  Undo,
  Upload,
  Video,
} from "lucide-react";
import { FC, ReactNode } from "react";

type EditroMenuBar = {
  editor: Editor;
  children?: ReactNode;
  className?: string;
  isComment?: boolean;
};

interface CommandProps {
  editor: Editor;
  range: Range;
}

export const MenuBar: FC<EditroMenuBar> = ({ editor, children, isComment }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="absolute left-0 top-0 flex w-full items-center justify-between rounded-t-lg border-b border-gray-200 bg-white p-2 dark:border-gray-700 dark:bg-gray-800">
      <div className="flex items-center gap-x-2">
        <BasicTextStyling editor={editor} className="flex gap-x-2" />
        <MobileMenuBar editor={editor} className="block xl:hidden" />
        <MoreMenu editor={editor} className="hidden gap-x-2 xl:flex" />
        <OtherTextStyling editor={editor} className="hidden gap-x-2 xl:flex" />
        <UploadMedia editor={editor} className="hidden gap-x-2 xl:flex" />
      </div>
      <UndoRedoSave
        editor={editor}
        children={children}
        className="flex items-center gap-x-2"
      />
    </div>
  );
};

export function UndoRedoSave({ editor, children, className }: EditroMenuBar) {
  return (
    <div className={className}>
      <button
        className="hidden md:flex"
        onClick={e => {
          e.preventDefault();
          editor.chain().focus().undo().run();
        }}
      >
        <Undo className="h-4 w-4" />
      </button>
      <button
        className="hidden md:flex"
        onClick={e => {
          e.preventDefault();
          editor.chain().focus().redo().run();
        }}
      >
        <Redo className="h-4 w-4" />
      </button>
      {children}
    </div>
  );
}

export function MobileMenuBar({ editor, className }: EditroMenuBar) {
  return (
    <div className={className}>
      <DropdownMenu>
        <DropdownMenuTrigger className="hover:bg-muted h-9 rounded-md px-2.5 transition-all">
          <MoreHorizontal className="h-4 w-4" />
        </DropdownMenuTrigger>
        {/* <DropdownMenuTrigger className="rounded-md border p-1 hover:bg-slate-200 dark:border-gray-600 hover:dark:bg-gray-800">
          <MoreHorizontal />
        </DropdownMenuTrigger> */}
        <DropdownMenuContent className="dark:bg-gray-700">
          <DropdownMenuItem
            onClick={e => {
              e.preventDefault();
              editor.chain().focus().toggleStrike().run();
            }}
            className={cn(
              "flex cursor-pointer gap-x-2 rounded-md p-1 hover:bg-slate-200 hover:dark:bg-gray-800",
              editor.isActive("strike")
                ? "border bg-slate-300 dark:bg-gray-900"
                : ""
            )}
          >
            <Strikethrough />
            Strikethrough
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={e => {
              e.preventDefault();
              editor.chain().focus().toggleHeading({ level: 1 }).run();
            }}
            className={cn(
              "flex cursor-pointer gap-x-2 rounded-md p-1 hover:bg-slate-200 hover:dark:bg-gray-800",
              editor.isActive("heading", { level: 1 })
                ? "border bg-slate-300 dark:bg-gray-900"
                : ""
            )}
          >
            <Heading />
            Heading 1
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={e => {
              e.preventDefault();
              editor.chain().focus().toggleHeading({ level: 2 }).run();
            }}
            className={cn(
              "flex cursor-pointer gap-x-2 rounded-md p-1 hover:bg-slate-200 hover:dark:bg-gray-800",
              editor.isActive("heading", { level: 2 })
                ? "border bg-slate-300 dark:bg-gray-900"
                : ""
            )}
          >
            <Heading2 />
            Heading 2
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={e => {
              e.preventDefault();
              editor.chain().focus().toggleHeading({ level: 3 }).run();
            }}
            className={cn(
              "flex cursor-pointer gap-x-2 rounded-md p-1 hover:bg-slate-200 hover:dark:bg-gray-800",
              editor.isActive("heading", { level: 3 })
                ? "border bg-slate-300 dark:bg-gray-900"
                : ""
            )}
          >
            <Heading3 />
            Heading 3
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={e => {
              e.preventDefault();
              editor.chain().focus().toggleBulletList().run();
            }}
            className={cn(
              "flex cursor-pointer gap-x-2 rounded-md p-1 hover:bg-slate-200 hover:dark:bg-gray-800",
              editor.isActive("bulletList")
                ? "border bg-slate-300 dark:bg-gray-900"
                : ""
            )}
          >
            <List />
            List
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={e => {
              e.preventDefault();
              editor.chain().focus().toggleOrderedList().run();
            }}
            className={cn(
              "flex cursor-pointer gap-x-2 rounded-md p-1 hover:bg-slate-200 hover:dark:bg-gray-800",
              editor.isActive("orderedList")
                ? "border bg-slate-300 dark:bg-gray-900"
                : ""
            )}
          >
            <ListOrdered />
            Ordered List
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={e => {
              e.preventDefault();
              editor.chain().focus().toggleBlockquote().run();
            }}
            className={cn(
              "flex cursor-pointer gap-x-2 rounded-md p-1 hover:bg-slate-200 hover:dark:bg-gray-800",
              editor.isActive("blockquote")
                ? "border bg-slate-300 dark:bg-gray-900"
                : ""
            )}
          >
            <Quote />
            Blockquote
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={e => {
              e.preventDefault();
              editor.chain().focus().toggleCodeBlock().run();
            }}
            className={cn(
              "flex cursor-pointer gap-x-2 rounded-md p-1 hover:bg-slate-200 hover:dark:bg-gray-800",
              editor.isActive("codeBlock")
                ? "border bg-slate-300 dark:bg-gray-900"
                : ""
            )}
          >
            <Code2 />
            Code
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={e => {
              e.preventDefault();
              editor
                .chain()
                .focus()
                .deleteRange({
                  from: editor.state.selection.from,
                  to: editor.state.selection.to + 1,
                })
                .insertContent('[type: "text", text: "@"]')
                .run();
            }}
            className={cn(
              "flex cursor-pointer gap-x-2 rounded-md p-1 hover:bg-slate-200 hover:dark:bg-gray-800",
              editor.isActive("mentionSuggestion")
                ? "bg-slate-300 dark:bg-gray-900"
                : ""
            )}
          >
            <AtSign />
            Mention
          </DropdownMenuItem>
          <DropdownMenuItem
            className={
              "flex cursor-pointer gap-x-2 rounded-md p-1 hover:bg-slate-200 hover:dark:bg-gray-800"
            }
            onClick={e => {
              e.preventDefault();
              editor
                .chain()
                .focus()
                .deleteRange({
                  from: editor.state.selection.from,
                  to: editor.state.selection.to + 1,
                })
                .run();
              // upload image
              const input = document.createElement("input");
              input.type = "file";
              input.accept = "image/*";
              input.onchange = async () => {
                if (input.files?.length) {
                  const file = input.files[0];
                  const pos = editor.view.state.selection.from;
                  startImageUpload(file, editor.view, pos);
                }
              };
              input.click();
            }}
          >
            <Image />
            Image
          </DropdownMenuItem>
          <DropdownMenuItem
            className="flex cursor-pointer gap-x-2 rounded-md p-1 hover:bg-slate-200 hover:dark:bg-gray-800"
            onClick={e => {
              e.preventDefault();
              editor
                .chain()
                .focus()
                .deleteRange({
                  from: editor.state.selection.from,
                  to: editor.state.selection.to + 1,
                })
                .run();
              // upload video
              const input = document.createElement("input");
              input.type = "file";
              input.accept = "video/*";
              input.onchange = async () => {
                if (input.files?.length) {
                  const file = input.files[0];
                  const pos = editor.view.state.selection.from;
                  startVideoUpload(file, editor.view, pos);
                }
              };
              input.click();
            }}
          >
            <Video />
            Video
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export function UploadMedia({ editor, className }: EditroMenuBar) {
  return (
    <div className={className}>
      <DropdownMenu>
        <DropdownMenuTrigger className="hover:bg-muted h-9 rounded-md px-2.5 transition-all">
          <Upload className="h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="dark:bg-gray-700">
          <DropdownMenuItem
            className={
              "flex cursor-pointer gap-x-2 rounded-md p-1 hover:bg-slate-200 hover:dark:bg-gray-800"
            }
            onClick={e => {
              e.preventDefault();
              editor
                .chain()
                .focus()
                .deleteRange({
                  from: editor.state.selection.from,
                  to: editor.state.selection.to + 1,
                })
                .run();
              // upload image
              const input = document.createElement("input");
              input.type = "file";
              input.accept = "image/*";
              input.onchange = async () => {
                if (input.files?.length) {
                  const file = input.files[0];
                  const pos = editor.view.state.selection.from;
                  startImageUpload(file, editor.view, pos);
                }
              };
              input.click();
            }}
          >
            <Image />
            Image
          </DropdownMenuItem>
          <DropdownMenuItem
            className="flex cursor-pointer gap-x-2 rounded-md p-1 hover:bg-slate-200 hover:dark:bg-gray-800"
            onClick={e => {
              e.preventDefault();
              editor
                .chain()
                .focus()
                .deleteRange({
                  from: editor.state.selection.from,
                  to: editor.state.selection.to + 1,
                })
                .run();
              // upload video
              const input = document.createElement("input");
              input.type = "file";
              input.accept = "video/*";
              input.onchange = async () => {
                if (input.files?.length) {
                  const file = input.files[0];
                  const pos = editor.view.state.selection.from;
                  startVideoUpload(file, editor.view, pos);
                }
              };
              input.click();
            }}
          >
            <Video />
            Video
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export function MoreMenu({ editor, className }: EditroMenuBar) {
  return (
    <div className={className}>
      <DropdownMenu>
        <DropdownMenuTrigger className="hover:bg-muted h-9 rounded-md px-2.5 transition-all">
          <MoreHorizontal className="h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="dark:bg-gray-700">
          <DropdownMenuItem
            onClick={e => {
              e.preventDefault();
              editor.chain().focus().toggleStrike().run();
            }}
            className={cn(
              "flex cursor-pointer gap-x-2 rounded-md p-1 hover:bg-slate-200 hover:dark:bg-gray-800",
              editor.isActive("strike")
                ? "border bg-slate-300 dark:bg-gray-900"
                : ""
            )}
          >
            <Strikethrough />
            Strikethrough
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={e => {
              e.preventDefault();
              editor.chain().focus().toggleHeading({ level: 1 }).run();
            }}
            className={cn(
              "flex cursor-pointer gap-x-2 rounded-md p-1 hover:bg-slate-200 hover:dark:bg-gray-800",
              editor.isActive("heading", { level: 1 })
                ? "border bg-slate-300 dark:bg-gray-900"
                : ""
            )}
          >
            <Heading />
            Heading 1
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={e => {
              e.preventDefault();
              editor.chain().focus().toggleHeading({ level: 2 }).run();
            }}
            className={cn(
              "flex cursor-pointer gap-x-2 rounded-md p-1 hover:bg-slate-200 hover:dark:bg-gray-800",
              editor.isActive("heading", { level: 2 })
                ? "border bg-slate-300 dark:bg-gray-900"
                : ""
            )}
          >
            <Heading2 />
            Heading 2
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={e => {
              e.preventDefault();
              editor.chain().focus().toggleHeading({ level: 3 }).run();
            }}
            className={cn(
              "flex cursor-pointer gap-x-2 rounded-md p-1 hover:bg-slate-200 hover:dark:bg-gray-800",
              editor.isActive("heading", { level: 3 })
                ? "border bg-slate-300 dark:bg-gray-900"
                : ""
            )}
          >
            <Heading3 />
            Heading 3
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export function OtherTextStyling({ editor, className }: EditroMenuBar) {
  return (
    <div className={className}>
      <Toggle
        size={"sm"}
        onClick={() => {
          editor.chain().focus().toggleBulletList().run();
        }}
      >
        <List className="h-4 w-4" />
      </Toggle>

      <Toggle
        size={"sm"}
        onClick={() => {
          editor.chain().focus().toggleOrderedList().run();
        }}
      >
        <ListOrdered className="h-4 w-4" />
      </Toggle>

      <Toggle
        size={"sm"}
        onClick={() => {
          editor.chain().focus().toggleBlockquote().run();
        }}
      >
        <Quote className="h-4 w-4" />
      </Toggle>

      <Toggle
        size={"sm"}
        onClick={() => {
          editor.chain().focus().toggleCodeBlock().run();
        }}
      >
        <Code2 className="h-4 w-4" />
      </Toggle>

      <Toggle
        size={"sm"}
        onClick={() => {
          editor.chain().focus().insertContent("@").run();
        }}
      >
        <AtSign className="h-4 w-4" />
      </Toggle>
    </div>
  );
}

export function BasicTextStyling({ editor, className }: EditroMenuBar) {
  return (
    <div className={className}>
      <Toggle
        size={"sm"}
        onClick={() => {
          editor.chain().focus().toggleBold().run();
        }}
      >
        <Bold className="h-4 w-4" />
      </Toggle>
      <Toggle
        size={"sm"}
        onClick={() => {
          editor.chain().focus().toggleItalic().run();
        }}
      >
        <Italic className="h-4 w-4" />
      </Toggle>
      <Toggle
        size={"sm"}
        onClick={() => {
          editor.chain().focus().toggleUnderline().run();
        }}
      >
        <Underline className="h-4 w-4" />
      </Toggle>
    </div>
  );
}
