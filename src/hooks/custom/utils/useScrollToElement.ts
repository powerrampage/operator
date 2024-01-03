export interface ScrollOptions {
  offset?: number;
  duration?: number;
  ease?: string;
}

export const useScrollToElement = (options?: ScrollOptions) => {
  const { offset = 0, duration = 500, ease = "linear" } = options || {};

  const scrollToRef = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  const executeScroll = (ref: React.RefObject<HTMLElement>) => {
    scrollToRef(ref);
  };

  return { executeScroll };
};
