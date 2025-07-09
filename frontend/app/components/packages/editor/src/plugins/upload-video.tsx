import { shortId } from "@/lib/shortId";
import type { EditorState } from "@tiptap/pm/state";
import { Plugin, PluginKey } from "@tiptap/pm/state";
import type { EditorView } from "@tiptap/pm/view";
import { Decoration, DecorationSet } from "@tiptap/pm/view";
import { EVENTS, publish } from "..";

const uploadKey = new PluginKey("upload-video");

const UploadVideosPlugin = new Plugin({
  key: uploadKey,
  state: {
    init() {
      return DecorationSet.empty;
    },
    apply(tr, set) {
      set = set.map(tr.mapping, tr.doc);
      // See if the transaction adds or removes any placeholders
      // @ts-ignore
      const action = tr.getMeta(this);
      if (action && action.add) {
        const { id, pos, url } = action.add;

        const placeholder = document.createElement("div");
        placeholder.setAttribute("class", "video-placeholder");
        const video = document.createElement("video");
        video.setAttribute(
          "class",
          "opacity-40 rounded-lg border border-gray-200 dark:border-gray-500"
        );
        video.preload = "metadata";
        const source = document.createElement("source");
        source.src = `${url}#t=0.5`;
        video.appendChild(source);

        placeholder.appendChild(video);
        const deco = Decoration.widget(pos + 1, placeholder, {
          id,
        });
        set = set.add(tr.doc, [deco]);
      } else if (action && action.remove) {
        set = set.remove(
          // @ts-ignore
          set.find(null, null, spec => spec.id == action.remove.id)
        );
      }
      return set;
    },
  },
  props: {
    decorations(state) {
      return this.getState(state);
    },
  },
});

export default UploadVideosPlugin;

function findPlaceholder(state: EditorState, id: {}) {
  const decos = uploadKey.getState(state);
  // @ts-ignore
  const found = decos.find(null, null, spec => spec.id == id);
  return found.length ? found[0].from : null;
}

export function startVideoUpload(file: File, view: EditorView, pos: number) {
  // check if the file is an video
  if (!file.type.includes("video/")) {
    publish(EVENTS.FILE_TYPE_NOT_SUPPORTED, "File type not supported.");
    return;

    // check if the file size is less than 20MB
  } else if (file.size / 1024 / 1024 > 50) {
    publish(EVENTS.VIDEO_FILE_SIZE_TOO_BIG, "File size too big (max 50MB).");
    return;
  }

  // A fresh object to act as the ID for this upload
  const id = {};

  // Replace the selection with a placeholder
  const tr = view.state.tr;
  if (!tr.selection.empty) tr.deleteSelection();

  const url = URL.createObjectURL(file);
  tr.setMeta(uploadKey, {
    add: {
      id,
      pos,
      url,
    },
  });
  view.dispatch(tr);

  handleVideoUpload(file).then(({ error, url: src }) => {
    const { schema } = view.state;

    let pos = findPlaceholder(view.state, id);
    // If the content around the placeholder has been deleted, drop
    // the video
    if (pos == null) return;

    if (error) {
      // remove placeholder on error
      const transaction = view.state.tr
        .delete(pos, pos)
        .setMeta(uploadKey, { remove: { id } });
      view.dispatch(transaction);
    } else {
      // Otherwise, insert it at the placeholder's position, and remove
      // the placeholder
      const videoSrc = typeof src === "object" ? url : src;
      const node = schema.nodes.video.create({
        src: videoSrc,
        HTMLAttributes: {
          src: videoSrc,
        },
      });
      const transaction = view.state.tr
        .replaceWith(pos, pos, node)
        .setMeta(uploadKey, { remove: { id } });
      view.dispatch(transaction);
    }

    URL.revokeObjectURL(url);
  });
}

export const handleVideoUpload = async (file: File) => {
  const formData = new FormData();
  formData.append("video", file);
  const id = shortId();
  publish(EVENTS.UPLOAD_LOADING, {
    uploadId: id,
    loading: "Uploading video...",
    success: "Video uploaded successfully.",
    error: "Error uploading video. Please try again.",
  });
  try {
    const res = await fetch("/resources/upload-video", {
      method: "POST",
      body: formData,
    });

    // Successfully uploaded video
    if (res.ok) {
      const url = await res.json();
      publish(EVENTS.UPLOAD_SUCCESS, {
        uploadId: id,
      });
      return { url, error: false };
    } else {
      const message = `Error uploading video. Please try again.`;
      throw new Error(message);
    }
  } catch (e) {
    publish(EVENTS.UPLOAD_ERROR, { uploadId: id });
    return { error: true, url: null };
  }
};
