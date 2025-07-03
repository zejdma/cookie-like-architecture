import { useEffect, useRef, useState } from "react";
import { UploadCloud, Trash2, Pencil } from "lucide-react";
import { Button } from "~/components/ui/button";

function formatBytes(bytes: number): string {
  if (bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}

type ImageDropzoneProps = {
  field: {
    value?: File | null;
    onChange?: (file: File | null) => void;
    defaultValue?: string;
  };
};

export function ImageDropzone({
  field
}: ImageDropzoneProps) {
  const [preview, setPreview] = useState<string | null>(field.defaultValue || null);
  const [fileInfo, setFileInfo] = useState<{ name: string; size: number } | null>(
    field.value ? { name: field.value.name, size: field.value.size } : null
  );
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (field.value instanceof File) {
      const reader = new FileReader();
      reader.onload = () => setPreview(reader.result as string);
      reader.readAsDataURL(field.value);
      setFileInfo({ name: field.value.name, size: field.value.size });
    }
  }, [field.value]);

  const handleFile = (file: File) => {
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => setPreview(reader.result as string);
      reader.readAsDataURL(file);
      setFileInfo({ name: file.name, size: file.size });
      field.onChange?.(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) handleFile(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    if (!isDragging) setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const handleDelete = () => {
    setPreview(null);
    setFileInfo(null);
    field.onChange?.(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleClick = () => fileInputRef.current?.click();

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      className={`border-2 border-dashed rounded-md w-full p-4 transition-all overflow-hidden ${
        isDragging
          ? "border-accent-bohemia bg-gray-50 text-accent-bohemia"
          : "border-gray-300 text-gray-600"
      }`}
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
          <div className="w-full md:w-1/2 flex justify-center items-center max-h-[400px] overflow-hidden">
            <img
              src={preview}
              alt="Preview"
              className="max-h-[400px] w-auto rounded-md object-contain"
            />
          </div>

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
              <Button onClick={handleClick} variant="secondary" size="small">
                <Pencil className="w-4 h-4" />
                Change
              </Button>
              <Button
                onClick={handleDelete}
                variant="softDestructive"
                size="small"
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
          <p className="mb-4">Drag and drop image here or select it using the button</p>
          <Button onClick={handleClick} variant="secondary">
            Select Image
          </Button>
        </div>
      )}
    </div>
  );
}