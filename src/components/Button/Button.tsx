import React from 'react';
import { ButtonType } from '../../types';

interface ButtonProps {
  children: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  icon?: string;
  buttonType?: ButtonType;
}

export const Button: React.FC<ButtonProps> = React.memo(
  ({
    children,
    onClick,
    className = '',
    type = 'button',
    icon,
    buttonType = ButtonType.COMMON,
  }: ButtonProps): JSX.Element => {
    return (
      <button
        onClick={onClick}
        className={`btn ${buttonType} ${className}`}
        type={type}
      >
        {icon ? (
          <img className="btn__icon" src={icon} alt="Sign in provider icon" />
        ) : null}
        {children}
      </button>
    );
  }
);
