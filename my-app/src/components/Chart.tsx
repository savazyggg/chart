import { useSelector } from "react-redux";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import utils from "../assets/utils";
import { UserData, MergedData } from "../assets/type";

const Chart = () => {
  const usersData = useSelector((state: any) => state.user.value);
  console.log("chart", usersData);

  const mergedData: MergedData[] = usersData.data.reduce(
    (mergedObj: MergedData[], exMergeData: UserData) => {
      const index = mergedObj.findIndex((x) => x.기간 === exMergeData.period);
      if (index === -1) {
        const mergeDataObj: MergedData = { 기간: exMergeData.period };
        mergeDataObj[exMergeData.group] = exMergeData.ratio;
        mergedObj.push(mergeDataObj);
      } else {
        mergedObj[index][exMergeData.group] = exMergeData.ratio;
      }
      return mergedObj;
    },
    []
  );

  console.log("mergedata", mergedData);

  return (
    <LineChart width={600} height={300} data={mergedData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="기간" />
      <YAxis />
      <Tooltip />
      <Legend />

      {Object.keys(mergedData[0])
        .filter((key) => key !== "기간")
        .map((key) => (
          <Line
            key={key}
            type="monotone"
            dataKey={key}
            stroke={utils.colorSet(key)}
            activeDot={{ r: 8 }}
          />
        ))}
    </LineChart>
  );
};

export default Chart;
