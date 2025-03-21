import React, { useState } from "react";

function HookCounterThree() {
  const [name, setName] = useState({ firsName: "", lastName: "" });
  return (
    <div>
      <form>
        <input
          type="text"
          value={name.firsName}
          onChange={(e) => setName({...name, firsName: e.target.value })}
        />
        <input
          type="text"
          value={name.lastName}
          onChange={(e) => setName({...name, lastName: e.target.value })}
        />
        <h2>Your first name is-{name.firsName}</h2>
        <h2>Your last name is-{name.lastName}</h2>
        <h2>{JSON.stringify(name)}</h2>
      </form>
    </div>
  );
}

export default HookCounterThree;
