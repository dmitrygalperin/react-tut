import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextFieldGroup = ({ field, value, label, error, type, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={field} className="control-label">{label}</label>
        <input
          value={value}
          onChange={onChange}
          type={type}
          name={field}
          className={classnames("form-control", { 'is-invalid': error })}
        />
          {error && <span className="help-block text-danger">{error}</span>}
    </div>
  )
}

TextFieldGroup.propTypes = {
  field: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

TextFieldGroup.defaultProps = {
  type:'text'
}

export default TextFieldGroup;
