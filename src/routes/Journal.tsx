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
  ResponsiveContainer,
} from "recharts";
import { useEffect, useState } from "react";
import { LoaderComponent } from "../components/Loader";

import { Navigation } from "../components/Navigation";
import { Score } from "../components/Score/Score";

import styled from "styled-components";
import { updateBg } from "../store/slice";

const ChartContainer = styled.div`
  width: 90%;
  margin: auto;

  display: flex;
  flex-direction: column;

  align-items: center;
  background-color: white;
  border-radius: 18px;
  padding-block: 20px;
  padding-right: 50px;
  box-sizing: border-box;

  @media (max-width: 1160px) {
    margin-top: 140px;
  }
`;

const StatisticsAndNavContainer = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;

  @media (max-width: 1160px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const StatisticsContainer = styled.div`
  min-width: 370px;
  height: 370px;
  background-color: white;
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;

  @media (max-width: 1160px) {
    order: 2;
  }
`;

const NavigationContainer = styled.nav`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 10px;

  @media (max-width: 1160px) {
    order: 1;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const DateInput = styled.input`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  background-color: rgba(255, 255, 255, 0.68);
  padding: 14px;
  border-radius: 8px;
  border: 0;
  color: #797bec;
`;

const Select = styled.select`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  background-color: rgba(255, 255, 255, 0.68);
  padding: 8px;
  border-radius: 8px;
  border: 0;
  color: #797bec;
`;

const StyledStepButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 0;
  background-color: rgb(255, 255, 255, 0.45);
  color: #797bec;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 25px;
  text-align: center;
`;

const StyledLabel = styled.label`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  margin-right: auto;
`;

const StyledMoods = styled.div`
  width: 88px;
  height: 30px;
  background: rgba(217, 217, 217, 0.3);
  border-radius: 50px;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: #797bec;
`;

let maxDataEntries: any = 7;

export const Journal = () => {
  const { authUser }: any = useSelector((state) => state);

  const [isDisplayDays, setIsDisplayDays] = useState(true);

  const [data, setData] = useState([]);
  const [daysData, setDaysData] = useState([]);
  const [displayedData, setDisplayedData]: any[] = useState<any>([]);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  if (windowWidth > 1165) {
    maxDataEntries = 7;
  } else if (windowWidth <= 1165 && windowWidth > 1000) {
    maxDataEntries = 6;
  } else if (windowWidth <= 1000 && windowWidth > 830) {
    maxDataEntries = 5;
  } else if (windowWidth <= 830 && windowWidth > 680) {
    maxDataEntries = 4;
  } else if (windowWidth <= 680 && windowWidth > 100) {
    maxDataEntries = 3;
  }

  const [entryCounter, setEntryCounter] = useState(maxDataEntries);

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
  const [customDateValue, setCustomDateValue] = useState(
    formatDate(new Date()).slice(0, 10)
  );
  const [displayType, setDisplayType] = useState("daily");
  // const [responsiveData, setResponsiveData] = useState([]);

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
          if (entry.custom) {
            return {
              date: formatDate(new Date(entry.date.seconds * 1000)),
              mood: entry.mood,
              score: entry.score,
              custom: entry.custom,
            };
          }
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
        //setDateValue(days[days.length - 1].date);
        console.log(windowWidth);
        if (windowWidth > 1165) {
          maxDataEntries = 7;
        } else if (windowWidth <= 1165 && windowWidth > 1000) {
          maxDataEntries = 6;
        } else if (windowWidth <= 1000 && windowWidth > 830) {
          maxDataEntries = 5;
        } else if (windowWidth <= 830 && windowWidth > 680) {
          maxDataEntries = 4;
        } else if (windowWidth <= 680 && windowWidth > 100) {
          maxDataEntries = 3;
        }
        console.log(maxDataEntries);
        if (days.length <= maxDataEntries) {
          setDisplayedData(days);
          setEntryCounter(maxDataEntries);
          setDateValue(days[0].date);
        } else {
          const newDisplayedData = days.slice(
            days.length - maxDataEntries,
            days.length
          );
          setDisplayedData(newDisplayedData);
          setEntryCounter(days.length);
          setDateValue(newDisplayedData[0].date);
        }
      })

      .catch((e) => console.error(e));

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (displayType !== "custom") {
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
          const dayStartIndex = data.findIndex(
            (item: any) => item.date === line
          );
          setDisplayedData(
            data.slice(dayStartIndex, dayStartIndex + maxDataEntries)
          );
          setEntryCounter(dayStartIndex + maxDataEntries);
        }
      }
    } else {
      if (daysData.length <= maxDataEntries) {
        setDisplayedData(daysData);
        setEntryCounter(maxDataEntries);
      } else {
        setDisplayedData(
          daysData.slice(daysData.length - maxDataEntries, daysData.length)
        );
        setEntryCounter(daysData.length);
      }
    }
  }, [maxDataEntries]);

  useEffect(() => {
    dispatch(updateBg("bgJournal"));
  }, [dispatch]);

  const goToDay = (line: string, mode: string, whichDate: number) => {
    console.log(line);

    if (mode === "detailed") {
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
    } else if (mode === "daily") {
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
    } else {
      let dayStartIndex = 0;
      let dayEndIndex = 0;
      if (whichDate === 0) {
        dayStartIndex = daysData.findIndex((item: any) => item.date === line);
        dayEndIndex = daysData.findIndex(
          (item: any) => item.date === customDateValue
        );
      } else {
        dayStartIndex = daysData.findIndex(
          (item: any) => item.date === dateValue
        );
        dayEndIndex = daysData.findIndex((item: any) => item.date === line);
      }

      console.log(daysData);
      if (dayStartIndex + maxDataEntries > daysData.length) {
        setDisplayedData(daysData.slice(dayStartIndex, daysData.length));
        //setEntryCounter(daysData.length);
        setIsDisplayDays(true);
      } else {
        setDisplayedData(daysData.slice(dayStartIndex, dayEndIndex + 1));
        //setEntryCounter(dayStartIndex + maxDataEntries);
        setIsDisplayDays(true);
      }
    }
  };

  const nextData = () => {
    const nextEntryCounter = entryCounter + maxDataEntries;
    if (isDisplayDays) {
      if (nextEntryCounter <= daysData.length) {
        const newDisplayedData: any = daysData.slice(
          entryCounter,
          nextEntryCounter
        );
        setDisplayedData(newDisplayedData);
        setEntryCounter(nextEntryCounter);
        setDateValue(newDisplayedData[0].date);
      } else {
        const newDisplayedData: any = daysData.slice(
          daysData.length - maxDataEntries,
          daysData.length
        );
        setDisplayedData(newDisplayedData);
        setEntryCounter(nextEntryCounter); // ??
        setDateValue(newDisplayedData[0].date);
      }
    } else {
      if (nextEntryCounter <= data.length) {
        const newDisplayedData: any = data.slice(
          entryCounter,
          nextEntryCounter
        );
        setDisplayedData(newDisplayedData);
        setEntryCounter(nextEntryCounter);
        setDateValue(newDisplayedData[0].date.slice(0, 10));
      } else {
        const newDisplayedData: any = data.slice(
          data.length - maxDataEntries,
          data.length
        );
        setDisplayedData(newDisplayedData);
        setEntryCounter(nextEntryCounter); // ??
        setDateValue(newDisplayedData[0].date.slice(0, 10));
      }
    }
  };

  const backData = () => {
    if (isDisplayDays) {
      if (entryCounter - maxDataEntries < maxDataEntries) {
        const newDisplayedData: any = daysData.slice(0, maxDataEntries);
        setDisplayedData(newDisplayedData);
        setEntryCounter(maxDataEntries);
        setDateValue(newDisplayedData[0].date);
      } else {
        const nextEntryCounter = entryCounter - maxDataEntries;
        const newDisplayedData: any = daysData.slice(
          nextEntryCounter - maxDataEntries,
          nextEntryCounter
        );
        setDisplayedData(newDisplayedData);
        setEntryCounter(nextEntryCounter);
        setDateValue(newDisplayedData[0].date);
      }
    } else {
      if (entryCounter - maxDataEntries < maxDataEntries) {
        const newDisplayedData: any = data.slice(0, maxDataEntries);
        setDisplayedData(data.slice(0, maxDataEntries));
        setEntryCounter(maxDataEntries);
        setDateValue(newDisplayedData[0].date.slice(0, 10));
      } else {
        const nextEntryCounter = entryCounter - displayedData.length;
        const newDisplayedData: any = data.slice(
          nextEntryCounter - maxDataEntries,
          nextEntryCounter
        );
        setDisplayedData(newDisplayedData);
        setEntryCounter(nextEntryCounter);
        setDateValue(newDisplayedData[0].date.slice(0, 10));
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
            key={index}
            fontWeight={"bold"}
            x={0}
            y={10}
            dy={index === 0 ? verticalOffset : 0}
            textAnchor={isFirstTick ? "right" : isLastTick ? "end" : "middle"}
            fill="#797bec"
            fontSize={maxDataEntries !== 3 ? 16 : 12}
            cursor={isDisplayDays ? "pointer" : "initial"}
            onClick={() => {
              if (isDisplayDays) {
                setDisplayType("detailed");
                goToDay(line, "detailed", 0);
              }
            }}
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

  let daysOrData = isDisplayDays ? daysData : data;

  console.log(maxDataEntries);

  let sum = 0;
  for (let i = 0; i < displayedData.length; i++) {
    sum += displayedData[i].score;
  }
  const avg = sum / displayedData.length;
  console.log(avg);

  const moodCount: any = {};
  for (let i = 0; i < displayedData.length; i++) {
    const moods = displayedData[i].mood;
    for (let j = 0; j < moods.length; j++) {
      const mood = moods[j];
      moodCount[mood] = (moodCount[mood] || 0) + 1;
    }
  }

  const sortedMoods = Object.keys(moodCount).sort(
    (a, b) => moodCount[b] - moodCount[a]
  );
  const top3Moods = sortedMoods.slice(0, 3);

  console.log(top3Moods);

  return data.length !== 0 ? (
    <>
      <Navigation
        src="src/assets/logo-white.png"
        srcHamburger="src/assets/MenuWhite.svg"
        alt="Calmly logo in white colour"
      />
      <ChartContainer>
        {/* {!isDisplayDays && <button onClick={() => backToDaysDisplay()}>Back to days</button>} */}

        <ResponsiveContainer width="90%" height={500}>
          <LineChart key={maxDataEntries} data={displayedData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              tick={renderCustomTick}
              interval={displayType === "custom" ? 1 : 0}
            />
            <YAxis
              domain={[7, 21]}
              tickCount={3}
              tickFormatter={(value) => {
                if (value === 6) {
                  return "Low";
                } else if (value < 20) {
                  return "Mid";
                } else if (value >= 20) {
                  return "High";
                } else {
                  return "";
                }
              }}
            />
            {displayType === "custom" && (
              <Tooltip
                labelStyle={{ color: "green" }}
                itemStyle={{ color: "#797BEC" }}
                formatter={(value: any, name) => {
                  //console.log(value);
                  let formattedValue = value;
                  if (typeof value !== "number") {
                    formattedValue = value.join(" ~ ");
                  }
                  return [formattedValue, name === "score" ? "Score" : "Mood"];
                }}
                labelFormatter={function (value) {
                  //console.log(name);
                  return `Date: ${value}`;
                }}
              />
            )}
            {/* <Tooltip labelFormatter={(label) => `Date: ${label}`} /> */}
            {displayType !== "custom" && (
              <Tooltip
                formatter={(value: any, name) => {
                  //console.log(value);
                  let formattedValue = value;
                  if (typeof value !== "number" && typeof value !== "string") {
                    formattedValue = value.join(" ~ ");
                  }
                  return [
                    formattedValue,
                    name === "score"
                      ? "Score"
                      : name === "mood"
                      ? "Mood"
                      : "Custom",
                  ];
                }}
              />
            )}
            {/* <Tooltip labelFormatter={(label) => `Date: ${label}`} /> */}
            {/* <Tooltip
              formatter={(value, name) => [value, name === 'score' ? 'Score' : name === 'mood' ? 'Mood' : 'Date']}
            /> */}
            {/* <Legend /> */}
            <Line
              type="monotone"
              dataKey="score"
              stroke="#797BEC"
              strokeWidth={3}
            />
            <Line type="monotone" dataKey="mood" stroke="#797BEC" />
            <Line type="monotone" dataKey="custom" stroke="#797BEC" />
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>

      <StatisticsAndNavContainer>
        <StatisticsContainer>
          <Score kontent={avg.toFixed(2)} />
        </StatisticsContainer>
        <NavigationContainer>
          <ButtonsContainer>
            {displayType !== "custom" && (
              <StyledStepButton
                onClick={backData}
                disabled={entryCounter === maxDataEntries ? true : false}
              >
                {"<"}
              </StyledStepButton>
            )}
            <DateInput
              type="date"
              value={dateValue}
              onChange={(e) => {
                setDateValue(e.target.value);
                goToDay(e.target.value, displayType, 0);
              }}
            />
            {displayType === "custom" && (
              <DateInput
                type="date"
                value={customDateValue}
                onChange={(e) => {
                  setCustomDateValue(e.target.value);
                  goToDay(e.target.value, displayType, 1);
                }}
              />
            )}
            {displayType !== "custom" && (
              <StyledStepButton
                onClick={nextData}
                disabled={entryCounter >= daysOrData.length ? true : false}
              >
                {">"}
              </StyledStepButton>
            )}
          </ButtonsContainer>

          <ButtonsContainer>
            <StyledLabel htmlFor="select">View: </StyledLabel>
            <Select
              name="select"
              value={displayType}
              onChange={(e) => {
                const firstDisplayedDate = displayedData[0].date.slice(0, 10);
                if (e.target.value === "custom") {
                  setDisplayType(e.target.value);
                  setDateValue(firstDisplayedDate);
                  setIsDisplayDays(true);
                  goToDay(firstDisplayedDate, e.target.value, 0);
                } else {
                  setDisplayType(e.target.value);
                  console.log(e.target.value);
                  setIsDisplayDays(e.target.value === "daily" ? true : false);
                  goToDay(dateValue, e.target.value, 0);
                }
              }}
            >
              <option value={"daily"}>Daily</option>
              <option value={"detailed"}>Detailed</option>
              <option value={"custom"}>Custom</option>
            </Select>
          </ButtonsContainer>
        </NavigationContainer>
        <StatisticsContainer>
          <h3 style={{ color: "#797bec", marginTop: "30px" }}>
            Most frequently chosen moods from displayed data
          </h3>
          <StyledMoods>{top3Moods[0]}</StyledMoods>
          <StyledMoods>{top3Moods[1]}</StyledMoods>
          <StyledMoods>{top3Moods[2]}</StyledMoods>
        </StatisticsContainer>
      </StatisticsAndNavContainer>
    </>
  ) : (
    <LoaderComponent />
  );
};
