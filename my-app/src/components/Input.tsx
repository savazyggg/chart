import React from "react";

const Input = ({ type, onChange, value, children }) => {
  return (
    <>
      <label htmlFor={value}>{children}</label>
      <input type={type} onChange={onChange} value={value} id={value} />
    </>
  );
};

export default Input;
