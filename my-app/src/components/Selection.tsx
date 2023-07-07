import React from "react";

const Selection = ({ value, onChange, children, datas }) => {
  return (
    <select id={children} value={value} onChange={onChange}>
      <option value="">{children}</option>
      {datas.map((data) => (
        <option value={data}>{data}</option>
      ))}
    </select>
  );
};

export default Selection;
