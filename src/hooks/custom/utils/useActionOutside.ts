import { RefObject, useEffect } from "react";

export type EventType = keyof DocumentEventMap;

export const useActionOutside = <T extends HTMLElement>(
  ref: RefObject<T>,
  callback: () => void
): void => {
  const handleClick = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      handleClick(event);
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [callback, ref]);
};
