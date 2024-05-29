import Axios from "axios";
import Weather_Key from "../config";

const OpenWeatherKey = Weather_Key;
const Url = "https://api.openweathermap.org/data/2.5/weather";

const FetchWeatherApi = async (query) => {
  try {
    const { data } = await Axios.get(Url, {
      params: {
        q: query,
        units: "metric",
        APPID: OpenWeatherKey
      }
    });
    return data;
  } catch (err) {
    if (err.response) {
      alert("Enter valid city name");
    }
    return null; 
  }
};

export default FetchWeatherApi;
