import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    navigate("/", { replace: true });
  };
  return (
    <div>
      <h4>Individual movie details: {id}</h4>
      <button className="btn btn-primary mt-3" onClick={handleSave}>
        save
      </button>
    </div>
  );
};

export default MovieDetails;
