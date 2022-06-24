import React from "react";
function Weather(props) {
  const aWeather = props.weather;

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let dayNum = new Date(aWeather.dt * 1000).getDay();
  let result = days[dayNum];

  //let currentDay = moment().add(, "days").format("dddd");

  return (
    <div>
      <div className="card h-75 w-100" style={{ border: "none" }}>
        <h5 className="card-title" style={{ fontWeight: "bold" }}>
          {result}
        </h5>
        {
          <img
            src={
              "http://openweathermap.org/img/wn/" +
              aWeather.weather[0].icon +
              "@2x.png"
            }
            alt="Forecast img icon here"
            style={{
              height: "115px",
              width: "125px",
              alignSelf: "center",
            }}
          ></img>
        }
        <div>
          <div className="row">
            <pre
              className="day"
              style={{ fontWeight: "bold", fontSize: "125%" }}
            >
              {Math.floor(aWeather.temp.day) +
                "°" +
                "  " +
                Math.floor(aWeather.temp.night) +
                "°"}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
