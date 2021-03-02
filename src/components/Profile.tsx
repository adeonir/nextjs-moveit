import { useContext } from 'react'

import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.scss'

export function Profile() {
  const { level } = useContext(ChallengesContext)

  return (
    <div className={styles.container}>
      <img
        className={styles.avatar}
        src="https://github.com/adeonir.png"
        alt="Adeonir Kohl"
      />

      <div className={styles.info}>
        <strong>Adeonir Kohl</strong>
        <p>
          <img src="/icons/level.svg" alt="Level icon" />
          <span>Level {level}</span>
        </p>
      </div>
    </div>
  )
}
