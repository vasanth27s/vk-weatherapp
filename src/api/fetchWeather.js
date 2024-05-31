import Axios from "axios";
import Weather_Key from "../config";

const OpenWeatherKey = Weather_Key;
const Url = "https://api.openweathermap.org/data/2.5/weather";

const FetchWeatherApi = async (query, lat, lon) => {
  const params = {
    units: "metric",
    APPID: OpenWeatherKey
  };
  
  if (lat && lon) {
    params.lat = lat;
    params.lon = lon;
  } else {
    params.q = query;
  }

  try {
    const { data } = await Axios.get(Url, { params });
    return data;
  } catch (err) {
    if (err.response) {
      alert("Enter valid city name or coordinates");
    }
    return null;
  }
};

export default FetchWeatherApi;