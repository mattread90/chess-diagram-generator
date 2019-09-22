import React from "react";
import cn from "classnames";

import styles from "./Coord.module.scss";

const ROW = Array(8).fill(null);

const Coord = ({ children, float }) => (
  <div className={cn(styles.coord, styles[float])}>{children}</div>
);

export const RowCoords = () =>
  ROW.map((_, index) => {
    return (
      <Coord key={`row-coord-${index}`} float={"right"}>
        {8 - index}
      </Coord>
    );
  });

export const ColCoords = () =>
  ROW.map((_, index) => {
    return (
      <Coord key={`col-coord-${index}`} float={"top"}>
        {String.fromCharCode(65 + index).toLocaleLowerCase()}
      </Coord>
    );
  });
