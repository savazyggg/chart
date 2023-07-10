const options = {
  color: [
    "#8884d8",
    "#82ca9d",
    "#c1c1c1",
    "#ff6961",
    "#77dd77",
    "#ffd700",
    "#ba55d3",
  ],
  colorSet: (key: string) => {
    switch (key) {
      case "10대":
        return options.color[0];
      case "20대":
        return options.color[1];
      case "30대":
        return options.color[2];
      case "40대":
        return options.color[3];
      case "50대":
        return options.color[4];
      case "60대 이상":
        return options.color[5];
      default:
        return options.color[0];
    }
  },
  selectDateData: ["month", "week", "date"],
  selcetAgeData: [
    "모든 연령",
    "10대",
    "20대",
    "30대",
    "40대",
    "50대",
    "60세 이상",
  ],
  selectGenderData: ["모든 성별", "여성", "남성"],
  selectDeviceData: ["모든 장치", "PC", "Mobile"],
  labels: [
    "시작일자:",
    "종료일자:",
    "카테고리:",
    "키워드:",
    "timeUnit",
    "age",
    "gender",
    "device",
  ],
};

export default options;
