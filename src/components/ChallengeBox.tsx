import { useContext } from 'react'

import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/ChallengeBox.module.scss'

export function ChallengeBox() {
  const { activeChallenge } = useContext(ChallengesContext)

  return (
    <div className={styles.container}>
      {activeChallenge ? (
        <div className={styles.isActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="Body Weight" />
            <strong>Novo Desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <button className={styles.buttonDanger} type="button">
              Falhei
            </button>
            <button className={styles.buttonSuccess} type="button">
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.notActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <img src="icons/level-up.svg" alt="Level up" />
          <p>Complete-os, ganhe experiência e avance de leve.</p>
        </div>
      )}
    </div>
  )
}
