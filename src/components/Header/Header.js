import axios from "axios";
import { Link } from "react-router-dom";
const Header = ({ city, setCity, setLatitude, setLongitude }) => {
  const getCityData = async () => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=85b93f4cd2e9423e03eccda42b2f3ada&units=metric`
    );

    setLatitude(response.data.coord.lat);
    setLongitude(response.data.coord.lon);

    setCity("");
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    getCityData();
  };
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-snowflake"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#2c3e50"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72" />
            <path
              d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72"
              transform="rotate(60 12 12)"
            />
            <path
              d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72"
              transform="rotate(120 12 12)"
            />
            <path
              d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72"
              transform="rotate(180 12 12)"
            />
            <path
              d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72"
              transform="rotate(240 12 12)"
            />
            <path
              d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72"
              transform="rotate(300 12 12)"
            />
          </svg>
        </Link>
      </div>
      <nav>
        <div className="right">
          <form onSubmit={formSubmitHandler}>
            <input
              value={city}
              type="text"
              onChange={(e) => setCity(e.target.value)}
            />
          </form>
          <Link to="/hours">Hourly Weather</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
