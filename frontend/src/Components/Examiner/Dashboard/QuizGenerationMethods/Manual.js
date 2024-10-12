import React from "react";

function Manual({ setMethod }) {
  return (
    <div>
      <button onClick={() => setMethod(0)}>button</button>
    </div>
  );
}

export default Manual;
