import React from "react";

const ListGroup = (props) => {
  const { items, textProperty, valueProperty } = props;
  return (
    <div className="list-group">
      {items.map((item) => (
        <a
          key={item[valueProperty]}
          href="#"
          className="list-group-item list-group-item-action"
        >
          {item[textProperty]}
        </a>
      ))}
    </div>
  );
};

export default ListGroup;
