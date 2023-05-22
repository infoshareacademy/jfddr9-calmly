import { doc, getDoc } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
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
import { updateBg } from "../store/slice";

const ChartContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: auto;
  margin-bottom: 20px;
`;

export const Journal = () => {
  const { authUser }: any = useSelector((state) => state);

  const [data, setData] = useState([]);
  const [displayedData, setDisplayedData] = useState([]);
  const [entryCounter, setEntryCounter] = useState(7);

  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${year}-${month}-${day} ${hours}:${minutes}`;
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateBg("bgDefault"));
  }, [dispatch]);

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
        if (entries.length < 7) {
          setDisplayedData(entries);
        } else {
          setDisplayedData(entries.splice(0, 7));
        }
      })
      .catch((e) => console.error(e));
  }, []);

  const renderCustomTick = (tickProps: any) => {
    const { x, y, payload } = tickProps;
    const isFirstTick = payload.index === 0;
    const isLastTick = payload.index === displayedData.length - 1;

    console.log(displayedData.length);
    console.log("first" + isFirstTick);
    console.log("last" + isLastTick);

    const tickText = payload.value.toString();

    // Define the maximum number of characters per line
    const maxCharactersPerLine = 10;

    // Calculate the number of lines needed for the tick label
    const numLines = Math.ceil(tickText.length / maxCharactersPerLine);

    // Calculate the vertical offset for multi-line labels
    const verticalOffset = 16; // Adjust this value based on your needs

    // Split the tick label into multiple lines
    const lines = [];
    for (let i = 0; i < numLines; i++) {
      const startIndex = i * maxCharactersPerLine;
      const endIndex = (i + 1) * maxCharactersPerLine;
      const line = tickText.slice(startIndex, endIndex);
      lines.push(line);
    }

    return (
      <g transform={`translate(${x},${y})`}>
        {lines.map((line, index) => (
          <text
            key={index}
            x={0}
            y={10}
            dy={index === 0 ? verticalOffset : 0}
            textAnchor={isFirstTick ? "right" : isLastTick ? "end" : "middle"}
            fill="#666"
            fontSize={12}
          >
            {line}
          </text>
        ))}
      </g>
    );
  };

  useEffect(() => {
    if (entryCounter + 7 <= data.length) {
      setDisplayedData(data.slice(entryCounter, entryCounter + 7));
    } else {
      setDisplayedData(data.slice(entryCounter));
    }
  }, [entryCounter]);

  const nextData = () => {
    const nextEntryCounter = entryCounter + 7;

    setEntryCounter(nextEntryCounter);
  };

  console.log(displayedData);

  return data.length !== 0 ? (
    <>
      <ChartContainer>
        <LineChart
          key={"CHART_KEY"}
          width={800}
          height={300}
          data={displayedData}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" tick={renderCustomTick} interval={0} />
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
      <button onClick={nextData}>Next</button>
    </>
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
