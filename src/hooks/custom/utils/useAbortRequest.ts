import { useEffect, useRef } from 'react';

const useAbortRequest = () => {
  const controller = useRef<AbortController>(new AbortController());

  useEffect(() => {
    const abortController = controller.current;

    return () => {
      abortController.abort();
    };
  }, []);

  return {
    signal: controller.current.signal,
  };
};

export default useAbortRequest;
