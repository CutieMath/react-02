import React from "react";

const ListGroup = ({ items, textProperty, onItemSelect, selectedItem }) => {
  return (
    <div className="list-group">
      {items.map((item, index) => (
        <a
          key={index}
          href="#"
          className={
            item === selectedItem
              ? "list-group-item list-group-item-action active"
              : "list-group-item list-group-item-action"
          }
          onClick={() => onItemSelect(item)}
        >
          {item[textProperty]}
        </a>
      ))}
    </div>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
