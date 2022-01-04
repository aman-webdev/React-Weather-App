import { useState, useEffect } from "react";
import axios from "axios";
import Graph from "../components/Graph/Graph";
import Error from "../components/Error";

const HourWeather = ({ lat, lon }) => {
  const getCurrentDay = () => {
    const date = new Date();
    const nextDay = new Date(date);
    nextDay.setDate(date.getDate() + 1);

    return nextDay.toLocaleDateString("en-EN", { weekday: "long" });
  };

  const [selectedDay, setSelectedDay] = useState(getCurrentDay());
  const [hourlyWeather, setHourlyWeather] = useState(null);

  useEffect(() => {
    const getDailyData = async (lat, lon) => {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=85b93f4cd2e9423e03eccda42b2f3ada&units=metric`
      );

      setHourlyWeather(response.data);
    };

    if (lat && lon) getDailyData(lat, lon);
  }, [lat, lon]);

  const getDay = (unix_timestamp) => {
    const date = new Date(unix_timestamp * 1000);
    return date.toLocaleDateString("en-EN", { weekday: "long" });
  };

  const getWeatherForParticularDay = () => {
    return hourlyWeather.list.filter((day) => getDay(day.dt) === selectedDay);
  };

  const getTemp = () => {
    return getWeatherForParticularDay().map((day) => day.main.temp);
  };

  const renderOptions = () => {
    const currentDay = getCurrentDay();
    const days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    return days.map((day, index) => {
      return (
        <option value={day} key={index} defaultValue={currentDay}>
          {day}
        </option>
      );
    });
  };

  return (
    <>
      <div className="hour-weather">
        {hourlyWeather ? (
          <>
            <div className="info">
              <h1>{hourlyWeather.city.name}</h1>
              <select
                onChange={(e) => setSelectedDay(e.target.value)}
                value={selectedDay}
              >
                {renderOptions()}
              </select>
            </div>
            <div>
              <Graph temp={getTemp()} />
            </div>
          </>
        ) : (
          <Error />
        )}
      </div>
    </>
  );
};

export default HourWeather;
