import styles from '../styles/components/ChallengeBox.module.scss'

export function ChallengeBox() {
  const isActive = true

  return (
    <div className={styles.container}>
      {isActive ? (
        <div className={styles.isActive}>
          <header>Ganhe 400 xp</header>
          <main>
            <img src="icons/body.svg" alt="Body Weight" />
            <strong>Exercite-se</strong>
            <p>
              É agora Diegão, bora lá meu parça. Caminhe por 3 minutos e estique
              suas pernas pra você ficar saudável.
            </p>
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
          <p>
            <img src="icons/level-up.svg" alt="Level up" />
            Complete-os e ganhe experiência e avance de leve.
          </p>
        </div>
      )}
    </div>
  )
}
