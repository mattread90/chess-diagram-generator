import React from "react";
import cn from "classnames";

import styles from "./PieceButton.module.scss";

const PieceButton = ({ piece, color, disabled }) => {
  return (
    <button disabled={disabled} className={cn(styles.button, styles[color])}>
      {piece}
    </button>
  );
};

export { PieceButton };
