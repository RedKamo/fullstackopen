const CityWeather = ({ weather, capital }) => {
  // console.log(weather);
  return (
    <main className="weather">
      <h4>Weather in {capital}:</h4>
      <section className="weather__info">
        <article className="weather__image">
          <img src={weather.weather_icons} />
        </article>
        <article className="weather__about">
          <p>
            Tº : <span>{weather.temperature}</span> ºC
          </p>
          <p>
            Wind: <span> {weather.wind_speed}</span> mph
          </p>
          <p>
            Direction: <span>{weather.wind_dir}</span>
          </p>
        </article>
      </section>
    </main>
  );
};

export default CityWeather;
