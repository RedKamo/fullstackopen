const Country = ({ name, flags, capital }) => {
  // console.log("country", name);
  return (
    <main>
      <p>
        {name.common}, <span>{capital}</span>
      </p>
      <img src={flags.png} alt="" />
    </main>
  );
};

export default Country;
