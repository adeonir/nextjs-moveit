import styles from '../styles/components/Profile.module.scss'

export function Profile() {
  return (
    <div className={styles.container}>
      <img className={styles.avatar} src="https://github.com/adeonir.png" alt="Adeonir Kohl"/>

      <div className={styles.info}>
        <strong>Adeonir Kohl</strong>
        <p>
          <img src="icons/level.svg" alt="Level icon"/>
          <span>Level 1</span>
        </p>
      </div>
    </div>
  )
}

export default Profile
