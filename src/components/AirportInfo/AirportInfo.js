import React, { useEffect, useState } from "react";
import axios from "axios";

export const AirportInfo = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    axios
      .get("https://server.host/peregrine", {
        params: { exchanges: ["kucoin", "kraken"], volume: 10 },
      })
      .then(function (response) {
        setApiData(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);
  const func = () => {
    console.log(apiData);
  };
  return (
    <div>
      <h1>Hello</h1>
      <button onClick={() => func()}>onClick</button>
    </div>
  );
};
