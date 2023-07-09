import React from "react";

interface Props {
  type: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  children: string;
}

const Input: React.FC<Props> = ({ type, onChange, value, children }) => {
  return (
    <>
      <label htmlFor={value}>{children}</label>
      <input type={type} onChange={onChange} value={value} id={value} />
    </>
  );
};

export default Input;
