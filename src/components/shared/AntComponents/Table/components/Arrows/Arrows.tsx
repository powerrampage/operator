import { FC, Fragment, RefObject } from "react";
import "./Arrows.scss";
import XArrow from "./XArrow";
import YArrow from "./YArrow";

export interface TableArrowsProps {
  x?: boolean;
  y?: boolean;
  moveSize?: number;
  scrollBehavior?: ScrollBehavior;
  eventType?: "click" | "mousemove";
  rootTableRef: RefObject<HTMLDivElement>;
}

export const Arrows: FC<TableArrowsProps> = ({
  x,
  y,
  rootTableRef,
  eventType = "mousemove",
  scrollBehavior = "auto",
  moveSize = 20,
}) => {
  return (
    <Fragment>
      {x && <XArrow {...{ rootTableRef, eventType, scrollBehavior, moveSize }} />}
      {y && <YArrow {...{ rootTableRef, eventType, scrollBehavior, moveSize }} />}
    </Fragment>
  );
};
