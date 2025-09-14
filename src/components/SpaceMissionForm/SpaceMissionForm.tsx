import { useState } from "react";
import styles from './SpaceMissionForm.module.css';

export default function SpaceMissionForm() {
  const [name, setName] = useState("");
  const [planet, setPlanet] = useState("Mars");

  return (
    <div className={styles.container}>
      <h2>🚀 Space Mission Registration</h2>

      <input
        type="text"
        placeholder="Enter astronaut name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <select value={planet} onChange={(e) => setPlanet(e.target.value)}>
        <option value="Mars">Mars</option>
        <option value="Venus">Venus</option>
        <option value="Jupiter">Jupiter</option>
        <option value="Saturn">Saturn</option>
      </select>

      <div>
        {name ? (
          <p >
            🧑‍🚀 Astronaut {name} is headed to {planet}!
          </p>
        ) : (
          <p>Please enter your name to begin your mission.</p>
        )}
      </div>
    </div>
  );
}
