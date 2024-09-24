import React, { useState } from "react";

const App = () => {
  const [list, setList] = useState([
    "aunty 1",
    "aunty 2",
    "uncle 1",
    "uncle 2",
    "uncle 3",
  ]);
  return (
    <div id="main">
      <ol key={"relativeList"}>
        {list.map((item, i) => (
          <li key={`relativeListItem${i + 1}`}>{item}</li>
        ))}
      </ol>
    </div>
  );
};

export default App;
