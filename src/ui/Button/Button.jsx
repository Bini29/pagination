import Link from "next/link";
import React from "react";
import style from "./Button.module.css";

const Button = ({
  stylebutton,
  children,
  onClick,
  link,
  href,
  large,
  display,
}) => {
  let mainStyle = style.btn;

  switch (stylebutton) {
    case "default":
      mainStyle += ` ${style.default}`;
      break;
    case "success":
      mainStyle += ` ${style.success}`;
      break;
    case "danger":
      mainStyle += ` ${style.danger}`;
      break;
    case "disabled":
      mainStyle += ` ${style.disabled}`;
      break;
  }

  if (link) {
    return (
      <Link
        style={{ display: display ? display : "initial" }}
        className={[mainStyle, large ? style.large : null].join(" ")}
        href={href}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick ? onClick() : null}
      style={{ display: display ? display : "initial" }}
      className={[mainStyle, large ? style.large : null].join(" ")}
    >
      {children}
    </button>
  );
};

export default Button;
