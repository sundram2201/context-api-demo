import ComA from "./ChildComp";
import React from "react";
import { Fname } from "./Context";

function App() {
  return (
    <div className="App">
      <Fname.Provider
        value={{
          username: "goldy",
          id: 1,
          role: "none",
        }}
      >
        <ComA />
      </Fname.Provider>
    </div>
  );
}

export default App;
