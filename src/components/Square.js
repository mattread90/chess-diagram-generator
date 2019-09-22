import React from "react";
import cn from "classnames";

import styles from "./Square.module.scss";

const Square = ({ color, piece, selected }) => {
  return (
    <div
      className={cn(styles.square, styles[color], {
        [styles.selected]: selected
      })}
    >
      {piece}
    </div>
  );
};

export { Square };
