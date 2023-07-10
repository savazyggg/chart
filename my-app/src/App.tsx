import React, { useCallback, useEffect, useState } from "react";
import Input from "./components/ui/Input";
import Confirm from "./components/Confirm";
import Selection from "./components/ui/Selection";
import Chart from "./components/Chart";
import { UserSelect } from "./assets/types";
import options from "./assets/options";
import "./App.css";
function App() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [timeUnit, setTimeUnit] = useState("");
  const [category, setCategory] = useState("");
  const [keyword, setKeyword] = useState("");
  const [device, setDevice] = useState("");
  const [gender, setGender] = useState("");
  const [ages, setAges] = useState<string[]>([]);
  const [age, setAge] = useState("");
  const [chartStatus, setChartStatus] = useState(false);
  const [isDisable, setIsDisable] = useState(true);

  const userSelect: UserSelect = {
    startDate,
    endDate,
    timeUnit,
    category,
    keyword,
    device:
      device === options.selectDeviceData[1]
        ? "pc"
        : device === options.selectDeviceData[2]
        ? "mo"
        : "",
    gender:
      gender === options.selectGenderData[0]
        ? "f"
        : gender === options.selectGenderData[1]
        ? "m"
        : "",
    ages,
  };

  const onChartStatusHandler = useCallback(() => {
    setChartStatus(true);
  }, [setChartStatus]);

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
    setDevice(e.target.value);
  };

  const onAgeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAge(e.target.value);
    let selectedAge = e.target.value;
    if (selectedAge === options.selcetAgeData[0]) {
      setAges(["10", "20", "30", "40", "50", "60"]);
    } else {
      selectedAge = selectedAge.slice(0, 2);
      if (ages.indexOf(selectedAge) === -1) {
        setAges((current) => [...current, selectedAge]);
      }
    }
  };

  const onGenderHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGender(e.target.value);
  };

  const onButtonHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const newAge = ages.filter((_age) => e.currentTarget.value !== _age);
    setAges(newAge);
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

  useEffect(() => {
    const localStorageData = localStorage.getItem("persist:root");
    const persistData = localStorageData && JSON.parse(localStorageData);
    const persistUserData = JSON.parse(persistData.user);
    if (persistUserData.value.data[0]) {
      setChartStatus(true);
    }
  }, []);

  return (
    <div className="App">
      <div>
        <Input type="date" value={startDate} onChange={onStartDateHandler}>
          {options.labels[0]}
        </Input>
        <Input type="date" value={endDate} onChange={onEndDateHandler}>
          {options.labels[1]}
        </Input>
        <Input type="text" value={category} onChange={onCategoryHandler}>
          {options.labels[2]}
        </Input>
        <Input type="text" value={keyword} onChange={onKeywordHandler}>
          {options.labels[3]}
        </Input>
      </div>
      <div>
        <Selection
          value={timeUnit}
          onChange={onTimeUnitHandler}
          datas={options.selectDateData}
        >
          {options.labels[4]}
        </Selection>
        <Selection
          value={age}
          onChange={onAgeHandler}
          datas={options.selcetAgeData}
        >
          {options.labels[5]}
        </Selection>
        <Selection
          value={gender}
          onChange={onGenderHandler}
          datas={options.selectGenderData}
        >
          {options.labels[6]}
        </Selection>
        <Selection
          value={device}
          onChange={onDeviceHandler}
          datas={options.selectDeviceData}
        >
          {options.labels[7]}
        </Selection>
      </div>

      <div>
        {ages.map((age, index) => (
          <button
            style={{
              border: "1px solid lightgrey",
              backgroundColor: "white",
              margin: "3px",
              borderRadius: "5px",
              color: "grey",
            }}
            key={index}
            value={age}
            onClick={onButtonHandler}
          >
            {age} | x
          </button>
        ))}
      </div>
      <Confirm
        onChartStatusHandler={onChartStatusHandler}
        isDisable={isDisable}
        userSelect={userSelect}
      />

      {chartStatus && <Chart />}
    </div>
  );
}

export default App;
