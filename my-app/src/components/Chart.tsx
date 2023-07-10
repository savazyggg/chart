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
import { useEffect, useState } from "react";
import Err from "./Err";

const Chart = () => {
  const [mergedData, setMergedData] = useState<MergedData[]>([]);
  const [statusFail, setStatusFail] = useState(false);
  const usersData = useSelector((state: any) => state.user.value);
  console.log("chart", usersData);

  useEffect(() => {
    const data = usersData.data.reduce(
      (mergedObj: MergedData[], exMergeData: UserData) => {
        const index = mergedObj.findIndex(
          (x) => x.period === exMergeData.period
        );
        if (index === -1) {
          const mergeDataObj: MergedData = { period: exMergeData.period };
          mergeDataObj[exMergeData.group] = exMergeData.ratio;
          mergedObj.push(mergeDataObj);
        } else {
          mergedObj[index][exMergeData.group] = exMergeData.ratio;
        }

        return mergedObj;
      },
      []
    );
    setMergedData(data);
  }, [usersData.data]);

  setTimeout(() => !mergedData[0] && setStatusFail(true), 1000);

  return mergedData[0] ? (
    <LineChart width={600} height={300} data={mergedData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="period" />
      <YAxis />
      <Tooltip />
      <Legend />

      {Object.keys(mergedData[0])
        .filter((key) => key !== "period")
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
  ) : statusFail ? (
    <Err />
  ) : (
    <div>Loding ...</div>
  );
};
export default Chart;
