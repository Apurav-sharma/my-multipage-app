import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import countries from "./countries";

var apiKey = "8BBG5TBBQTMP";

function Time() {
  var [time, setTime] = useState(new Date().toLocaleTimeString());
  var [timezone, settimezone] = useState("Europe/London");
  var [allCountry, setCountry] = useState([]);
  async function fetTime(timezone) {
    const url = `https://api.timezonedb.com/v2.1/get-time-zone?key=${apiKey}&format=json&by=zone&zone=${timezone}`;
    try {
      var respond = await axios.get(url);
      var res = respond.data;
      if (res.status === "OK") setTime(res.formatted);
      else {
        console.error(res.message);
      }
    } catch {
      console.log("error");
    }
  }

  useEffect(() => {
    fetTime(timezone);
  }, [timezone]);

  function set(event) {
    settimezone(event.target.value);
  }

  useEffect(() => {
    async function getCountry() {
      try {
        var country = await countries();
        setCountry(country);
      } catch (err) {
        console.log(err);
      }
    }
    getCountry();
  }, []);

  return (
    <div className="content">
      <label htmlFor="timezone">Select Timezone:</label>
      <select id="timezone" onChange={set}>
        {allCountry.map((c, index) => (
          <option value={c.continent} key={index}>
            {c.name} ({c.continent})
          </option>
        ))}
      </select>
      <div className="time">
        <h1 className="h">
          {time}
        </h1>
      </div>
    </div>
  );
}

export default Time;
