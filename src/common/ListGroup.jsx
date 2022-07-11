import React from "react";

const ListGroup = ({ items, onItemSelect }) => {
  return (
    <div className="list-group">
      {items.map((genre) => (
        <a
          key={genre._id}
          href="#"
          className="list-group-item list-group-item-action"
        >
          {genre.name}
        </a>
      ))}
    </div>
  );
};

export default ListGroup;
