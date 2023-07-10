import React, { useEffect, useState } from "react";
import Input from "../src/components/Input";
import Confirm from "./components/Confirm";
import Selection from "./components/Selection";
import Chart from "./components/Chart";
import { UserSelect } from "./assets/type";
import utils from "./assets/utils";

function App() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [timeUnit, setTimeUnit] = useState("");
  const [category, setCategory] = useState("");
  const [keyword, setKeyword] = useState("");
  const [device, setDevice] = useState("");
  const [gender, setGender] = useState("");
  const [ages, setAges] = useState<string[]>([]);
  const [chartStatus, setChartStatus] = useState(false);
  const [isDisable, setIsDisable] = useState(true);

  const userSelect: UserSelect = {
    startDate,
    endDate,
    timeUnit,
    category,
    keyword,
    device,
    gender,
    ages,
  };

  const onApiStatusHandler = () => {
    setChartStatus(true);
  };

  const onStartDateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(e.target.value);
  };
  const onEndDateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(e.target.value);
  };

  const onKeywordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const onCategoryHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
  };

  const onTimeUnitHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTimeUnit(e.target.value);
  };
  const onDeviceHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let selectedDevice = e.target.value;
    selectedDevice =
      selectedDevice === utils.selectDeviceData[1]
        ? "pc"
        : selectedDevice === utils.selectDeviceData[2]
        ? "mo"
        : "";
    setDevice(selectedDevice);
  };

  const onAgeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let selectedAge = e.target.value;
    if (selectedAge === utils.selcetAgeData[0]) {
      setAges(["10", "20", "30", "40", "50", "60"]);
    } else {
      selectedAge = selectedAge.slice(0, 2);
      if (ages.indexOf(selectedAge) === -1) {
        setAges((current) => [...current, selectedAge]);
      }
    }
  };

  const onButtonHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const newAge = ages.filter((_age) => e.currentTarget.value !== _age);
    setAges(newAge);
  };

  const onGenderHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let selectedGender = e.target.value;
    selectedGender =
      selectedGender === utils.selectGenderData[0]
        ? "f"
        : selectedGender === utils.selectGenderData[1]
        ? "m"
        : "";

    setGender(selectedGender);
  };

  useEffect(() => {
    if (startDate !== "" && +startDate.split("-").join("") < 20170801) {
      alert("조회 기간 시작 날짜는 2017년 8월 1일부터 조회할 수 있습니다.");
    }
  }, [startDate]);
  useEffect(() => {
    const isAllSelected =
      +startDate.split("-").join("") >= 20170801 &&
      startDate &&
      endDate &&
      timeUnit &&
      category &&
      keyword &&
      ages.length > 0;
    setIsDisable(!isAllSelected);
  }, [startDate, endDate, timeUnit, category, keyword, ages.length]);

  return (
    <div className="App">
      <div>
        <Input type="date" value={startDate} onChange={onStartDateHandler}>
          {utils.labels[0]}
        </Input>
        <Input type="date" value={endDate} onChange={onEndDateHandler}>
          {utils.labels[1]}
        </Input>
        <Input type="text" value={category} onChange={onCategoryHandler}>
          {utils.labels[2]}
        </Input>
        <Input type="text" value={keyword} onChange={onKeywordHandler}>
          {utils.labels[3]}
        </Input>
      </div>
      <div>
        <Selection
          value={timeUnit}
          onChange={onTimeUnitHandler}
          datas={utils.selectDateData}
        >
          {utils.labels[4]}
        </Selection>
        <Selection
          value={device}
          onChange={onAgeHandler}
          datas={utils.selcetAgeData}
        >
          {utils.labels[5]}
        </Selection>
        <Selection
          value={gender}
          onChange={onGenderHandler}
          datas={utils.selectGenderData}
        >
          {utils.labels[6]}
        </Selection>
        <Selection
          value={ages}
          onChange={onDeviceHandler}
          datas={utils.selectDeviceData}
        >
          {utils.labels[7]}
        </Selection>
      </div>
      {ages.map((age, index) => (
        <button key={index} value={age} onClick={onButtonHandler}>
          {age} | x
        </button>
      ))}
      <Confirm
        onApiStatusHandler={onApiStatusHandler}
        isDisable={isDisable}
        userSelect={userSelect}
      />
      {chartStatus && <Chart />}
    </div>
  );
}

export default App;
