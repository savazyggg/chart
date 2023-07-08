import React from "react";
import { useDispatch } from "react-redux";
import { confirm } from "../store/userSlice";
import naverApi from "../api/naverApi";

const Confirm = ({ onApiStatusHandler }) => {
  const dispatch = useDispatch();

  const onPostInfo = async () => {
    const apiStatus = await onApiStatusHandler();

    dispatch(
      confirm({
        startDate: apiStatus.startDate,
        endDate: apiStatus.endDate,
        timeUnit: apiStatus.timeUnit,
        title: apiStatus.results[0].title,
        keyword: apiStatus.results[0].keyword,
        data: apiStatus.results[0].data,
      })
    );
  };
  return (
    <>
      <button onClick={onPostInfo}>확인</button>
    </>
  );
};

export default Confirm;
