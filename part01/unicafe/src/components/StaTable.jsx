import React from "react";

const StaTable = ({ text, value }) => {
  return (
    <tr>
      <td className="comments">{text}</td>
      <td className="result">{value}</td>
    </tr>
  );
};

export default StaTable;
