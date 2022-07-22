import React from "react";

const Input = ({ fieldName, label, value, onChange, placeholder }) => {
  return (
    <>
      <div className="form-group">
        <label htmlFor={fieldName} className="mt-4">
          {label}
        </label>
        <input
          id={fieldName}
          name={fieldName}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          type="text"
          className="mt-2 form-control"
        />
      </div>
    </>
  );
};

export default Input;
