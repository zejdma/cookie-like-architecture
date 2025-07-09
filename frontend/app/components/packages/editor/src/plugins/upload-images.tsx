import { EVENTS, publish } from "@/events/events";
import { shortId } from "@/lib/shortId";
import type { EditorState } from "@tiptap/pm/state";
import { Plugin, PluginKey } from "@tiptap/pm/state";
import type { EditorView } from "@tiptap/pm/view";
import { Decoration, DecorationSet } from "@tiptap/pm/view";

const uploadKey = new PluginKey("upload-image");

const UploadImagesPlugin = new Plugin({
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
        const { id, pos, src } = action.add;

        const placeholder = document.createElement("div");
        placeholder.setAttribute("class", "img-placeholder");
        const image = document.createElement("img");
        image.setAttribute(
          "class",
          "opacity-40 rounded-lg border border-gray-200 dark:border-gray-500"
        );
        image.src = src;
        placeholder.appendChild(image);
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

export default UploadImagesPlugin;

function findPlaceholder(state: EditorState, id: {}) {
  const decos = uploadKey.getState(state);
  // @ts-ignore
  const found = decos.find(null, null, spec => spec.id == id);
  return found.length ? found[0].from : null;
}

async function promptForImageDetails(
  file: File
): Promise<{ name: string; alt: string } | null> {
  // Get the original filename without extension
  const originalName = file.name.split(".").slice(0, -1).join(".");

  // Create a modal dialog for image details
  return new Promise(resolve => {
    const dialog = document.createElement("dialog");
    document.body.appendChild(dialog);

    dialog.className =
      "fixed inset-0 z-50 flex items-center justify-center w-full md:w-[450px] rounded-md bg-white dark:bg-gray-800";

    const form = document.createElement("form");
    form.className =
      "bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full";
    form.method = "dialog";

    const header = document.createElement("h2");
    header.textContent = "Image Details";
    header.className = "text-lg font-bold mb-4 text-black dark:text-white";

    const nameLabel = document.createElement("label");
    nameLabel.textContent = "Image Name";
    nameLabel.className =
      "text-black dark:text-white text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70";

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.value = originalName;
    nameInput.className =
      "text-black dark:text-white dark:bg-gray-700 placeholder:text-muted-foreground focus:ring-primary dark:focus:ring-primary ring-input file:text-foreground block w-full rounded-md border-0 bg-white py-1.5 shadow-sm ring-1 ring-inset file:border-0 file:bg-transparent file:px-3 file:text-sm file:font-medium focus:ring-2 focus:ring-inset disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid=true]:text-red-900 aria-[invalid=true]:ring-red-600 aria-[invalid=true]:placeholder:text-red-500 sm:text-sm sm:leading-6 dark:aria-[invalid=true]:text-red-500 dark:aria-[invalid=true]:ring-red-500 dark:aria-[invalid=true]:placeholder:text-red-400 dark:ring-gray-600";
    nameInput.required = true;

    const altLabel = document.createElement("label");
    altLabel.textContent = "Alt Text";
    altLabel.className =
      "text-black dark:text-white text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70";

    const altInput = document.createElement("input");
    altInput.type = "text";
    altInput.placeholder = "Describe this image for accessibility";
    altInput.className =
      "text-black dark:text-white dark:bg-gray-700 placeholder:text-muted-foreground focus:ring-primary dark:focus:ring-primary ring-input file:text-foreground block w-full rounded-md border-0 bg-white py-1.5 shadow-sm ring-1 ring-inset file:border-0 file:bg-transparent file:px-3 file:text-sm file:font-medium focus:ring-2 focus:ring-inset disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid=true]:text-red-900 aria-[invalid=true]:ring-red-600 aria-[invalid=true]:placeholder:text-red-500 sm:text-sm sm:leading-6 dark:aria-[invalid=true]:text-red-500 dark:aria-[invalid=true]:ring-red-500 dark:aria-[invalid=true]:placeholder:text-red-400 dark:ring-gray-600";

    const buttonContainer = document.createElement("div");
    buttonContainer.className = "flex justify-end gap-2 mt-4";

    const cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel";
    cancelButton.className =
      "inline-flex items-center justify-center font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-md px-3 py-2 text-sm bg-background-primary dark:hover:bg-white/20 text-secondary-foreground ring-gray-300 dark:ring-gray-600 hover:bg-gray-50 shadow-sm ring-1 ring-inset focus-visible:outline-primary";
    cancelButton.type = "button";
    cancelButton.onclick = () => {
      dialog.close();
      resolve(null);
    };

    const submitButton = document.createElement("button");
    submitButton.textContent = "Upload";
    submitButton.className =
      "inline-flex items-center justify-center font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary-hover focus-visible:outline-primary rounded-md px-3 py-2 text-sm";
    submitButton.type = "submit";

    buttonContainer.appendChild(cancelButton);
    buttonContainer.appendChild(submitButton);

    form.appendChild(header);
    form.appendChild(nameLabel);
    form.appendChild(nameInput);
    form.appendChild(altLabel);
    form.appendChild(altInput);
    form.appendChild(buttonContainer);

    form.onsubmit = e => {
      e.preventDefault();
      dialog.close();
      resolve({
        name: nameInput.value.trim() || originalName,
        alt: altInput.value.trim(),
      });
    };

    dialog.appendChild(form);
    dialog.showModal();

    dialog.addEventListener("close", () => {
      document.body.removeChild(dialog);
    });
  });
}

export function startImageUpload(file: File, view: EditorView, pos: number) {
  // check if the file is an image

  if (!file.type.includes("image/")) {
    publish(EVENTS.FILE_TYPE_NOT_SUPPORTED, "File type not supported.");
    return;

    // check if the file size is less than 10MB
  } else if (file.size / 1024 / 1024 > 10) {
    publish(EVENTS.IMAGE_FILE_SIZE_TOO_BIG, "File size too big (max 10MB).");
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
      src: url,
    },
  });
  view.dispatch(tr);

  // Prompt for image details before uploading
  promptForImageDetails(file).then(details => {
    if (details === null) {
      // User cancelled - remove the placeholder
      const pos = findPlaceholder(view.state, id);
      if (pos !== null) {
        const transaction = view.state.tr
          .delete(pos, pos)
          .setMeta(uploadKey, { remove: { id } });
        view.dispatch(transaction);
      }
      URL.revokeObjectURL(url);
      return;
    }

    // Continue with upload, passing image details
    handleImageUpload(file, details).then(({ error, url: src, alt }) => {
      const { schema } = view.state;

      let pos = findPlaceholder(view.state, id);
      // If the content around the placeholder has been deleted, drop
      // the image
      if (pos == null) return;

      // Otherwise, insert it at the placeholder's position, and remove
      // the placeholder

      // When BLOB_READ_WRITE_TOKEN is not valid or unavailable, read
      // the image locally
      if (error) {
        // remove placeholder on error
        const transaction = view.state.tr
          .delete(pos, pos)
          .setMeta(uploadKey, { remove: { id } });
        view.dispatch(transaction);
      } else {
        const imageSrc = typeof src === "object" ? url : src;

        const node = schema.nodes.image.create({
          src: imageSrc,
          alt: alt || "",
        });
        const transaction = view.state.tr
          .replaceWith(pos, pos, node)
          .setMeta(uploadKey, { remove: { id } });
        view.dispatch(transaction);
      }

      URL.revokeObjectURL(url);
    });
  });
}

