import React from 'react';
import PropTypes from 'prop-types';

const CustomInput = (props) => {
  return (
    <div className="form-control">
      <label htmlFor={props.id}>
        <span className="sr-only">{props.label}</span>
      </label>
      <input
        type={props.type}
        placeholder={props.label}
        value={props.value}
        onChange={(e) => props.updValue(e.target.value)}
      />
    </div>
  );
};

CustomInput.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  updValue: PropTypes.func,
};

export default CustomInput;

