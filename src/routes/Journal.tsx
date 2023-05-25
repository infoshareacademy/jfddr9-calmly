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
} from "recharts";
import { useEffect, useState } from "react";
import { LoaderComponent } from "../components/Loader";

import styled from "styled-components";
import { updateBg } from "../store/slice";

const ChartContainer = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 18px;
  padding-right: 25px;
  padding-block: 20px;
`;

let maxDataEntries = 7;

export const Journal = () => {
  const { authUser }: any = useSelector((state) => state);

  const [isDisplayDays, setIsDisplayDays] = useState(true);

  const [data, setData] = useState([]);
  const [daysData, setDaysData] = useState([]);
  const [displayedData, setDisplayedData]: any[] = useState<any>([]);

  const [entryCounter, setEntryCounter] = useState(maxDataEntries);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${year}-${month}-${day} ${hours}:${minutes}`;
  };

  const [dateValue, setDateValue] = useState(
    formatDate(new Date()).slice(0, 10)
  );
  const [displayType, setDisplayType] = useState("daily");
  // const [responsiveData, setResponsiveData] = useState([]);

  if (windowWidth > 768) {
    maxDataEntries = 7;
  } else if (windowWidth <= 768 && windowWidth > 650) {
    maxDataEntries = 6;
  } else if (windowWidth <= 650 && windowWidth > 520) {
    maxDataEntries = 5;
  } else if (windowWidth <= 520 && windowWidth > 415) {
    maxDataEntries = 4;
  } else if (windowWidth <= 415 && windowWidth > 100) {
    maxDataEntries = 3;
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateBg("bgDefault"));
  }, [dispatch]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

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
        setDateValue(days[days.length - 1].date);
        if (days.length <= maxDataEntries) {
          setDisplayedData(days);
          setEntryCounter(maxDataEntries);
        } else {
          setDisplayedData(
            days.slice(days.length - maxDataEntries, days.length)
          );
          setEntryCounter(days.length);
        }
      })

      .catch((e) => console.error(e));

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isDisplayDays) {
      if (daysData.length <= maxDataEntries) {
        setDisplayedData(daysData);
        setEntryCounter(maxDataEntries);
      } else {
        setDisplayedData(
          daysData.slice(daysData.length - maxDataEntries, daysData.length)
        );
        setEntryCounter(daysData.length);
      }
    } else {
      if (data.length <= maxDataEntries) {
        setDisplayedData(data);
        setEntryCounter(maxDataEntries);
      } else {
        const line = displayedData[0].date;
        const dayStartIndex = data.findIndex((item: any) => item.date === line);
        setDisplayedData(
          data.slice(dayStartIndex, dayStartIndex + maxDataEntries)
        );
        setEntryCounter(dayStartIndex + maxDataEntries);
      }
    }
  }, [maxDataEntries]);

  const goToDay = (line: string) => {
    console.log(line);
    setDateValue(line);

    if (displayType === "detailed") {
      const dayStartIndex = data.findIndex(
        (item: any) => item.date.slice(0, 10) === line
      );
      console.log(dayStartIndex);
      if (dayStartIndex + maxDataEntries > data.length) {
        setDisplayedData(data.slice(dayStartIndex, data.length));
        setEntryCounter(data.length);
        setIsDisplayDays(false);
      } else {
        setDisplayedData(
          data.slice(dayStartIndex, dayStartIndex + maxDataEntries)
        );
        setEntryCounter(dayStartIndex + maxDataEntries);
        setIsDisplayDays(false);
      }
    } else {
      const dayStartIndex = daysData.findIndex(
        (item: any) => item.date === line
      );
      console.log(dayStartIndex);
      if (dayStartIndex + maxDataEntries > daysData.length) {
        setDisplayedData(daysData.slice(dayStartIndex, daysData.length));
        setEntryCounter(daysData.length);
        setIsDisplayDays(true);
      } else {
        setDisplayedData(
          daysData.slice(dayStartIndex, dayStartIndex + maxDataEntries)
        );
        setEntryCounter(dayStartIndex + maxDataEntries);
        setIsDisplayDays(true);
      }
    }
  };

  const nextData = () => {
    const nextEntryCounter = entryCounter + maxDataEntries;
    if (isDisplayDays) {
      if (nextEntryCounter <= daysData.length) {
        setDisplayedData(daysData.slice(entryCounter, nextEntryCounter));
        setEntryCounter(nextEntryCounter);
      } else {
        setDisplayedData(
          daysData.slice(daysData.length - maxDataEntries, daysData.length)
        );
        setEntryCounter(nextEntryCounter); // ??
      }
    } else {
      if (nextEntryCounter <= data.length) {
        setDisplayedData(data.slice(entryCounter, nextEntryCounter));
        setEntryCounter(nextEntryCounter);
      } else {
        setDisplayedData(data.slice(data.length - maxDataEntries, data.length));
        setEntryCounter(nextEntryCounter); // ??
      }
    }
  };

  const backData = () => {
    if (isDisplayDays) {
      if (entryCounter - maxDataEntries < maxDataEntries) {
        setDisplayedData(daysData.slice(0, maxDataEntries));
        setEntryCounter(maxDataEntries);
      } else {
        const nextEntryCounter = entryCounter - maxDataEntries;
        setDisplayedData(
          daysData.slice(nextEntryCounter - maxDataEntries, nextEntryCounter)
        );
        setEntryCounter(nextEntryCounter);
      }
    } else {
      if (entryCounter - maxDataEntries < maxDataEntries) {
        setDisplayedData(data.slice(0, maxDataEntries));
        setEntryCounter(maxDataEntries);
      } else {
        const nextEntryCounter = entryCounter - displayedData.length;
        setDisplayedData(
          data.slice(nextEntryCounter - maxDataEntries, nextEntryCounter)
        );
        setEntryCounter(nextEntryCounter);
      }
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

    // const maxTicks = 7;

    // const stepSize = Math.ceil(displayedData.length / maxTicks);
    // const shouldSkip = payload.index % stepSize !== 0;

    // if (shouldSkip) {
    //   return null; // Skip rendering this tick
    // }

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
            onClick={() => (isDisplayDays ? goToDay(line) : null)}
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
    // const days: any = dataToDays(data);
    // if (days.length <= 7) {
    //   setDisplayedData(days);
    //   setEntryCounter(7);
    // } else {
    //   setDisplayedData(days.slice(days.length - 7, days.length));
    //   setEntryCounter(days.length);
    // }
    // setDisplayedData(days);
    // setEntryCounter(7);

    if (daysData.length <= maxDataEntries) {
      setDisplayedData(daysData);
      setEntryCounter(maxDataEntries);
    } else {
      setDisplayedData(
        daysData.slice(daysData.length - maxDataEntries, daysData.length)
      );
      setEntryCounter(daysData.length);
    }
  };

  let daysOrData = isDisplayDays ? daysData : data;

  // if (windowWidth > 768) {
  //   responsiveData = displayedData;
  // } else if (windowWidth <= 768 && windowWidth > 650) {
  //   responsiveData = displayedData.slice(0, -1);
  // } else if (windowWidth <= 650 && windowWidth > 520) {
  //   responsiveData = displayedData.slice(0, -2);
  // } else if (windowWidth <= 520 && windowWidth > 415) {
  //   responsiveData = displayedData.slice(0, -3);
  // } else if (windowWidth <= 415 && windowWidth > 100) {
  //   responsiveData = displayedData.slice(0, -4);
  // }

  //console.log(responsiveData);
  console.log(maxDataEntries);

  return data.length !== 0 ? (
    <>
      <ChartContainer>
        {!isDisplayDays && (
          <button onClick={() => backToDaysDisplay()}>Back to days</button>
        )}
        <ResponsiveContainer width="90%" height={500}>
          <LineChart data={displayedData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" tick={renderCustomTick} interval={0} />
            <YAxis
              domain={[0, 20]}
              tickCount={3}
              tickFormatter={(value) => {
                if (value === 0) {
                  return "Low";
                } else if (value >= 8 && value <= 12) {
                  return "Mid";
                } else if (value > 12) {
                  return "High";
                } else {
                  return "";
                }
              }}
            />
            <Tooltip />
            <Tooltip labelFormatter={(label) => `Date: ${label}`} />
            <Tooltip
              formatter={(value, name) => [
                value,
                name === "score" ? "Score" : "Mood",
              ]}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="score"
              stroke="#797BEC"
              strokeWidth={3}
            />
            <Line type="monotone" dataKey="mood" stroke="#F231AA" />
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>
      <button
        onClick={backData}
        disabled={entryCounter === maxDataEntries ? true : false}
      >
        Back
      </button>
      <button
        onClick={nextData}
        disabled={entryCounter >= daysOrData.length ? true : false}
      >
        Next
      </button>
      <input
        type="date"
        value={dateValue}
        onChange={(e) => goToDay(e.target.value)}
      />
      <select
        value={displayType}
        onChange={(e) => setDisplayType(e.target.value)}
      >
        <option value={"daily"}>Daily</option>
        <option value={"detailed"}>Detailed</option>
      </select>
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
