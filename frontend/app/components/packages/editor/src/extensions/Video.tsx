import UploadVideosPlugin from "@/plugins/upload-video";
import { Node, mergeAttributes, nodeInputRule } from "@tiptap/react";

export interface VideoOptions {
  HTMLAttributes: Record<string, any>;
}

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    video: {
      /**
       * Set a video node
       */
      setVideo: (src: string) => ReturnType;
      /**
       * Toggle a video
       */
      toggleVideo: (src: string) => ReturnType;
    };
  }
}

const VIDEO_INPUT_REGEX = /!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\)/;

export const Video = Node.create({
  name: "video",

  group: "block",

  draggable: true,

  addOptions() {
    return {
      HTMLAttributes: {
        src: null,
      },
    };
  },

  addAttributes() {
    return {
      width: {
        default: null,
      },
      height: {
        default: null,
      },
      src: {
        default: null,
        parseHTML: el => (el as HTMLVideoElement).getAttribute("src"),
        renderHTML: attrs => {
          return {
            src: attrs.src,
          };
        },
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: "video",
        getAttrs: el => ({ src: (el as HTMLVideoElement).getAttribute("src") }),
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "video",
      mergeAttributes(
        this.options.HTMLAttributes,
        { controls: "true", controlsList: "nodownload" },
        HTMLAttributes
      ),
      ["source", { src: HTMLAttributes.src }],
    ];
  },

  addCommands() {
    return {
      setVideo:
        (src: string) =>
        ({ commands }) =>
          commands.insertContent(
            `<video controls="true" controlsList="nodownload" src="${src}" />`
          ),

      toggleVideo:
        () =>
        ({ commands }) =>
          commands.toggleNode(this.name, "paragraph"),
    };
  },

  addInputRules() {
    return [
      nodeInputRule({
        find: VIDEO_INPUT_REGEX,
        type: this.type,
        getAttributes: match => {
          const [, , src] = match;

          return { src };
        },
      }),
    ];
  },

  addProseMirrorPlugins() {
    return [UploadVideosPlugin];
  },
});
