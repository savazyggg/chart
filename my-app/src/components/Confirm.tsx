import React from "react";
import { useDispatch } from "react-redux";
import { UserSelect } from "../assets/type";
interface Props {
  onApiStatusHandler: () => void;
  isDisable: boolean;
  userSelect: UserSelect;
}

const Confirm: React.FC<Props> = ({
  onApiStatusHandler,
  isDisable,
  userSelect,
}) => {
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
