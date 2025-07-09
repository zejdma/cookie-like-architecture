import { ExtensionBuilder } from "@/extensions";
import { generateHTML } from "@tiptap/html";

// mention plugin not necessary
const extensionBuilder = new ExtensionBuilder().initServerExtensions();
const generateRichtextHtml = (content: any) => {
  try {
    return generateHTML(content, extensionBuilder.build());
  } catch (err) {
    throw Error("Error: generating richtext html");
  }
};

export { generateRichtextHtml };
