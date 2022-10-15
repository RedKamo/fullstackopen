const MoreInfo = ({
  moreInfo,
  name,
  capital,
  languages,
  flags,
  population,
}) => {
  console.log(languages, name);
  return (
    <main>
      {moreInfo && (
        <div key={name.common}>
          <h2>{name.common}</h2>
          <img src={flags.png} width="30%" alt={name.common} />
          <p>
            <b>Capital City:</b> {capital}
          </p>
          <p>
            <b>Population: </b> {population}
          </p>
          <b>Languages:</b>
          {Object.values(languages).map((lang, i) => (
            <p key={i}>{lang}</p>
          ))}
        </div>
      )}
    </main>
  );
};

export default MoreInfo;
