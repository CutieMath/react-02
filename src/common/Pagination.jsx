import React from "react";
import _ from "lodash";

const Pagination = ({ itemsCount, pageSize, onPageClick }) => {
  const pagesCount = itemsCount / pageSize;
  const pagesArray = _.range(1, pagesCount + 1);
  return (
    <>
      <nav aria-label="Page navigation">
        <ul className="pagination">
          {pagesArray.map((pageNumber) => (
            <li key={pageNumber} className="page-item">
              <a className="page-link">{pageNumber}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
