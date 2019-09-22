import React from "react";
import cn from "classnames";

import styles from "./Square.module.scss";

const Square = ({ color }) => {
  return <div className={cn(styles.square, styles[color])}></div>;
};

export { Square };
