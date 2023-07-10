import React from "react";
import { useDispatch } from "react-redux";
import { styled } from "styled-components";
import { UserSelect } from "../assets/types";
import options from "../assets/options";

interface Props {
  onChartStatusHandler: () => void;
  isDisable: boolean;
  userSelect: UserSelect;
}

const Confirm: React.FC<Props> = React.memo(
  ({ onChartStatusHandler, isDisable, userSelect }) => {
    const dispatch = useDispatch();

    function onFetchHandler() {
      onChartStatusHandler();
      dispatch({ type: "user/getUsersDataFetch", payload: userSelect });
    }

    return (
      <>
        <Button
          style={isDisable ? { opacity: 0.5, cursor: "not-allowed" } : {}}
          onClick={isDisable ? undefined : onFetchHandler}
        >
          조회
        </Button>
      </>
    );
  }
);

export default Confirm;

const Button = styled.button`
  background-color: ${options.color[0]};
  border: none;
  color: white;
  font-size: 15px;
  margin: 10px;
  border-radius: 5px;
  width: 50px;
  height: 30px;
  font-weight: 600;
`;
