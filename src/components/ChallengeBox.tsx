import { useContext } from 'react'

import { ChallengesContext } from '../contexts/ChallengesContext'
import { CountdownContext } from '../contexts/CountdownContext'
import styles from '../styles/components/ChallengeBox.module.scss'

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(
    ChallengesContext,
  )
  const { resetCountdown } = useContext(CountdownContext)

  function handleChallengeSuccess() {
    completeChallenge()
    resetCountdown()
  }

  function handleChallengeFailed() {
    resetChallenge()
    resetCountdown()
  }

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
            <button
              type="button"
              className={styles.buttonDanger}
              onClick={handleChallengeFailed}
            >
              Falhei
            </button>
            <button
              type="button"
              className={styles.buttonSuccess}
              onClick={handleChallengeSuccess}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.notActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <img src="/icons/level-up.svg" alt="Level up" />
          <p>Complete-os, ganhe experiência e avance de leve.</p>
        </div>
      )}
    </div>
  )
}
