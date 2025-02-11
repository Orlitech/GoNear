import React, { useState } from 'react';

const SignUpStructure = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="mb-3">
      <label htmlFor={props.id} className="form-label">
        {props.label}
      </label>
      <div className="input-group">
        <input
          id={props.id}
          type={props.type === 'password' ? (showPassword ? 'text' : 'password') : props.type}
          name={props.name}
          placeholder={props.placeholder}
          className="form-control"
          required
          autoComplete={props.type === 'email' ? 'username' : 'current-password'} // Enable autofill for email/password
        />
        {props.type === 'password' && (
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        )}
      </div>
    </div>
  );
};

export default SignUpStructure;