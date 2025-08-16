import React, { useState } from "react";
import "./InputField.css";

export interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  loading?: boolean;
  variant?: "filled" | "outlined" | "ghost";
  size?: "sm" | "md" | "lg";
  type?: "text" | "password";
  clearable?: boolean;
  passwordToggle?: boolean;
}

export const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled,
  invalid,
  loading,
  variant = "outlined",
  size = "md",
  type = "text",
  clearable = false,
  passwordToggle = false,
}) => {
  const [internalType, setInternalType] = useState(type);

  const handleClear = () => {
    if (onChange) {
      const event = { target: { value: "" } } as React.ChangeEvent<HTMLInputElement>;
      onChange(event);
    }
  };

  const togglePassword = () => {
    setInternalType(internalType === "password" ? "text" : "password");
  };

  return (
    <div className={`input-field input-${variant} input-${size} ${disabled ? "disabled" : ""} ${invalid ? "invalid" : ""}`}>
      {label && <label className="input-label">{label}</label>}
      <div className="input-wrapper">
        <input
          type={internalType}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className="input-element"
        />
        {clearable && value && !disabled && (
          <button type="button" className="input-btn clear-btn" onClick={handleClear}>
            ✕
          </button>
        )}
        {passwordToggle && type === "password" && (
          <button type="button" className="input-btn toggle-btn" onClick={togglePassword}>
            {internalType === "password" ? "👁️" : "🙈"}
          </button>
        )}
        {loading && <span className="loader">⏳</span>}
      </div>
      {invalid && errorMessage ? (
        <p className="error-text">{errorMessage}</p>
      ) : (
        helperText && <p className="helper-text">{helperText}</p>
      )}
    </div>
  );
};
