import { useContext, useEffect, useRef, useState } from 'react'

import { ReactComponent as CloseIcon } from '../assets/images/close.svg'
import { CountdownContext } from '../contexts/CountdownContext'
import styles from '../styles/components/Countdown.module.scss'

export function Countdown() {
  const {
    minutes,
    seconds,
    time,
    initialTime,
    hasFinish,
    isActive,
    startCountdown,
    resetCountdown,
  } = useContext(CountdownContext)

  const [minuteTen, minuteUnit] = String(minutes).padStart(2, '0').split('')
  const [secondTen, secondUnit] = String(seconds).padStart(2, '0').split('')

  const progressRef = useRef(null)
  const [progressWidth, setProgressWidth] = useState(0)
  const [progressBar, setProgressBar] = useState(0)

  useEffect(() => {
    if (isActive && time >= 0) {
      setProgressBar((-(time - initialTime) * progressWidth) / initialTime)
    }
  }, [progressWidth, isActive, time, initialTime])

  useEffect(() => {
    if (progressRef.current) {
      setProgressWidth(
        Number(window.getComputedStyle(progressRef.current).width.slice(0, -2))
      )
    }
  }, [isActive])

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

      {hasFinish ? (
        <button className={styles.button} disabled>
          Ciclo encerrado
          <img src="/icons/check.svg" alt="Arrow right" />
          <span className={styles.progress} />
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type="button"
              className={`${styles.button} ${styles.buttonActive}`}
              onClick={resetCountdown}
              ref={progressRef}
            >
              Abandonar o ciclo
              <CloseIcon />
              <span
                className={styles.progress}
                style={{ width: `${progressBar}px` }}
              />
            </button>
          ) : (
            <button
              type="button"
              className={styles.button}
              onClick={startCountdown}
            >
              Iniciar um ciclo
              <img src="/icons/arrow-right.svg" alt="Arrow right" />
            </button>
          )}
        </>
      )}
    </>
  )
}
