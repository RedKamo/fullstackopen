import axios from "axios";
import { useState, useEffect } from "react";
import CityWeather from "./CityWeather";

const Modal = ({
  modal,
  toggleModal,
  name,
  flags,
  population,
  languages,
  capital,
}) => {
  const [weather, setWeather] = useState(null);
  const ENV = import.meta.env.VITE_API_KEY;
  const API = `http://api.weatherstack.com/current?access_key=${ENV}&query=${capital}`;

  const getWeather = () => {
    axios.get(API).then((res) => {
      const cityWeather = res.data.current;
      setWeather(cityWeather);
    });
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <main>
      {modal && (
        <div className="modal overlay" onClick={toggleModal}>
          <div className="modal-content">
            <button className="close-modal" onClick={toggleModal}>
              ✖️
            </button>
            <section className="modal__info">
              <section className="modal__image">
                <img src={flags.png} />
              </section>
              <section className="modal__city">
                <h2>{name.common}</h2>
                <p>
                  <b>Capital City:</b> {capital}
                </p>
                <p>
                  <b>Population: </b> {population}
                </p>
              </section>
            </section>
            <section className="modal__weather">
              <section className="modal__languages">
                <h4>Spoken languages:</h4>
                <article className="languages">
                  {Object.values(languages).map((lang, i) => (
                    <p key={i}>{lang}</p>
                  ))}
                </article>
              </section>
              <CityWeather weather={weather} capital={capital} />
            </section>
          </div>
        </div>
      )}
    </main>
  );
};

export default Modal;
