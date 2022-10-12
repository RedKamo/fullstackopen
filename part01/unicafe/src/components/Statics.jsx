import React from "react";
import StaTable from "./StaTable";
const Statics = ({
  good,
  bad,
  neutral,
  totality,
  average,
  averagePositive,
}) => {
  return (
    <div className="statics">
      <table>
        <thead>
          <tr>
            <th>Statics</th>
            <th className="result__title">Result</th>
          </tr>
        </thead>
        <tbody>
          <StaTable text="Good" value={good} />
          <StaTable text="Bad" value={bad} />
          <StaTable text="Neutral" value={neutral} />
          <StaTable text="Totality" value={totality} />
          <StaTable text="Average" value={average} />
          <StaTable text="Positive" value={averagePositive} />
        </tbody>
      </table>
    </div>
  );
};

export default Statics;
