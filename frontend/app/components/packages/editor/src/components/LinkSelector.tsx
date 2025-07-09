import { getUrlFromString } from "@/lib/utils";
import { Button, Input, cn } from "@bistudio-feedback/ui";
import type { Editor } from "@tiptap/core";
import { ArrowUpRight, Check, Trash } from "lucide-react";
import type { Dispatch, FC, SetStateAction } from "react";
import { useEffect, useRef } from "react";

interface LinkSelectorProps {
  editor: Editor;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const LinkSelector: FC<LinkSelectorProps> = ({
  editor,
  isOpen,
  setIsOpen,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  // Autofocus on input by default
  useEffect(() => {
    inputRef.current && inputRef.current?.focus();
  });

  return (
    <div className="relative">
      <button
        type="button"
        className="flex h-full items-center space-x-1.5 px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-100 active:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-600 dark:active:bg-gray-500"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <ArrowUpRight className="h-4 w-4" />
        <p
          className={cn("underline decoration-gray-400 underline-offset-4", {
            "text-blue-500 decoration-blue-500 dark:text-blue-400 dark:decoration-blue-400":
              editor.isActive("link"),
          })}
        >
          Link
        </p>
      </button>
      {isOpen && (
        <div className="animate-in fade-in slide-in-from-top-1 fixed top-full z-[99999] mt-1 flex w-60 space-x-1 overflow-hidden rounded-md border border-gray-200 bg-white p-1 shadow-xl dark:border-gray-500 dark:bg-gray-700">
          <Input
            ref={inputRef}
            type="text"
            placeholder="Paste a link"
            defaultValue={editor.getAttributes("link").href || ""}
          />
          {editor.getAttributes("link").href ? (
            <Button
              variant="destructive"
              onClick={() => {
                editor.chain().focus().unsetLink().run();
                setIsOpen(false);
              }}
              className="p-2"
            >
              <Trash className="h-4 w-4" />
            </Button>
          ) : (
            <Button
              variant="secondary"
              onClick={() => {
                if (inputRef.current) {
                  const url = getUrlFromString(inputRef.current.value);
                  url && editor.chain().focus().setLink({ href: url }).run();
                  setIsOpen(false);
                }
              }}
              className="p-2 "
            >
              <Check className="h-4 w-4" />
            </Button>
          )}
        </div>
      )}
    </div>
  );
};
