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
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

interface UploadFileProps {
  accept?: Record<string, string[]>;
  maxFiles?: number;
  maxSize?: number;
  onUpload: (files: File[]) => void;
}

export const UploadFile = ({
  onUpload,
  maxFiles = 1,
  accept,
  maxSize,
}: UploadFileProps) => {
  const onDrop = useCallback((files: File[]) => {
    onUpload(files);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles,
    accept,
    maxSize,
    multiple: maxFiles > 1,
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Upload</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Upload</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div
          {...getRootProps()}
          className="flex border-gray border-2 border-dashed h-20 w-full items-center justify-center text-sm"
        >
          <input {...getInputProps()} />
          {isDragActive
            ? "Drop your files here"
            : "Drag 'n' drop your files here, or click to select files"}
        </div>
        <DialogFooter>
          <Button type="submit">Upload</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
