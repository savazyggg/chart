import React from "react";

const Selection = ({ value, onChange, children, datas }) => {
  return (
    <select id={children} value={value} onChange={onChange}>
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
