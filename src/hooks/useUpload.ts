import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

interface IUpload {
  accept?: Record<string, string[]>;
  maxFiles?: number;
  maxSize?: number;
  onDropFiles?: (files: File[]) => void;
}

const useUpload = ({
  accept,
  maxFiles = 1,
  maxSize,
  onDropFiles,
}: IUpload) => {
  const [error, setError] = useState<string>();
  const [files, setFiles] = useState<File[]>([]);

  const onDrop = useCallback((files: File[]) => {
    setFiles(files);
    onDropFiles?.(files);
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

  const clear = () => {
    setFiles([]);
    setError(undefined);
  };

  const removeFile = (file: File) => {
    setFiles((files) => files.filter((f) => f !== file));
  }

  return {
    getRootProps,
    getInputProps,
    isDragActive,
    error,
    files,
    removeFile,
    clear,
  };
};

export default useUpload;
