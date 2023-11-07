import React, { useState } from "react";

function App() {
  const [changeText, setChangeText] = useState(false);

  const handleChange = () => {
    setChangeText((prev) => !prev);
  };

  return (
    <div>
      <h1>{changeText ? "Home" : "aboutPage"}</h1>

      <button onClick={handleChange} type="button">
        change
      </button>
    </div>
  );
}

export default App;
