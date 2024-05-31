import Axios from "axios";
import Weather_Key from "../config";

const OpenWeatherKey = Weather_Key;
const Url = "https://api.openweathermap.org/data/2.5/forecast";

const FetchForecast = async (city, lat, lon) => {
  const params = {
    units: "metric",
    APPID: OpenWeatherKey
  };
  
  if (lat && lon) {
    params.lat = lat;
    params.lon = lon;
  } else {
    params.q = city;
  }

  try {
    const { data } = await Axios.get(Url, { params });
    return data;
  } catch (err) {
    if (err.response) {
      alert("Error fetching forecast data");
    }
    return null;
  }
};

export default FetchForecast;