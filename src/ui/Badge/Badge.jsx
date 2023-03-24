import React from "react";
import style from "./Badge.module.css";

const Badge = ({ children }) => {
  return <span className={style.badge}>{children}</span>;
};

export default Badge;
