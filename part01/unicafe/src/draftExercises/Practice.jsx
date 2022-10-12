import Matriz from "./Matriz";

const Practice = () => {
  const [count, setCount] = useState(0);
  const [totalRockets, setTotalRockets] = useState(0);
  const [totalAstronauts, setTotalAstronauts] = useState(0);
  const [totalComputers, setTotalComputers] = useState(0);
  const [totality, setTotality] = useState(0);
  // setTimeout(() => setCount(count + 1), 1000);
  const [value, setValue] = useState(10);

  const hello = (who) => {
    const handler = () => {
      console.log("Hello", who);
    };
    return handler;
  };

  const setToValue = (newValue) => () => {
    setValue(newValue);
  };

  const handleTesting = (newValue) => () => {
    setValue(newValue);
  };

  const totalEmojies = () => {
    setTotality(totalRockets + totalAstronauts + totalComputers);
  };

  return (
    <>
      <div>
        <Matriz />
        {value}
        <button onClick={handleTesting(1000)}> thousand </button>
        <button onClick={handleTesting(0)}> reset </button>
        <button onClick={handleTesting(value + 1)}> increment </button>
      </div>
      <div className="card">
        <button onClick={() => setCount(count + 1)}>➕ </button>
        <p>{count}</p>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
      <section>
        <h4>Compras de emojis</h4>
        <article className="emojis">
          <section>
            <button onClick={() => setTotalRockets(totalRockets + 1)}>
              rocket 🚀
            </button>
            <h4>total rockets</h4>
            <p>{totalRockets}</p>
          </section>
          <section>
            <button onClick={() => setTotalAstronauts(totalAstronauts + 1)}>
              astronaut 🧑‍🚀
            </button>
            <h4>total astronauts</h4>
            <p>{totalAstronauts}</p>
          </section>
          <section>
            <button onClick={() => setTotalComputers(totalComputers + 1)}>
              computer 💻
            </button>
            <h4>total computers </h4>
            <p>{totalComputers}</p>
          </section>
        </article>
        <section>
          <button onClick={totalEmojies}>...And the total is: </button>
          <h3>
            {" "}
            <span className="total">{totality}</span> purchased emojis{" "}
          </h3>
        </section>
      </section>
    </>
  );
};

export default Practice;
