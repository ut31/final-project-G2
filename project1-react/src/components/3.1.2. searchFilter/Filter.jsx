import React from "react";
import PropTypes from "prop-types";
import "./filter.css";

const Filter = (props) => {
  return (
      <div className="select-label-container">
        <label className="label" htmlFor={props.htmlFor}>
          {props.labelText}
        </label>
        <select name="selector" className="selector">
          <option value="">Default</option>
          <option value={props.op1}>{props.op1}</option>
          <option value={props.op2}>{props.op2}</option>
        </select>
    </div>
  );
};

Filter.propTypes = {
  labelText: PropTypes.string.isRequired,
  op1: PropTypes.string.isRequired,
  op2: PropTypes.string.isRequired,

};

export default Filter;