import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { confirm } from "../store/userSlice";

const InputBox = ({ type, children, name }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(
        confirm((current) => ({
          ...current,
          [name]: value,
        }))
      );
    }, 500);

    return () => clearTimeout(timer);
  }, [value, name, dispatch]);

  return (
    <>
      <label htmlFor={name}>{children}</label>
      <input
        type={type}
        onChange={onValueChange}
        value={value}
        id={name}
        name={name}
      />
    </>
  );
};

export default InputBox;
