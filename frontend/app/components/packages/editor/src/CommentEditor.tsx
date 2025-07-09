import type { Content } from "@tiptap/react";
import { EditorContent, useEditor } from "@tiptap/react";
import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { MenuBar } from "./components/MenuBar";
import { ExtensionBuilder } from "./extensions";
import { TiptapEditorProps } from "./props";

type EditorProps = {
  onChange: (json: Content) => void;
  clearEditor: boolean;
  callbacks: {
    getMentionOptions: (query: string) => Promise<any>;
  };
};

export function CommentEditor({
  onChange,
  callbacks: { getMentionOptions },
  clearEditor,
}: EditorProps) {
  const [saveStatus, setSaveStatus] = useState("Saved");

  const [hydrated, setHydrated] = useState(false);

  const debouncedUpdates = useDebouncedCallback(async ({ editor }) => {
    const json = editor.getJSON();
    setSaveStatus("Saving...");
    onChange(json);
    // Simulate a delay in saving.
    setTimeout(() => {
      setSaveStatus("Saved");
    }, 50);
  }, 50);

  const extensionBuilder = new ExtensionBuilder()
    .addStarterKit({ disableHeading: true })
    .addLink()
    .addPlaceholder()
    .addSlashCommand()
    .addUnderline()
    .addCustomImage()
    .addVideo()
    .addFloatingMenu()
    .addCustomMention(getMentionOptions);
  const editor = useEditor({
    extensions: extensionBuilder.build(),
    editorProps: TiptapEditorProps,
    content: "",
    onUpdate: e => {
      setSaveStatus("Unsaved");
      debouncedUpdates(e);
    },
  });

  // Hydrate the editor with the content from localStorage.
  useEffect(() => {
    if (editor && !hydrated) {
      setHydrated(true);
    }
  }, [editor, hydrated]);

  useEffect(() => {
    editor?.commands.clearContent();
  }, [clearEditor]);

  return (
    <div
      onClick={() => {
        editor?.chain().focus().run();
      }}
      className="relative min-h-[300px] w-full overflow-y-auto rounded-lg border border-gray-100 bg-white p-8 px-6 shadow-sm sm:px-8 dark:border-gray-600 dark:bg-gray-700"
    >
      {editor && <MenuBar editor={editor}></MenuBar>}
      <EditorContent className="mt-10" editor={editor} spellCheck={false} />
    </div>
  );
}
