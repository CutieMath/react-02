import React from "react";

const Input = ({
  type,
  error,
  fieldName,
  label,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <>
      <div className="form-group">
        <label htmlFor={fieldName} className="mt-4">
          {label}
        </label>
        <input
          type={type}
          id={fieldName}
          name={fieldName}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="mt-2 form-control"
        />
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
    </>
  );
};

export default Input;
