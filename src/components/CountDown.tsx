import styles from '../styles/components/CountDown.module.scss'

export function CountDown() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.numbers}>
          <span>2</span>
          <span>5</span>
        </div>
        
        <span>:</span>

        <div className={styles.numbers}>
          <span>0</span>
          <span>0</span>
        </div>
      </div>

      <button type="button" className={styles.button}>
        Iniciar um ciclo
        <img src="icons/arrow-right.svg" alt="Arrow right"/>
      </button>
    </>
  )
}
