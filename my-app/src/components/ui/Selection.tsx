import React from "react";

interface Props {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
  children: string;
  datas: string[];
}

const Selection: React.FC<Props> = ({ value, onChange, children, datas }) => {
  return (
    <select
      style={{
        padding: "3px",
        margin: "10px",
        borderRadius: "3px",
        border: "1px solid lightgrey",
      }}
      id={children}
      value={value}
      onChange={onChange}
    >
      <option value="">{children}</option>
      {datas.map((data, index) => (
        <option key={index} value={data}>
          {data}
        </option>
      ))}
    </select>
  );
};

export default Selection;
