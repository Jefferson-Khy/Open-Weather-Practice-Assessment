import axios from "axios";

const getWeather = () => {
  const config = {
    method: "GET",
    url: "/data/2.5/onecall?lat=33&lon=-117&appid=[insert api key here]&units=imperial",
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

export default { getWeather };
