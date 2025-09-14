import styles from "./DogCard.module.css";
import myCat from './kitze.png'

function DogCard() {
  return (
    <div className={styles.card}>
      <p className={styles.text}>I love my cat, Kitze 🐾</p>
      <img
        className={styles.image}
        src={myCat}
        alt="My cat Kitze"
      />
    </div>
  );
}

export default DogCard;