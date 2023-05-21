import React from "react";
import axios from "axios";
import { Hearts } from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.name} is ${response.data.main.temp}℃`
    );
  }

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=e8dec81490f528b6b7847357fa83bb2a&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <Hearts
      height="80"
      width="80"
      color="hotpink"
      ariaLabel="hearts-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
}
