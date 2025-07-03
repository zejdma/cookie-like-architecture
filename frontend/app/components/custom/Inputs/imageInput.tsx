import { useEffect, useRef, useState } from "react";
import { UploadCloud, Trash2, Pencil } from "lucide-react";
import { Button } from "~/components/ui/button";
import { useFormContext } from "react-hook-form";

// -----------------------------
// 📐 Utils
// -----------------------------

function formatBytes(bytes: number): string {
  if (bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}

// -----------------------------
// 🧩 Types
// -----------------------------

type ImageDropzoneProps = {
  value?: File | null;
  onChange?: (file: File | null) => void;
  fieldName?: string;
  trigger?: (name: string) => Promise<boolean>;
};

// -----------------------------
// 🧱 Main Component
// -----------------------------

export function ImageDropzone({
  value,
  onChange,
  fieldName,
  trigger,
}: ImageDropzoneProps) {

  const {
    formState: { errors },
    clearErrors,
  } = useFormContext();
  
  const hasError = fieldName ? !!errors[fieldName] : false;

  const [preview, setPreview] = useState<string | null>(null);
  const [fileInfo, setFileInfo] = useState<{
    name: string;
    size: number;
  } | null>(value ? { name: value.name, size: value.size } : null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // -----------------------------
  // 🧠 Lifecycle
  // -----------------------------

  useEffect(() => {
    if (value instanceof File) {
      const reader = new FileReader();
      reader.onload = () => setPreview(reader.result as string);
      reader.readAsDataURL(value);
      setFileInfo({ name: value.name, size: value.size });
    } else {
      setPreview(null);
      setFileInfo(null);
    }
  }, [value]);

  // -----------------------------
  // 📦 Handlers
  // -----------------------------

  const handleFile = (file: File) => {
    if (!file.type.startsWith("image/")) return;

    const reader = new FileReader();
    reader.onload = () => setPreview(reader.result as string);
    reader.readAsDataURL(file);

    setFileInfo({ name: file.name, size: file.size });
    onChange?.(file);
    trigger?.(fieldName ?? "");
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) handleFile(file);
  };

  const handleDelete = () => {
    setPreview(null);
    setFileInfo(null);
    onChange?.(null);
    fileInputRef.current && (fileInputRef.current.value = "");
    fieldName && clearErrors(fieldName);
  };

  const handleClick = () => fileInputRef.current?.click();

  // -----------------------------
  // 🎨 Render
  // -----------------------------

  return (
    <div
      onDrop={handleDrop}
      onDragOver={(e) => {
        e.preventDefault();
        !isDragging && setIsDragging(true);
      }}
      onDragLeave={() => setIsDragging(false)}
      className={`md:flex md:items-center md:justify-center border-2 border-dashed rounded-md w-full p-4 transition-all overflow-hidden ${
        isDragging
          ? "border-accent-bohemia bg-gray-50 text-accent-bohemia"
          : hasError
          ? "border-destructive"
          : "border-gray-300 text-gray-600"
      } md:h-[300px]`}
    >
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />

      {preview ? (
        <div className="flex flex-col md:flex-row items-center justify-center w-full gap-6 flex-wrap md:flex-nowrap overflow-hidden">
          {/* 🖼️ Image */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <img
              src={preview}
              alt="Preview"
              className="max-h-[250px] max-w-full w-auto rounded-md object-contain"
            />
          </div>

          {/* ℹ️ Info + Actions */}
          <div className="w-full md:w-1/2 flex flex-col justify-center gap-4 max-w-full min-w-0 overflow-hidden">
            {fileInfo && (
              <div className="text-sm max-w-full space-y-1 overflow-hidden">
                <div className="truncate break-all" title={fileInfo.name}>
                  <strong>Name:</strong> {fileInfo.name}
                </div>
                <div>
                  <strong>Size:</strong> {formatBytes(fileInfo.size)}
                </div>
                <div>
                  <strong>Extension:</strong>{" "}
                  {fileInfo.name.split(".").pop()?.toLowerCase()}
                </div>
              </div>
            )}

            <div className="flex gap-3 flex-wrap">
              <Button
                onClick={handleClick}
                variant="secondary"
                size="small"
                type="button"
              >
                <Pencil className="w-4 h-4" />
                Change
              </Button>
              <Button
                onClick={handleDelete}
                variant="softDestructive"
                size="small"
                type="button"
              >
                <Trash2 className="w-4 h-4" />
                Delete
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center text-center">
          <UploadCloud className="w-12 h-12 mb-2" />
          <p className="mb-4">
            Drag and drop image here or select it using the button
          </p>
          <Button type="button" onClick={handleClick} variant="secondary">
            Select Image
          </Button>
        </div>
      )}
    </div>
  );
}
