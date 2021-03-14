import { useContext } from 'react'

import { ChallengesContext } from 'contexts/ChallengesContext'
import styles from 'styles/components/ExperienceBar.module.scss'

export function ExperienceBar() {
  const { currentExperience, nextExperience } = useContext(ChallengesContext)

  const progress = (currentExperience * 100) / nextExperience

  return (
    <header className={styles.container}>
      <span>0 xp</span>
      <div>
        <div className={styles.progress} style={{ width: `${progress}%` }} />
        <span className={styles.current} style={{ left: `${progress}%` }}>
          {currentExperience} px
        </span>
      </div>
      <span>{nextExperience} xp</span>
    </header>
  )
}
