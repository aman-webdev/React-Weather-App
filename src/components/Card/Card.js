const Card = ({ date, sunrise, sunset, temp, humidity, lat, lon, weather }) => {
  const iconSrc = `https://openweathermap.org/img/wn/${weather.icon}@2x.png`;
  const getTime = (unix_timestamp) => {
    const date = new Date(unix_timestamp * 1000);
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    const seconds = "0" + date.getSeconds();
    const formattedTime =
      hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
    return formattedTime;
  };

  const getDay = (unix_timestamp) => {
    const date = new Date(unix_timestamp * 1000);
    return date.toLocaleDateString();
  };

  return (
    <div className="card">
      <div className="top">
        <img src={iconSrc} alt="" />
        <div className="lat-container">
          <p className="card-title">{getDay(date)}</p>

          <p className="light-text">
            {lat} <span>Lat</span> , {lon} <span>Long</span>
          </p>
        </div>
      </div>
      <div className="temp-container">
        <div className="high-temp temp">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-temperature-plus"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#2c3e50"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M8 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 0 0 -4 0v8.5" />
            <line x1="8" y1="9" x2="12" y2="9" />
            <line x1="16" y1="9" x2="22" y2="9" />
            <line x1="19" y1="6" x2="19" y2="12" />
          </svg>
          <p>
            {temp.max} <span>°C</span>{" "}
          </p>
        </div>
        <div className="low-temp temp">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-temperature-minus"
            width="24"
            height="30"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#2c3e50"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M8 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 0 0 -4 0v8.5" />
            <line x1="8" y1="9" x2="12" y2="9" />
            <line x1="16" y1="9" x2="22" y2="9" />
          </svg>
          <p>
            {temp.min} <span>°C</span>
          </p>
        </div>
      </div>
      <div className="bottom-container">
        <div className="bottom">
          <p className="light">
            Humidity <span>{humidity} %</span>
          </p>
        </div>
        <div className="bottom">
          <p className="light">
            Sunrise <span>{getTime(sunrise)}</span>
          </p>
        </div>
        <div className="bottom">
          <p className="light">
            Sunset <span>{getTime(sunset)}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
