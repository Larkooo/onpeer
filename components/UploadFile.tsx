import { Button } from "../@/components/ui/button";
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
import { ButtonIcon, Cross2Icon } from "@radix-ui/react-icons";
import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

interface UploadFileProps {
  buttonText?: string;
  title?: string;
  description?: string;
  accept?: Record<string, string[]>;
  maxFiles?: number;
  maxSize?: number;
  onUpload: (files: File[]) => void;
}

export const UploadFile = ({
  buttonText = "Upload",
  title = "Upload",
  description = "",
  onUpload,
  maxFiles = 1,
  accept,
  maxSize,
}: UploadFileProps) => {
  const [open, setOpen] = useState(false);

  const [error, setError] = useState<string>();
  const [files, setFiles] = useState<File[]>([]);

  const onDrop = useCallback((files: File[]) => {
    setFiles(files);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles,
    accept,
    maxSize,
    multiple: maxFiles > 1,
    onDropRejected(fileRejections, event) {
      setError(fileRejections[0].errors[0].message);
    },
  });

  useEffect(() => {
    if (!open) {
      setFiles([]);
      setError(undefined);
    }
  }, [open]);

  return (
    <Dialog onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">{buttonText}</Button>
      </DialogTrigger>
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
                <span className="w-full inline-flex items-center justify-center gap-4">
                  <Cross2Icon
                    onClick={() =>
                      setFiles((files) => files.filter((_, m) => i !== m))
                    }
                  />
                  {f.name}{" "}
                </span>
              ))
            : isDragActive
            ? "Drop your files here"
            : "Drag 'n' drop your files here, or click to select files"}
        </div>
        <DialogFooter>
          <div className="text-xs text-gray-400">
            {Object.values(accept as any).join(", ")} supported.
          </div>
          <DialogClose>
            <Button className="text-xs" variant="outline">
              Cancel
            </Button>
          </DialogClose>
          <Button
            onClick={() => files.length !== 0 && onUpload(files)}
            className="text-xs"
            type="submit"
            disabled={files.length === 0}
          >
            Upload
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
