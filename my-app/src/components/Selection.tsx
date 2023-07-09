import React from "react";

interface Props {
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string | string[];
  children: string;
  datas: string[];
}

const Selection: React.FC<Props> = ({ value, onChange, children, datas }) => {
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
