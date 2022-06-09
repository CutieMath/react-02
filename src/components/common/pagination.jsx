import React from "react";
import _ from "lodash";

const Pagination = (props) => {
  const { itemsCount, pageSize } = props;
  // use the props to calculate the number of pages
  const pagesCount = itemsCount / pageSize;
  //  not to use pagination when there's only one page
  if (pagesCount === 1) {
    return null;
  }
  const pagesArray = _.range(1, pagesCount + 1);
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pagesArray.map((pageNumber) => (
          <li key={pageNumber} className="page-item">
            <a className="page-link" href="#">
              {pageNumber}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
