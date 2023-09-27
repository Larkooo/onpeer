import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DialogClose } from "@radix-ui/react-dialog";
import {
  ButtonIcon,
  Cross2Icon,
  Half2Icon,
  ShadowInnerIcon,
  UploadIcon,
} from "@radix-ui/react-icons";
import useUpload from "src/hooks/useUpload";
import { ReactNode, useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

interface UploadFileProps {
  button?: ReactNode;
  title?: string;
  description?: string;
  accept?: Record<string, string[]>;
  maxFiles?: number;
  maxSize?: number;
  onUpload: (files: File[]) => Promise<void>;
}

export const UploadFile = ({
  button = "Upload",
  title = "Upload",
  description = "",
  onUpload,
  maxFiles = 1,
  accept,
  maxSize,
}: UploadFileProps) => {
  const [uploading, setUploading] = useState(false);
  const [open, setOpen] = useState(false);

  const {
    error,
    files,
    getInputProps,
    getRootProps,
    isDragActive,
    removeFile,
    clear,
  } = useUpload({
    accept: accept,
    maxFiles,
    maxSize,
  });

  useEffect(() => {
    if (!open) {
      clear();
    }
  }, [open]);

  return (
    <Dialog
      open={open}
      onOpenChange={(open) => {
        if (!uploading) setOpen(open);
      }}
    >
      <DialogTrigger asChild>{button ?? <Button>Upload</Button>}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
          <DialogDescription className="text-red-500">
            {error}
          </DialogDescription>
        </DialogHeader>
        <div
          {...(files.length === 0 ? getRootProps() : {})}
          className={`flex border-gray border-2 ${
            files.length === 0 && "border-dashed"
          } h-20 w-full items-center justify-center text-sm flex-wrap`}
        >
          {files.length === 0 && <input {...getInputProps()} />}
          {files.length > 0
            ? files.map((f, i) => (
                <span
                  key={f.name}
                  className="w-full inline-flex items-center justify-center gap-4"
                >
                  <Cross2Icon onClick={() => removeFile(f)} />
                  {f.name}{" "}
                </span>
              ))
            : isDragActive
            ? "Drop your files here"
            : "Drag 'n' drop your files here, or click to select files"}
        </div>
        <DialogFooter className="gap-y-2">
          <div className="text-xs text-gray-400">
            {Object.values(accept as any).join(", ")} supported.
          </div>
          <Button
            onClick={() => setOpen(false)}
            className="text-xs"
            variant="outline"
            disabled={uploading}
          >
            Cancel
          </Button>
          <Button
            onClick={async () => {
              setUploading(true);
              await onUpload(files);
              setUploading(false);
              setOpen(false);
            }}
            className="text-xs"
            type="submit"
            disabled={files.length === 0 || uploading}
          >
            {uploading ? (
              <>
                <UploadIcon className="animate-bounce mr-2" />
                Uploading
              </>
            ) : (
              "Upload"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
