const utils = {
  colorSet: (key: string) => {
    const color = [
      "#8884d8",
      "#82ca9d",
      "#c1c1c1",
      "#ff6961",
      "#77dd77",
      "#ffd700",
      "#ba55d3",
    ];

    switch (key) {
      case "10":
        return color[0];
      case "20":
        return color[1];
      case "30":
        return color[2];
      case "40":
        return color[3];
      case "50":
        return color[4];
      case "60":
        return color[5];
      default:
        return color[0];
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
  selectGenderData: ["여성", "남성"],
  selectDeviceData: ["PC", "Mobile"],
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

export default utils;
