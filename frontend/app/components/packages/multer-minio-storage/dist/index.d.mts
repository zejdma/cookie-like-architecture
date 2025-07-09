declare function autoContentType(req: any, file: any, cb: any): void;
declare function export_default(opts: any): any;
declare const AUTO_CONTENT_TYPE: typeof autoContentType;
declare const DEFAULT_CONTENT_TYPE: (req: any, file: any, cb: any) => void;

export { AUTO_CONTENT_TYPE, DEFAULT_CONTENT_TYPE, export_default as default };
