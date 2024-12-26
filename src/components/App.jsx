import React, { useState } from "react";

function App() {
  let tim = new Date().toLocaleTimeString();
  const [time, setTime] = useState();
  {
    {
      setInterval(theTime, 1000);
    }
  }
  function theTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  console.log(tim);
  return (
    <div className="container">
      <h1>{tim}</h1>

      <button onClick={theTime}>Get Time</button>
    </div>
  );
}

export default App;
