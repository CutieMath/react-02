import React from "react";

const SingleSelect = ({ fieldName, errors, label, options }) => {
  return (
    <>
      <label htmlFor={fieldName} className="mt-4">
        {label}
      </label>
      <select class="form-select" aria-label="Default select example">
        <option selected>{label}</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.value}
          </option>
        ))}
      </select>
      {errors && <div className="alert alert-danger">{errors}</div>}
    </>
  );
};

export default SingleSelect;
