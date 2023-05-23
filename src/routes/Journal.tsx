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
  ResponsiveContainer,
  Dot,
} from "recharts";
import { useEffect, useState } from "react";
import { LoaderComponent } from "../components/Loader";

import styled from "styled-components";
import { updateBg } from "../store/slice";

const ChartContainer = styled.div``;

export const Journal = () => {
  const { authUser }: any = useSelector((state) => state);

  const [isDisplayDays, setIsDisplayDays] = useState(true);

  const [data, setData] = useState([]);
  const [daysData, setDaysData] = useState([]);
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
        const days: any = dataToDays(entries);
        setDaysData(days);
        if (days.length <= 7) {
          setDisplayedData(days);
          setEntryCounter(7);
        } else {
          setDisplayedData(days.slice(days.length - 7, days.length));
          setEntryCounter(days.length);
        }
      })

      .catch((e) => console.error(e));
  }, []);

  const goToDay = (line: string) => {
    console.log(line);
    if (isDisplayDays) {
      const dayStartIndex = data.findIndex(
        (item: any) => item.date.slice(0, 10) === line
      );
      console.log(dayStartIndex);
      if (dayStartIndex + 7 > data.length) {
        setDisplayedData(data.slice(dayStartIndex, data.length));
        setEntryCounter(data.length);
        setIsDisplayDays(false);
      } else {
        setDisplayedData(data.slice(dayStartIndex, dayStartIndex + 7));
        setEntryCounter(dayStartIndex + 7);
        setIsDisplayDays(false);
      }
    }
  };

  const nextData = () => {
    const nextEntryCounter = entryCounter + 7;
    setDisplayedData(data.slice(entryCounter, nextEntryCounter));
    setEntryCounter(nextEntryCounter);
  };

  const backData = () => {
    if (entryCounter - 7 < 7) {
      setDisplayedData(data.slice(0, 7));
      setEntryCounter(7);
    } else {
      const nextEntryCounter = entryCounter - displayedData.length;
      setDisplayedData(data.slice(nextEntryCounter - 7, nextEntryCounter));
      setEntryCounter(nextEntryCounter);
    }
  };

  const renderCustomTick: any = (tickProps: any) => {
    const { x, y, payload } = tickProps;
    const isFirstTick = payload.index === 0;
    const isLastTick = payload.index === displayedData.length - 1;

    // console.log(displayedData.length);
    // console.log('first' + isFirstTick);
    // console.log('last' + isLastTick);

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

    const maxTicks = 7;

    const stepSize = Math.ceil(displayedData.length / maxTicks);
    const shouldSkip = payload.index % stepSize !== 0;

    if (shouldSkip) {
      return null; // Skip rendering this tick
    }

    return (
      <g transform={`translate(${x},${y})`}>
        {lines.map((line, index) => (
          <text
            style={{ wordBreak: "break-all" }}
            key={index}
            x={0}
            y={10}
            dy={index === 0 ? verticalOffset : 0}
            textAnchor={isFirstTick ? "right" : isLastTick ? "end" : "middle"}
            fill="#666"
            fontSize={12}
            cursor={"pointer"}
            onClick={() => goToDay(line)}
          >
            {line}
          </text>
        ))}
      </g>
    );
  };

  const dataToDays = (entries: any) => {
    const dayData = entries.reduce((acc: any, obj: any) => {
      const date = obj.date;
      const day = date.slice(0, 10);

      if (!acc[day]) {
        acc[day] = [];
      }

      acc[day].push(obj);

      return acc;
    }, {});

    const newDayData = Object.entries(dayData).map((arr) => {
      const date = arr[0];
      const dayData: any = arr[1];

      let moodsValues: { [key: string]: number } = {
        angry: 0,
        bored: 0,
        excited: 0,
        cheerful: 0,
        anxious: 0,
        hopeful: 0,
        wonderful: 0,
        inert: 0,
        content: 0,
        mad: 0,
        relaxed: 0,
        worried: 0,
        uptight: 0,
        sad: 0,
        calm: 0,
        fine: 0,
        defeated: 0,
        depressed: 0,
      };

      console.log(dayData);

      let scoreSum = 0;
      let moods: any = [];

      dayData.forEach((entry: any) => {
        scoreSum += entry.score;
        moods.push(entry.mood);
      });

      moods.forEach((mood: any) => {
        mood.forEach((moodName: string) => {
          moodsValues[moodName] += 1;
        });
      });

      let moodArray = Object.entries(moodsValues);

      moodArray.sort((a, b) => b[1] - a[1]);

      let topThree = moodArray.slice(0, 3).map((moodNameWithValue) => {
        return moodNameWithValue[0];
      });

      console.log(moods);
      console.log(topThree);

      const score = parseFloat((scoreSum / dayData.length).toFixed(2));

      //console.log(dayData);
      return {
        date: date,
        score: score,
        mood: topThree,
      };
    });

    console.log(newDayData);
    //let date = entries[0].date.slice(0, 10);
    //console.log(date);

    return newDayData;
  };

  console.log(displayedData);
  console.log(entryCounter);
  console.log(data);

  const backToDaysDisplay = () => {
    setIsDisplayDays(true);
    const days: any = dataToDays(data);
    setDisplayedData(days);
    setEntryCounter(7);
  };

  let daysOrData = isDisplayDays ? daysData : data;

  return data.length !== 0 ? (
    <>
      <ChartContainer>
        {!isDisplayDays && (
          <button onClick={() => backToDaysDisplay()}>Back to days</button>
        )}
        <ResponsiveContainer width="90%" height={300}>
          <LineChart data={displayedData}>
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
        </ResponsiveContainer>
      </ChartContainer>
      <button onClick={backData} disabled={entryCounter === 7 ? true : false}>
        Back
      </button>
      <button
        onClick={nextData}
        disabled={
          displayedData.length < 7 || entryCounter === daysOrData.length
            ? true
            : false
        }
      >
        Next
      </button>
    </>
  ) : (
    <LoaderComponent />
  );
}; //kuba dał pomysł, zeby defaultowo wyświetlać punkty w
//postaci średniej z dnia. opcja wybrania konkretnego dnia wyswietla ten dzien na srodku (3 wstecz 3 w przód). po kliknieciu w konkretny dzien, wyswietla wykres z tego dnia. mozliwosc wybrania pogladu punktow w postaci sredniej z tygodnia.

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
