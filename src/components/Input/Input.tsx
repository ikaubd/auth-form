import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  className?: string;
}

export const Input: React.FC<InputProps> = React.memo(
  ({ label, error, className, ...rest }: InputProps): JSX.Element => {
    return (
      <label className={`input ${className}`}>
        {error && <span className="input__error">{error}</span>}
        <input className="input__control" {...rest} />
        {label && <span className="input__label">{label}</span>}
      </label>
    );
  }
);
