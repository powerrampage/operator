import { FC, Fragment, useRef, useState, useEffect } from "react";
import "./Arrows.scss";
import { TableArrowsProps } from "./Arrows";

const YArrow: FC<TableArrowsProps> = ({
  rootTableRef,
  eventType = "mousemove",
  scrollBehavior = "auto",
  moveSize = 20,
}) => {
  const [visibleTopArrow, setVisibleTopArrow] = useState(false);
  const [visibleBottomArrow, setVisibleBottomArrow] = useState(true);
  const arrowTopRef = useRef<HTMLButtonElement>(null);
  const arrowBottomRef = useRef<HTMLButtonElement>(null);
  const tableHeader = rootTableRef.current?.querySelector(
    ".ant-table-header"
  ) as HTMLDivElement;

  useEffect(() => {
    const tableBody = rootTableRef.current?.querySelector(".ant-table-body");

    if (!tableBody) return;

    function handleVisibleTopArrow({
      target: { scrollTop, scrollHeight, clientHeight },
    }: any) {
      const isEndOfBottomPos = Math.trunc(scrollTop / (scrollHeight - clientHeight)) === 1;
      setVisibleTopArrow(scrollTop >= 1);
      setVisibleBottomArrow(!isEndOfBottomPos);
    }

    tableBody.addEventListener("scroll", handleVisibleTopArrow);

    return () => tableBody.removeEventListener("scroll", handleVisibleTopArrow);
  }, [rootTableRef]);

  useEffect(() => {
    const tableBody = rootTableRef.current?.querySelector(".ant-table-body");
    if (!tableBody) return;

    const arrowBottom = arrowBottomRef.current;
    const arrowTop = arrowTopRef.current;

    function handleBottomMove() {
      tableBody?.scroll({
        top: tableBody.scrollTop + moveSize,
        behavior: scrollBehavior,
      });
    }
    arrowBottom?.addEventListener(eventType, handleBottomMove);

    function handleTopMove() {
      tableBody?.scroll({
        top: tableBody.scrollTop - moveSize,
        behavior: scrollBehavior,
      });
    }
    arrowTop?.addEventListener(eventType, handleTopMove);

    return () => {
      arrowBottom?.removeEventListener(eventType, handleBottomMove);
      arrowTop?.removeEventListener(eventType, handleTopMove);
    };
  }, [
    rootTableRef,
    eventType,
    scrollBehavior,
    visibleTopArrow,
    visibleBottomArrow,
    moveSize,
  ]);

  return (
    <Fragment>
      {visibleTopArrow && (
        <button
          className="sicnt-arrow__top"
          ref={arrowTopRef}
          style={{ top: tableHeader?.offsetHeight }}
        >
          <svg
            width="16"
            height="29"
            viewBox="0 0 16 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.4 16.3734L3.4 28.3734C3 28.7734 2.6 28.9734 2 28.9734C1.4 28.9734 1 28.7734 0.6 28.3734C-0.2 27.5734 -0.2 26.3734 0.6 25.5734L11.2 14.9734L0.6 4.37339C-0.2 3.57339 -0.2 2.37339 0.6 1.57339C1.4 0.773389 2.6 0.773389 3.4 1.57339L15.4 13.5734C16.2 14.3734 16.2 15.5734 15.4 16.3734Z"
              fill="white"
            />
          </svg>
        </button>
      )}

      {visibleBottomArrow && (
        <button className="sicnt-arrow__bottom" ref={arrowBottomRef} style={{ bottom: 73 }}>
          <svg
            width="16"
            height="29"
            viewBox="0 0 16 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.4 16.3734L3.4 28.3734C3 28.7734 2.6 28.9734 2 28.9734C1.4 28.9734 1 28.7734 0.6 28.3734C-0.2 27.5734 -0.2 26.3734 0.6 25.5734L11.2 14.9734L0.6 4.37339C-0.2 3.57339 -0.2 2.37339 0.6 1.57339C1.4 0.773389 2.6 0.773389 3.4 1.57339L15.4 13.5734C16.2 14.3734 16.2 15.5734 15.4 16.3734Z"
              fill="white"
            />
          </svg>
        </button>
      )}
    </Fragment>
  );
};

export default YArrow;
