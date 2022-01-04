import Home from "./Pages/Home";
import Header from "./components/Header/Header";
import HourWeather from "./Pages/HourWeather";
import { useState, useEffect } from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import "./App.scss";

function App() {
  const [city, setCity] = useState("");
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [locationError, setLocationError] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        setLatitude(pos.coords.latitude);
        setLongitude(pos.coords.longitude);
      },
      (err) => setLocationError(err.message)
    );
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Header
          city={city}
          setCity={setCity}
          setLatitude={setLatitude}
          setLongitude={setLongitude}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home lat={latitude} lon={longitude} error={locationError} />
            }
          />

          <Route
            path="/hours"
            element={
              <HourWeather
                lat={latitude}
                lon={longitude}
                error={locationError}
              />
            }
          />

          {/* <Route
            path="/search"
            element={
              <SearchCity
                setLongitude={setLongitude}
                setLatitude={setLatitude}
                city={city}
                setCity={setCity}
              />
            }
          /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
