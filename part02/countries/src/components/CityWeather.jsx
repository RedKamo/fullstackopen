const CityWeather = ({ weather }) => {
  // console.log(weather);
  return (
    <main>
      <h4>Weather</h4>
      <p>{weather.temperature}</p>
      <img src={weather.weather_icons} />
      <p>wind: {weather.wind_speed} </p>
      <p>direction:</p>
    </main>
  );
};

export default CityWeather;
