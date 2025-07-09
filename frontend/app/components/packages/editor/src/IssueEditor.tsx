import type { Content } from "@tiptap/react";
import { EditorContent, useEditor } from "@tiptap/react";
import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { MenuBar } from "./components/MenuBar";
import { ExtensionBuilder } from "./extensions";
import { TiptapEditorProps } from "./props";

type EditorProps = {
  onChange: (json: Content) => void;
  callbacks: {
    getMentionOptions: (query: string) => Promise<any>;
  };
  defaultContent?: Content;
};

export function IssueEditor({
  onChange,
  callbacks: { getMentionOptions },
  defaultContent,
}: EditorProps) {
  const [content, setContent] = useState(defaultContent);
  const [saveStatus, setSaveStatus] = useState("Saved");

  const [hydrated, setHydrated] = useState(false);

  const debouncedUpdates = useDebouncedCallback(async ({ editor }) => {
    const json = editor.getJSON();
    setSaveStatus("Saving...");
    // setContent(JSON.stringify(json));
    onChange(json);
    // Simulate a delay in saving.
    setTimeout(() => {
      setSaveStatus("Saved");
    }, 50);
  }, 50);

  const extensionBuilder = new ExtensionBuilder()
    .addStarterKit({ disableHeading: false })
    .addLink()
    .addPlaceholder()
    .addSlashCommand()
    .addUnderline()
    .addCustomImage()
    .addVideo()
    .addFloatingMenu()
    .addCustomMention(getMentionOptions)
    .addPlaceholder();

  const editor = useEditor({
    extensions: extensionBuilder.build(),
    editorProps: TiptapEditorProps,
    autofocus: "end",
    content: content,
    immediatelyRender: false,
    // content: "",
    onUpdate: e => {
      setSaveStatus("Unsaved");
      debouncedUpdates(e);
    },
  });
  // Hydrate the editor with the content from localStorage.
  useEffect(() => {
    if (editor && content && !hydrated) {
      editor.commands.setContent(content);
      setHydrated(true);
    }
  }, [editor, hydrated, content]);

  return (
    <div
      onClick={() => {
        editor?.chain().focus().run();
      }}
      className="relative min-h-[300px] w-full overflow-y-auto rounded-lg border border-gray-100 bg-white p-8 px-6 shadow-sm sm:px-8 dark:border-gray-600 dark:bg-gray-700"
      // sm:mb-[calc(20vh)]
    >
      {editor && (
        <MenuBar editor={editor}>
          {/* <Badge size="md" rounded="md">
            {saveStatus}
          </Badge> */}
        </MenuBar>
      )}
      {/* {editor && <EditorBubbleMenu editor={editor} />} */}
      {/* {editor?.isActive("image") && <ImageResizer editor={editor} />} */}
      <EditorContent className="mt-10" editor={editor} />
    </div>
  );
}
