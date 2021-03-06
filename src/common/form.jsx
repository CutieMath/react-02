import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
import SingleSelect from "./singleSelect";

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  validate = () => {
    const { error } = Joi.validate(this.state.data, this.schema);
    if (!error) return null;
    const errors = {};
    for (let item of error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    // Change the state of the error
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) {
      errors[input.name] = errorMessage;
    } else {
      delete errors[input.name];
    }
    this.setState({ errors });
    // Change the state of the data
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });
  };

  renderButton(label) {
    return (
      <button disabled={this.validate()} className="mt-4 btn btn-primary">
        {label}
      </button>
    );
  }

  renderInput(name, label, type = "text") {
    const { data, errors } = this.state;
    return (
      <Input
        type={type}
        fieldName={name}
        value={data[name]}
        label={label}
        placeholder={label}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }

  renderSingleSelect(name, label, options) {
    const { data, errors } = this.state;
    return (
      <SingleSelect
        fieldName={name}
        value={data[name]}
        label={label}
        options={options}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }
}

export default Form;
