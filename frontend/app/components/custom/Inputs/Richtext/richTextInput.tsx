import { useEditor, EditorContent } from "@tiptap/react";
import { useFormContext } from "react-hook-form";
import { cn } from "~/lib/utils";
import { Separator } from "~/components/ui/separator";
import { ExtensionBuilder } from "./extensionBuilder";
import { getToolbarItems } from "./toolbarBuilder";

type Props = {
  value?: string;
  onChange?: (value: string) => void;
  fieldName?: string;
  placeholder?: string;
  disabled?: boolean;
};

export const RichTextInput = ({
  value,
  onChange,
  fieldName,
  placeholder,
  disabled,
}: Props) => {
  const {
    formState: { errors, isSubmitted },
  } = useFormContext();

  const hasError = fieldName ? !!errors[fieldName] && isSubmitted : false;

  const extensionBuilder = new ExtensionBuilder()
    .addStarterKit()
    .addUnderline()
    .addLink()
    .addPlaceholder(placeholder)
    .addImage()
    .addLists()
    .addCodeBlock()
    .addHorizontalRule()
    .addBlockquote()
    .addHistory()
    .addTextAlign();
    

  const editor = useEditor({
    editable: !disabled,
    extensions: extensionBuilder.build(),
    content: value,
    onUpdate({ editor }) {
      onChange?.(editor.getHTML());
    },
  });

  if (!editor) return null;

  return (
    <div
      className={cn(
        "w-full border rounded-md text-sm font-normal transition-all",
        hasError && "border-destructive ring-destructive focus:ring-1"
      )}
    >
      <div className="p-2 flex gap-2 flex-wrap">
        {editor && getToolbarItems(editor, extensionBuilder)}
      </div>

      <Separator />

      <EditorContent
        editor={editor}
        className="p-4 prose-editor ProseMirror focus:outline-none"
      />
    </div>
  );
};
