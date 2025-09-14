import { useState } from "react";
import style from './PersonalGreeting.module.css'

export default function PersonalGreeting() {
    const [name, setName] =useState("John Dawson");
  return (
    <div className = {style.container}>
      <h2 >It is nice to meet you, {name}
    </h2>
    {/**/ }
    <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
    </div>
   
  );
}

//John Dawson = Max Mustermann
