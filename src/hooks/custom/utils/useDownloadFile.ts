import { useState } from "react";

import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { saveAs } from "file-saver";
import {
  MutationParams,
  MutationResult,
  useAPIMutation,
  MutationOptions,
} from "hooks/custom";
import { getFileNameFromHeaders } from "utils";

type DownloadHandler<TD = unknown, TE = unknown, TV = unknown> = (
  variables: Parameters<MutationResult<TD, TE, TV>["mutate"]>[0],
  options?: {
    fileName?: string;
    extension?: string;
  } & MutationOptions<TD, TE, TV>
) => void;

export interface DownloadFileParams<TData = unknown, TError = unknown, TVariables = unknown>
  extends MutationParams<TData, TError, TVariables> {
  readonly responseType?: AxiosRequestConfig<TData>["responseType"];
  onError?: (error?: AxiosError<TError> | unknown) => void;
  onSuccess?: (response?: AxiosResponse<TData>) => void;
  fileName?: string;
  extension?: string;
}

export const useDownloadFile = <
  TData extends File,
  TError = unknown,
  TVariables = unknown
>({
  url,
  instance,
  responseType = "blob",
  method = "GET",
  config = {},
  options = {},
  onError,
  onSuccess,
  fileName,
  extension,
}: DownloadFileParams<TData, TError, TVariables>) => {
  const [isDownloading, setDownloading] = useState(false);
  const [fileNameAndExt, setFileNameAndExt] = useState({
    fileName,
    extension,
  });

  const mutation = useAPIMutation<TData, TError, TVariables>({
    url,
    instance,
    method,
    config: {
      ...config,
      responseType,
    },
    options: {
      ...options,
      onSuccess: async (response) => {
        setDownloading(true);
        const headersFileName = getFileNameFromHeaders(response.headers);
        const fileBlob = new Blob([response.data]);

        const { fileName, extension } = fileNameAndExt;

        const fileNameWithExt =
          fileName || extension ? `${fileName}.${extension}` : headersFileName;

        try {
          saveAs(fileBlob, fileNameWithExt);
        } catch (error) {
          onError?.(error);
        }

        onSuccess?.(response);
        setDownloading(false);
      },
      onError: (error) => {
        setDownloading(false);
        onError?.(error);
      },
    },
  });

  const { mutate, mutateAsync, isLoading, ...rest } = mutation;

  const download: DownloadHandler<TData, TError, TVariables> = (
    variables,
    options = {}
  ) => {
    const { extension, fileName, ...mutationOptions } = options;
    setFileNameAndExt({ extension, fileName });

    mutate(variables, mutationOptions);
  };

  return {
    ...rest,
    download,
    isDownloading: isLoading || isDownloading,
  };
};