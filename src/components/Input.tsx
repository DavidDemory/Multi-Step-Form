import React from 'react';
import '../styles/Input.scss';

interface InputProps {
  label: string;
  name: string;
  children: React.ReactNode;
  error: any;
}

const Input = ({label, name, children, error}: InputProps) => {
  return (
    <div className={'input-container'}>
      <div className={'input-info-container'}>
        <label htmlFor={name}>
          {label}
        </label>
        {error && <small>{error.message}</small>}
      </div>
      {children}
    </div>
  );
};

export default Input;
