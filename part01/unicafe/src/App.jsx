import { useState } from "react";
import "./App.css";
import Statics from "./components/Statics";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const totality = good + neutral + bad;
  const average = ((good - bad) / totality).toFixed(2);
  const averagePositive = ((good / totality) * 100).toFixed(2);

  return (
    <div className="App">
      <h1>Unicafe</h1>
      <section className="buttons">
        <button onClick={() => setGood(good + 1)}>Good 😊</button>
        <button onClick={() => setNeutral(neutral + 1)}>Neutral 😐</button>
        <button onClick={() => setBad(bad + 1)}>Bad 😤</button>
      </section>
      {totality === 0 ? (
        <h2 className="render__stats">No Feedback Given ...⌛</h2>
      ) : (
        <Statics
          good={good}
          neutral={neutral}
          bad={bad}
          totality={totality}
          average={average}
          averagePositive={averagePositive}
        />
      )}
    </div>
  );
}

export default App;
