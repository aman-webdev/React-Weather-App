import { useState, useEffect } from "react";
import axios from "axios";

const Search = ({ setDailyWeather }) => {
  const [city, setCity] = useState("");
  const [cityWeather, setCityWeather] = useState({});

  const getWeather = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=85b93f4cd2e9423e03eccda42b2f3ada&units=metric`
    );
    setDailyWeather(response.data);
    setCityWeather(response.data);
  };

  return (
    <form onSubmit={getWeather}>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
    </form>
  );
};

export default Search;
