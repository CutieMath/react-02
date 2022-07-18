import React, { Component } from "react";
import { FaSortUp, FaSortDown } from "react-icons/fa";

// colums: array
// sortColum: obj
// onSort: function

// Encapsulate the sorting logic
class TableHeader extends Component {
  // !IMPORTANT!
  // Change the sortColumn state in this component so it's reusable
  raiseSort = (path) => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path) {
      // if same path (the path was clicked twice)
      // Then toggle desc and asc
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      // if different path
      // Sort the path in asc order
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };

  renderSortIcon = (column) => {
    const { sortColumn } = this.props;
    if (column.path !== this.props.sortColumn.path) {
      return null;
    }
    if (sortColumn.order === "asc") {
      return <FaSortUp />;
    }
    return <FaSortDown />;
  };
  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((column, index) => (
            <th
              key={index}
              style={{ cursor: "pointer" }}
              onClick={() => this.raiseSort(column.path)}
            >
              {column.label} {this.renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
