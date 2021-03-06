import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const Pagination = ({ itemsCount, pageSize, onPageClick, currPage }) => {
  const pagesCount = itemsCount / pageSize;
  if (pagesCount <= 1) return null;
  const pagesArray = _.range(1, pagesCount + 1);

  return (
    <>
      <nav aria-label="Page navigation">
        <ul className="pagination">
          {pagesArray.map((pageNumber) => (
            <li
              key={pageNumber}
              className={
                pageNumber === currPage ? "page-item active" : "page-item"
              }
            >
              <a
                onClick={() => onPageClick(pageNumber)}
                style={{ cursor: "pointer" }}
                className="page-link"
              >
                {pageNumber}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currPage: PropTypes.number.isRequired,
  onPageClick: PropTypes.func.isRequired,
};

export default Pagination;
