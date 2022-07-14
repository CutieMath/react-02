import React, { Component } from "react";

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
  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((column) => (
            <th onClick={() => this.raiseSort(column.path)}>{column.label}</th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
