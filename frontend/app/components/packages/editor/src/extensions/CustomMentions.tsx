import { MentionTag } from "@/components/MentionTag";
import Mention from "@tiptap/extension-mention";
import { ReactNodeViewRenderer } from "@tiptap/react";
// //
// declare module "@tiptap/core" {
//   interface Commands<ReturnType> {
//     customMention: {
//       insertMention: () => ({
//         commands,
//       }: {
//         commands: RawCommands;
//       }) => ReturnType;
//     };
//   }
// }
// export declare const insertMention: RawCommands["insertMention"];
export const CustomMention = Mention.extend({
  name: "customMention",

  addAttributes() {
    return {
      id: {
        default: null,
      },
      reputation: {
        default: null,
      },
      user: {
        default: null,
      },
    };
  },

  addNodeView() {
    return ReactNodeViewRenderer(MentionTag);
  },
  renderHTML({ HTMLAttributes, node }) {
    return [
      "a",
      {
        ...HTMLAttributes,
        href: "/members/" + node.attrs.user.username,
        class:
          "rounded-md bg-gray-100 dark:bg-gray-700 px-1.5 py-1 font-medium text-gray-900 dark:text-gray-200",
      },
      `@${node.attrs.user.username}`,
    ];
  },
});