export const handleImageUpload = async (
  file: File,
  details?: { name: string; alt: string }
) => {
  const formData = new FormData();

  // If a custom name was provided, create a new file with that name
  if (details?.name) {
    const extension = file.name.split(".").pop();
    const newFileName = `${details.name}.${extension}`;
    formData.append("image", file, newFileName);
  } else {
    formData.append("image", file);
  }

  // Add alt text to the form data if provided
  if (details?.alt) {
    formData.append("alt", details.alt);
  }

  const id = shortId();
  publish(EVENTS.UPLOAD_LOADING, {
    uploadId: id,
    loading: "Uploading image...",
    success: "Image uploaded successfully.",
    error: "Error uploading image. Please try again.",
  });
  try {
    const res = await fetch("/resources/upload-image", {
      method: "POST",
      body: formData,
    });
    // Successfully uploaded image
    if (res.ok) {
      const { url } = (await res.json()) as { url: string };
      // preload the image
      return await new Promise<{ url: string; error: boolean; alt?: string }>(
        (resolve, reject) => {
          let image = new Image();
          image.src = url;
          image.onload = () => {
            publish(EVENTS.UPLOAD_SUCCESS, {
              uploadId: id,
            });
            resolve({ url, error: false, alt: details?.alt });
          };
          image.onerror = reject;
        }
      );
    } else {
      const message = `Error uploading image. Please try again.`;
      throw new Error(message);
    }
  } catch (e) {
    publish(EVENTS.UPLOAD_ERROR, { uploadId: id });
    return { error: true, url: null };
  }
};
