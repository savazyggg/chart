import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const Confirm = ({ onApiStatusHandler, isDisable, userSelect }) => {
  console.log("confirm", userSelect);

  const dispatch = useDispatch();

  function handleClick() {
    onApiStatusHandler();
    dispatch({ type: "user/getUsersDataFetch", payload: userSelect });
  }

  return (
    <>
      <button
        style={isDisable ? { opacity: 0.5, cursor: "not-allowed" } : {}}
        onClick={handleClick}
      >
        확인
      </button>
    </>
  );
};

export default Confirm;
