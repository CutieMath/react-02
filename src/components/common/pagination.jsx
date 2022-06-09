import React from "react";
import _ from "lodash";

const Pagination = (props) => {
  const { itemsCount, pageSize, currentPageNumber, onPageChange } = props;
  // use the props to calculate the number of pages
  const pagesCount = Math.ceil(itemsCount / pageSize);
  //  not to use pagination when there's only one page
  if (pagesCount === 1) {
    return null;
  }
  const pagesArray = _.range(1, pagesCount + 1);
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pagesArray.map((pageNumber) => (
          <li
            key={pageNumber}
            className={
              pageNumber == currentPageNumber ? "page-item active" : "page-item"
            }
          >
            <a
              style={{ cursor: "pointer" }}
              className="page-link"
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
