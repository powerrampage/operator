import { FC, Fragment, useRef, useState, useEffect } from "react";
import "./Arrows.scss";
import { TableArrowsProps } from "./Arrows";

const XArrow: FC<TableArrowsProps> = ({
  rootTableRef,
  eventType = "mousemove",
  scrollBehavior = "auto",
  moveSize = 20,
}) => {
  const [visibleLeftArrow, setVisibleLeftArrow] = useState(false);
  const [visibleRightArrow, setVisibleRightArrow] = useState(true);
  const arrowLeftRef = useRef<HTMLButtonElement>(null);
  const arrowRightRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const tableBody = rootTableRef.current?.querySelector(".ant-table-body");

    if (!tableBody) return;

    function handleVisibleArrows({
      target: { scrollLeft, scrollWidth, clientWidth },
    }: any) {
      const isEndOfRightPos = Math.trunc(scrollLeft / (scrollWidth - clientWidth)) === 1;

      setVisibleLeftArrow(scrollLeft >= 1);
      setVisibleRightArrow(!isEndOfRightPos);
    }

    tableBody.addEventListener("scroll", handleVisibleArrows);

    return () => tableBody.removeEventListener("scroll", handleVisibleArrows);
  }, [rootTableRef]);

  useEffect(() => {
    const tableBody = rootTableRef.current?.querySelector(".ant-table-body");
    if (!tableBody) return;

    const arrowRight = arrowRightRef.current;
    const arrowLeft = arrowLeftRef.current;

    function handleRightMove() {
      tableBody?.scroll({
        left: tableBody.scrollLeft + moveSize,
        behavior: scrollBehavior,
      });
    }
    arrowRight?.addEventListener(eventType, handleRightMove);

    function handleLeftMove() {
      tableBody?.scroll({
        left: tableBody.scrollLeft - moveSize,
        behavior: scrollBehavior,
      });
    }

    arrowLeft?.addEventListener(eventType, handleLeftMove);

    return () => {
      arrowRight?.removeEventListener(eventType, handleRightMove);
      arrowLeft?.removeEventListener(eventType, handleLeftMove);
    };
  }, [
    rootTableRef,
    eventType,
    scrollBehavior,
    visibleLeftArrow,
    visibleRightArrow,
    moveSize,
  ]);

  return (
    <Fragment>
      {visibleLeftArrow && (
        <button className="sicnt-arrow__left" ref={arrowLeftRef}>
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

      {visibleRightArrow && (
        <button className="sicnt-arrow__right" ref={arrowRightRef}>
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

export default XArrow;
