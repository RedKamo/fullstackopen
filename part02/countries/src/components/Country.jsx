import { useState } from "react";
import MoreInfo from "./MoreInfo";

const Country = ({ country }) => {
  // console.log("country", name);

  const [moreInfo, setMoreInfo] = useState("");

  return (
    <main>
      <h3>
        {country.name.common}, <span>{country.capital}</span>
      </h3>
      <button onClick={() => setMoreInfo(!moreInfo)}>
        {moreInfo ? "Hide" : "Show"}
      </button>
      <MoreInfo {...country} moreInfo={moreInfo} />
    </main>
  );
};

export default Country;
