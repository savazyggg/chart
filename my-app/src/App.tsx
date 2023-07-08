import { useEffect, useState } from "react";
import Input from "../src/components/Input";
import Confirm from "./components/Confirm";
import Selection from "./components/Selection";
import Chart from "./components/Chart";
import naverApi from "./api/naverApi";
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

  const onApiStatusHandler = async () => {
    const getApi = await naverApi(userSelect);
    setChartStatus(true);
    return getApi;
  };

  const onStartDateHandler = (e) => {
    setStartDate(e.target.value);
  };
  const onEndDateHandler = (e) => {
    setEndDate(e.target.value);
  };
  const onTimeUnitHandler = (e) => {
    setTimeUnit(e.target.value);
  };
  const onKeywordHandler = (e) => {
    setKeyword(e.target.value);
  };
  const onDeviceHandler = (e) => {
    let selectedDevice = e.target.value;
    selectedDevice =
      selectedDevice === "PC" ? "pc" : selectedDevice === "Mobile" ? "mo" : "";

    setDevice(selectedDevice);
  };

  //설정 안 함 -> "" 이아니라 모든 나이 숫자가 빼열로 있어야됨; 수정필요
  const onAgeHandler = (e) => {
    let selectedAge = e.target.value;
    if (selectedAge === "모든 연령") {
      selectedAge = "";
      setAges(ages.filter((age) => age === selectedAge));
    } else if (ages.indexOf("") >= 0 && ages.length >= 0 && selectedAge) {
      alert("모든 연령을 선택하셨습니다. 모든연령 선택을 제거해주세요.");
      return;
    } else {
      selectedAge = selectedAge.slice(0, 2);
    }

    if (ages.indexOf(selectedAge) === -1) {
      setAges((current) => [...current, selectedAge]);
    }
  };

  //삭제토글 구현
  //   const newAge = age.filter((_age) => selectedAge !== _age);
  //   setAge(newAge);

  const onGenderHandler = (e) => {
    let selectedGender = e.target.value;
    selectedGender =
      selectedGender === "여성" ? "f" : selectedGender === "남성" ? "m" : "";

    setGender(selectedGender);
  };

  const onCategoryHandler = (e) => {
    setCategory(e.target.value);
  };

  const userSelect = {
    startDate,
    endDate,
    timeUnit,
    category,
    keyword,
    device,
    gender,
    ages,
  };

  const selectDateData = ["month", "week", "date"];
  const selcetAgeData = [
    "모든 연령",
    "10대",
    "20대",
    "30대",
    "40대",
    "50대",
    "60세 이상",
  ];
  const selectGenderData = ["여성", "남성"];
  const selectDeviceData = ["모든 기기", "PC", "Mobile"];

  return (
    <div className="App">
      <div>
        <Input type="date" value={startDate} onChange={onStartDateHandler}>
          시작일자:
        </Input>
        <Input type="date" value={endDate} onChange={onEndDateHandler}>
          종료일자:
        </Input>
        <Input type="text" value={category} onChange={onCategoryHandler}>
          카테고리:
        </Input>
        <Input type="text" value={keyword} onChange={onKeywordHandler}>
          키워드:
        </Input>
      </div>
      <div>
        <Selection
          value={timeUnit}
          onChange={onTimeUnitHandler}
          datas={selectDateData}
        >
          timeUnit
        </Selection>
        <Selection value={device} onChange={onAgeHandler} datas={selcetAgeData}>
          age
        </Selection>
        <Selection
          value={gender}
          onChange={onGenderHandler}
          datas={selectGenderData}
        >
          gender
        </Selection>
        <Selection
          value={ages}
          onChange={onDeviceHandler}
          datas={selectDeviceData}
        >
          device
        </Selection>
      </div>
      <Confirm onApiStatusHandler={onApiStatusHandler} />
      {chartStatus && <Chart />}
    </div>
  );
}

export default App;
