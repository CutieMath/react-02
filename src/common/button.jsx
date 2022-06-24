import React from "react";

const Button = ({ type }) => {
  switch (type) {
    case "delete":
      return (
        <button button type="button" className="btn btn-danger">
          Delete
        </button>
      );
    default:
      return (
        <button type="button" className="btn btn-primary">
          Primary
        </button>
      );
  }
};

export default Button;
