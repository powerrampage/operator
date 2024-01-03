import { UploadFile as AntUploadFile } from "antd";
import { RcFile } from "antd/lib/upload";
import { useCallback, useMemo, useState } from "react";
import { isArray } from "utils";

export type FileValue = RcFile & { guid?: string };
export type UploadFile<T> = AntUploadFile<T> & { guid?: string };

export interface UseFileCustomArg {
  guid: string;
  uid: string;
  name: string;
  status: string;
  thumbUrl: unknown | string;
  originFileObj: File;
}

export interface UseFileResult<T = any> {
  files: File[];
  fileList: UploadFile<T>[];
  filesWithoutGuid: File[];
  filesWithGuid: File[];
  fileGuids: string[];
  clear(): void;
  remove(index: number): void;
  set(value: FileValue | FileValue[]): void;
  setFiles(value: UploadFile<T>[] | UseFileCustomArg[]): void;
  _antFilesToFiles(files: UploadFile<T>[]): File[];
  _filesToAntFiles(fileList: FileValue[]): UploadFile<T>[];
}

export interface UseFileProps<T = any> {
  defaultFileList?: UploadFile<T>[];
}

export const useFile = <T = any>({
  defaultFileList,
}: UseFileProps<T> = {}): UseFileResult<T> => {
  const [fileList, setFileList] = useState<UploadFile<T>[]>(defaultFileList ?? []);

  const clear = useCallback(() => {
    setFileList([]);
  }, []);

  const remove = useCallback((index: number) => {
    setFileList((prev) => {
      const newList = [...prev];
      newList.splice(index, 1);
      return newList;
    });
  }, []);

  const _filesToAntFiles = useCallback((files: FileValue[]): UploadFile<T>[] => {
    return files.map((file) => ({
      ...file,
      name: file?.name,
      uid: file?.uid,
      status: "done",
      originFileObj: file,
    }));
  }, []);

  const _antFilesToFiles = useCallback((fileList: UploadFile<T>[]) => {
    return fileList.map(({ originFileObj }) => originFileObj!);
  }, []);

  const set = useCallback(
    (value: FileValue | FileValue[]) => {
      const files = _filesToAntFiles(isArray(value) ? value : [value]);

      setFileList((prev) => [...prev, ...files]);
    },
    [_filesToAntFiles]
  );

  const setFiles = useCallback((files: UploadFile<T>[]) => {
    setFileList((prev) => [...prev, ...files]);
  }, []);

  const files = useMemo(() => _antFilesToFiles(fileList), [_antFilesToFiles, fileList]);

  const filesWithoutGuid = useMemo(
    () => fileList.filter(({ guid }) => !guid).map(({ originFileObj }) => originFileObj!),
    [fileList]
  );

  const filesWithGuid = useMemo(
    () => fileList.filter(({ guid }) => guid).map(({ originFileObj }) => originFileObj!),
    [fileList]
  );

  const fileGuids = useMemo(
    () => fileList.filter(({ guid }) => guid).map(({ guid }) => guid!) ?? [],
    [fileList]
  );

  return {
    clear,
    remove,
    fileList,
    set,
    setFiles,
    files,
    filesWithoutGuid,
    filesWithGuid,
    fileGuids,
    _antFilesToFiles,
    _filesToAntFiles,
  };
};
