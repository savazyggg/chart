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
      <input
        style={{
          padding: "3px",
          margin: "10px",
          borderRadius: "3px",
          border: "1px solid lightgrey",
        }}
        type={type}
        onChange={onChange}
        value={value}
        id={value}
      />
    </>
  );
};

export default Input;
