import React from "react";

const SingleSelect = ({
  fieldName,
  error,
  label,
  options,
  value,
  onChange,
}) => {
  return (
    <div className="form-group">
      <label htmlFor={fieldName} className="mt-4">
        {label}
      </label>
      <select
        name={fieldName}
        id={fieldName}
        value={value}
        onChange={onChange}
        className="form-select"
        aria-label="Default select"
      >
        <option value="" />
        {options.map((option, index) => (
          <option key={index} value={option._id}>
            {option.name}
          </option>
        ))}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default SingleSelect;
