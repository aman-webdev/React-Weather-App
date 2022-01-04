import Cards from "../components/Cards/Cards";
import { useState, useEffect } from "react";
import axios from "axios";
import Error from "../components/Error";
function Home({ lat, lon }) {
  const [dailyWeather, setDailyWeather] = useState(null);

  useEffect(() => {
    const getDailyData = async (lat, lon) => {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=85b93f4cd2e9423e03eccda42b2f3ada&units=metric`
      );
      setDailyWeather(response.data);
    };

    if (lat && lon) getDailyData(lat, lon);
  }, [lat, lon]);

  return (
    <div className="home-container">
      {!(lat && lon) ? <Error /> : <Cards weather={dailyWeather} />}
    </div>
  );
}

export default Home;
