import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const Like = (props) => {
  if (!props.liked) return <FaRegHeart style={{ cursor: "pointer" }} />;
  else return <FaHeart style={{ cursor: "pointer" }} />;
};

export default Like;
