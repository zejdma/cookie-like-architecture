import * as react_jsx_runtime from 'react/jsx-runtime';
import { Content } from '@tiptap/react';
import { Mark, Node, Extension } from '@tiptap/core';

type EditorProps$1 = {
    onChange: (json: Content) => void;
    clearEditor: boolean;
    callbacks: {
        getMentionOptions: (query: string) => Promise<any>;
    };
};
declare function CommentEditor({ onChange, callbacks: { getMentionOptions }, clearEditor, }: EditorProps$1): react_jsx_runtime.JSX.Element;

declare const EVENTS: {
    readonly FILE_TYPE_NOT_SUPPORTED: "FILE_TYPE_NOT_SUPPORTED";
    readonly IMAGE_FILE_SIZE_TOO_BIG: "IMAGE_FILE_SIZE_TOO_BIG";
    readonly VIDEO_FILE_SIZE_TOO_BIG: "VIDEO_FILE_SIZE_TOO_BIG";
    readonly UPLOAD_LOADING: "UPLOAD_LOADING";
    readonly UPLOAD_SUCCESS: "UPLOAD_SUCCESS";
    readonly UPLOAD_ERROR: "UPLOAD_ERROR";
};
declare function subscribe(eventName: string, listener: (e: CustomEvent) => void): void;
declare function unsubscribe(eventName: string, listener: (e: CustomEvent) => void): void;
declare function publish(eventName: string, data: string | object): void;

type TExtension = Mark<any, any> | Node<any, any> | Extension<any, any>;
type TInitServerExtensionsProps = {
    disableHeading?: boolean;
};
declare class ExtensionBuilder {
    private extensions;
    constructor();
    addExtension(extension: TExtension): this;
    addStarterKit({ disableHeading, }: {
        disableHeading?: boolean;
    }): this;
    addHorizontalRule(): this;
    addLink(): this;
    addPlaceholder(): this;
    addSlashCommand(): this;
    addUnderline(): this;
    addCustomImage(): this;
    addVideo(): this;
    addFloatingMenu(): this;
    addCustomMention(getMentionOptions: any): this;
    initServerExtensions(props?: TInitServerExtensionsProps): this;
    build(): TExtension[];
}

type EditorProps = {
    onChange: (json: Content) => void;
    callbacks: {
        getMentionOptions: (query: string) => Promise<any>;
    };
    defaultContent?: Content;
};
declare function IssueEditor({ onChange, callbacks: { getMentionOptions }, defaultContent, }: EditorProps): react_jsx_runtime.JSX.Element;

declare const generateRichtextHtml: (content: any) => string;

export { CommentEditor, EVENTS, ExtensionBuilder, IssueEditor, type TExtension, generateRichtextHtml, publish, subscribe, unsubscribe };
