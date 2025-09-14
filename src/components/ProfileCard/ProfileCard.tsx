 import styles from './ProfileCard.module.css'

 interface Props {
  avatar?: string;
  name: string;
  description: string;
}

function ProfileCard(props: Props) {
  const { avatar, name, description } = props;
  return (
    <div className={styles.container}>
      <h2 className={styles.name}>{name}</h2>
      <img src={avatar} alt={"User avatar" + " " + name} />
      <p>{description}</p>
    </div>
  );
}

export default ProfileCard;
