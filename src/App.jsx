import React, { useState, useEffect } from "react";
import "./App.css";
import WeatherService from "./services/WeatherService";
import CurrentDaysWeather from "./components/CurrentDaysWeather";

function App() {
  const [pageData, setPageData] = useState({
    arrayOfApiWeatherData: [],
    weatherData: [],
  });

  false && console.log(pageData.arrayOfApiWeatherData);

  useEffect(() => {
    console.log("firing useEffect for Weather api");
    WeatherService.getWeather()
      .then(onGetWeatherSuccess)
      .catch(onGetWeatherError);
  }, []);

  const onGetWeatherSuccess = (data) => {
    console.log("weather api success", data);
    let arrayOfData = data.data.daily;
    console.log({ arrayOfData });

    setPageData((prevState) => {
      const pd = { ...prevState };
      pd.arrayOfApiWeatherData = arrayOfData;
      pd.weatherData = arrayOfData.slice(0, 5).map(listOfWeather);
      return pd;
    });
  };

  const onGetWeatherError = (err) => {
    console.log(err);
  };

  const listOfWeather = (aWeather) => {
    console.log("param passing through listOfWeather function", aWeather);
    return <CurrentDaysWeather weather={aWeather}></CurrentDaysWeather>;
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-sm text-center">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
            >
              {pageData.weatherData}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
