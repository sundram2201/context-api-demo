import React from "react";
import App from "./App";
import { Fname } from "./Context";

const ComA = () => {
  return (
    <div>
      <Fname.Consumer>
        {(value) => {
          return (
            <>
              <div style={{ textAlign: "center" }}>
                <h1>User Data</h1>
                <h2>id : {value.id}</h2>
                <h2>Username : {value.username}</h2>
                <h2>role : {value.role}</h2>
              </div>
            </>
          );
        }}
      </Fname.Consumer>
    </div>
  );
};

export default ComA;
