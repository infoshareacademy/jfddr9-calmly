import { doc, getDoc } from "firebase/firestore";
import { useSelector } from "react-redux";
import { db } from "../api/firebase";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { useEffect, useState } from "react";
import { LoaderComponent } from "../components/Loader";

import styled from "styled-components";

const ChartContainer = styled.div`
  width: 800px;
  height: 300px;
  margin: auto;
`;

export const Journal = () => {
  const { authUser }: any = useSelector((state) => state);

  const [data, setData] = useState([]);

  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${year}-${month}-${day} ${hours}:${minutes}`;
  };

  useEffect(() => {
    const docRef = doc(db, `journal/${authUser.uid}`);
    getDoc(docRef)
      .then((userData) => {
        const serverEntries = userData.data()?.entries;
        const entries = serverEntries.map((entry: any) => {
          return {
            date: formatDate(new Date(entry.date.seconds * 1000)),
            mood: entry.mood,
            score: entry.score,
          };
        });
        console.log(entries);
        setData(entries);
      })
      .catch((e) => console.error(e));
  }, []);

  const firstTickOffset = 100; // Adjust this value based on your needs

  const renderCustomTick = (tickProps: any) => {
    const { x, y, payload } = tickProps;
    const isFirstTick = payload.index === 0;

    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={isFirstTick ? firstTickOffset : 50}
          dy={16}
          textAnchor="end"
          fill="#666"
          fontSize={12}
          // transform={isFirstTick ? 'rotate(-45)' : ''}
        >
          {payload.value}
        </text>
      </g>
    );
  };

  return data.length !== 0 ? (
    <ChartContainer>
      <LineChart width={800} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" tick={renderCustomTick} />
        <YAxis />
        <Tooltip />
        <Tooltip labelFormatter={(label) => `Date: ${label}`} />
        <Tooltip
          formatter={(value, name) => [
            value,
            name === "score" ? "Score" : "Mood",
          ]}
        />
        <Legend />
        <Line type="monotone" dataKey="score" stroke="#8884d8" />
        <Line type="monotone" dataKey="mood" stroke="#82ca9d" />
      </LineChart>
    </ChartContainer>
  ) : (
    <LoaderComponent />
  );
};

// const data = [
//   { name: 'January', uv: 4000, pv: 2400, amt: 2400 },
//   { name: 'February', uv: 3000, pv: 1398, amt: 2210 },
//   { name: 'March', uv: 2000, pv: 9800, amt: 2290 },
//   { name: 'April', uv: 2780, pv: 3908, amt: 2000 },
//   { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
//   { name: 'June', uv: 2390, pv: 3800, amt: 2500 },
//   { name: 'July', uv: 3490, pv: 4300, amt: 2100 },
// ];

// export const Journal = () => (
//   <LineChart width={500} height={300} data={data}>
//     <CartesianGrid strokeDasharray="3 3" />
//     <XAxis dataKey="name" />
//     <YAxis />
//     <Tooltip />
//     <Legend />
//     <Line type="monotone" dataKey="uv" stroke="#8884d8" />
//   </LineChart>
// );
