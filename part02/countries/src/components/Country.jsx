import { useState } from "react";
import MoreInfo from "./MoreInfo";

const Country = ({ country }) => {
  // console.log("country", name);

  const [moreInfo, setMoreInfo] = useState("");

  return (
    <main className="country">
      <section className="country__image">
        <img src={country.flags.png} alt={country.name.common} />
      </section>
      <section className="country__info">
        <h4>
          {country.name.common}, <span>{country.capital}</span>
        </h4>
        <button onClick={() => setMoreInfo(!moreInfo)}>
          {moreInfo ? "Hide" : "Show"}
        </button>
        <MoreInfo {...country} moreInfo={moreInfo} />
      </section>
    </main>
  );
};

export default Country;
