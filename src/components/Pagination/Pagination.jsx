import Link from "next/link";
import React from "react";
import usePagination from "../../hooks/usePagination";
import style from "./Pagination.module.css";
import { useRouter } from "next/router";
import Button from "@/ui/Button";

export const dotts = "...";

const Pagination = ({
  totalItems,
  currentPage,
  itemsPerPage = 10,
  renderPageLink,
}) => {
  const pages = usePagination(totalItems, currentPage, itemsPerPage);
  const router = useRouter();
  const nextpage = () => {
    router.push(renderPageLink(currentPage + 1));
  };

  const prevpage = () => {
    router.push(renderPageLink(currentPage - 1));
  };

  return (
    <div className={style.pagination}>
      <Button
        stylebutton={1 === currentPage ? "disabled" : "success"}
        onClick={() => prevpage}
      >
        -
      </Button>
      <div className={style.nav}>
        {pages.map((pageNumber, i) =>
          pageNumber === dotts ? (
            <span key={i} className="">
              {pageNumber}
            </span>
          ) : (
            <>
              <Button
                key={i}
                stylebutton={
                  pageNumber === currentPage ? "disabled" : "default"
                }
                link
                href={renderPageLink(pageNumber)}
              >
                {pageNumber}
              </Button>
            </>
          )
        )}
      </div>
      <Button
        stylebutton={
          pages[pages.length - 1] !== currentPage ? "success" : "disabled"
        }
        onClick={() =>
          pages[pages.length - 1] !== currentPage ? nextpage : null
        }
      >
        +
      </Button>
    </div>
  );
};

export default Pagination;
