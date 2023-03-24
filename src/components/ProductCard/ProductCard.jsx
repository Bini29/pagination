import Badge from "@/ui/Badge";
import React from "react";
import style from "./ProductCard.module.css";

const ProductCard = ({ title, thumbnailUrl }) => {
  return (
    <div
      className={style.card}
      style={{ backgroundImage: `url(${thumbnailUrl})` }}
    >
      <span className={style.brand}>Brand</span>
      <p>
        Product Name <Badge>New</Badge>
      </p>
    </div>
  );
};
export default ProductCard;
