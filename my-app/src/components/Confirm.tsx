import React from "react";
import { useDispatch } from "react-redux";
import { confirm } from "../store/userSlice";
import naverApi from "../api/naverApi";

const Confirm = ({ onSaveInfo }) => {
  const dispatch = useDispatch();
  const userInfo = onSaveInfo();
  const onPostInfo = () => {
    naverApi(userInfo);
    dispatch(
      confirm({
        startDate: userInfo.startDate,
        endDate: userInfo.endDate,
        timeUnit: userInfo.timeUnit,
        category: userInfo.category,
        keyword: userInfo.keyword,
        device: userInfo.device,
        gender: userInfo.gender,
        ages: userInfo.ages,
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
