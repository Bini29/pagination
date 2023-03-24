import React from "react";
import Pagination from "../Pagination/Pagination";
import ProductCard from "../ProductCard/ProductCard";
import style from "./PaginatedPage.module.css";

const PaginationPage = ({ currentPage, totalProducts, perPage, products }) => {
  return (
    <div>
      <div className={style.wrapper}>
        {products.map((product, i) => (
          <ProductCard key={i} {...product} />
        ))}
      </div>
      <Pagination
        totalItems={totalProducts}
        currentPage={currentPage}
        itemsPerPage={perPage}
        renderPageLink={(page) => `/${page}`}
      />
    </div>
  );
};

export default PaginationPage;
