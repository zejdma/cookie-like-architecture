import type { EditorProps } from "@tiptap/pm/view";
import { EVENTS, publish } from "./events/events";
import { startImageUpload } from "./plugins/upload-images";
import { startVideoUpload } from "./plugins/upload-video";

export const TiptapEditorProps: EditorProps = {
  attributes: {
    class: `prose prose-stone dark:prose-invert prose-code:before:content-none prose-code:after:content-none focus:outline-none max-w-full`,
  },
  handleDOMEvents: {
    keydown: (_view, event) => {
      // prevent default event listeners from firing when slash command is active
      if (["ArrowUp", "ArrowDown", "Enter"].includes(event.key)) {
        const slashCommand = document.querySelector("#slash-command");
        if (slashCommand) {
          return true;
        }
      }
    },
  },
  handlePaste: (view, event) => {
    if (
      event.clipboardData &&
      event.clipboardData.files &&
      event.clipboardData.files[0]
    ) {
      event.preventDefault();
      const file = event.clipboardData.files[0];
      const pos = view.state.selection.from;

      if (file.type.includes("image/")) {
        startImageUpload(file, view, pos);
      } else if (file.type.includes("video/")) {
        startVideoUpload(file, view, pos);
      } else {
        publish(EVENTS.FILE_TYPE_NOT_SUPPORTED, "File type not supported.");
      }
      return true;
    }
    return false;
  },
  handleDrop: (view, event, _slice, moved) => {
    if (
      !moved &&
      event.dataTransfer &&
      event.dataTransfer.files &&
      event.dataTransfer.files[0]
    ) {
      event.preventDefault();
      const file = event.dataTransfer.files[0];
      const coordinates = view.posAtCoords({
        left: event.clientX,
        top: event.clientY,
      });

      if (coordinates) {
        if (file.type.includes("image/")) {
          startImageUpload(file, view, coordinates.pos);
        } else if (file.type.includes("video/")) {
          startVideoUpload(file, view, coordinates.pos);
        } else {
          publish(EVENTS.FILE_TYPE_NOT_SUPPORTED, "File type not supported.");
        }
      }

      return true;
    }
    return false;
  },
};
