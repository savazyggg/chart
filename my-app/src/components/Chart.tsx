import { shallowEqual, useSelector } from "react-redux";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import options from "../assets/options";
import { UserData, MergedData } from "../assets/types";
import { useEffect, useState } from "react";
import Err from "./Err";
import React from "react";
import { styled } from "styled-components";

const Chart = () => {
  const [mergedData, setMergedData] = useState<MergedData[]>([]);
  const [statusFail, setStatusFail] = useState(false);
  const usersData = useSelector((state: any) => state.user.value, shallowEqual);

  console.log("chart", usersData);

  useEffect(() => {
    const data = usersData.data.reduce(
      (mergedObj: MergedData[], exMergeData: UserData) => {
        const index = mergedObj.findIndex(
          (x) => x.period === exMergeData.period
        );
        if (index === -1) {
          const mergeDataObj: MergedData = { period: exMergeData.period };
          mergeDataObj[exMergeData.group + "대"] = exMergeData.ratio;
          mergedObj.push(mergeDataObj);
        } else {
          mergedObj[index][exMergeData.group + "대"] = exMergeData.ratio;
        }

        return mergedObj;
      },
      []
    );
    setMergedData(data);
  }, [usersData.data]);

  useEffect(() => {
    setTimeout(() => !mergedData[0] && setStatusFail(true), 1500);
  }, [mergedData]);

  return (
    <Container>
      {mergedData[0] ? (
        <LineChart width={1280} height={600} data={mergedData}>
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
                stroke={options.colorSet(key)}
                activeDot={{ r: 8 }}
              />
            ))}
        </LineChart>
      ) : statusFail ? (
        <Err />
      ) : (
        <h3>Loading...</h3>
      )}
    </Container>
  );
};
export default React.memo(Chart);

const Container = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
`;
