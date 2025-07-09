export const EVENTS = {
  FILE_TYPE_NOT_SUPPORTED: "FILE_TYPE_NOT_SUPPORTED",
  IMAGE_FILE_SIZE_TOO_BIG: "IMAGE_FILE_SIZE_TOO_BIG",
  VIDEO_FILE_SIZE_TOO_BIG: "VIDEO_FILE_SIZE_TOO_BIG",
  UPLOAD_LOADING: "UPLOAD_LOADING",
  UPLOAD_SUCCESS: "UPLOAD_SUCCESS",
  UPLOAD_ERROR: "UPLOAD_ERROR",
} as const;

function subscribe(eventName: string, listener: (e: CustomEvent) => void) {
  if (typeof document === "undefined") {
    throw new Error("Document is not defined");
  }
  document.addEventListener(eventName, listener as EventListener);
}

function unsubscribe(eventName: string, listener: (e: CustomEvent) => void) {
  if (typeof document === "undefined") {
    throw new Error("Document is not defined");
  }
  document.removeEventListener(eventName, listener as EventListener);
}

function publish(eventName: string, data: string | object) {
  if (typeof document === "undefined") {
    throw new Error("Document is not defined");
  }
  const event = new CustomEvent(eventName, { detail: data });
  document.dispatchEvent(event);
}

export { publish, subscribe, unsubscribe };
