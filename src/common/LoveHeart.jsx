import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const LoveHeart = ({ loved, onClick }) => {
  if (loved) {
    return (
      <div onClick={onClick} className="h5" style={{ cursor: "pointer" }}>
        <AiFillHeart />
      </div>
    );
  } else {
    return (
      <div onClick={onClick} className="h5" style={{ cursor: "pointer" }}>
        <AiOutlineHeart />
      </div>
    );
  }
};

export default LoveHeart;
