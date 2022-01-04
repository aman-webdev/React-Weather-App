import Card from "../Card/Card";
const Cards = ({ weather }) => {
  let weathers = [];
  const getWeather = () => {
    for (let i = 0; i < 5; i++) {
      weathers = [...weathers, weather.daily[i]];
    }
    return weathers;
  };
  if (weather !== null) {
    getWeather();
  }
  return (
    <div className="cards-container">
      {weathers
        ? weathers.map((day) => (
            <Card
              key={day.dt}
              date={day.dt}
              sunrise={day.sunrise}
              sunset={day.sunset}
              temp={day.temp}
              humidity={day.humidity}
              lat={weather.lat}
              lon={weather.lon}
              weather={day.weather[0]}
            />
          ))
        : null}
    </div>
  );
};

export default Cards;
