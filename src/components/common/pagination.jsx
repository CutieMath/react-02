import React from "react";
import _ from "lodash";

const Pagination = (props) => {
  const { itemsCount, pageSize } = props;
  // use the props to calculate the number of pages
  const pagesCount = itemsCount / pageSize;
  const pagesArray = _.range(1, pagesCount + 1);

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pagesArray.map((pageItem) => (
          <li key={pageItem} className="page-item">
            <a className="page-link" href="#">
              {pageItem}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
