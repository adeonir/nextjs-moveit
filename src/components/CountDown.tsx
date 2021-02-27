import { useState, useEffect } from 'react'
import styles from '../styles/components/CountDown.module.scss'

export function CountDown() {
  const [time, setTime] = useState(25 * 60)
  const [active, setActive] = useState(false)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  const [minuteTen, minuteUnit] = String(minutes).padStart(2, '0').split('')
  const [secondTen, secondUnit] = String(seconds).padStart(2, '0').split('')

  const startCountdown = () => {
    setActive(true)
  }

  useEffect(() => {
    if (active && time > 0) {
      setTimeout(() => {
        setTime(time -1)
      }, 1000)
    }
  }, [active, time])

  return (
    <>
      <div className={styles.container}>
        <div className={styles.numbers}>
          <span>{minuteTen}</span>
          <span>{minuteUnit}</span>
        </div>
        
        <span>:</span>

        <div className={styles.numbers}>
          <span>{secondTen}</span>
          <span>{secondUnit}</span>
        </div>
      </div>

      <button
        type="button"
        className={styles.button}
        onClick={startCountdown}
        disabled={active}
      >
        Iniciar um ciclo
        <img src="icons/arrow-right.svg" alt="Arrow right"/>
      </button>
    </>
  )
}
