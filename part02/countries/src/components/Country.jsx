import { useState } from "react";

import Modal from "./Modal";

const Country = ({ country }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <main className="country">
      <section className="country__image">
        <img src={country.flags.png} alt={country.name.common} />
      </section>
      <section className="country__info">
        <h4>
          {country.name.common}, <span>{country.capital}</span>
        </h4>
        <button onClick={toggleModal} className="btn-modal">
          {!modal ? "More..." : "Hide"}
        </button>
        <Modal modal={modal} toggleModal={toggleModal} {...country} />
      </section>
    </main>
  );
};

export default Country;
