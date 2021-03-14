import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

import { ChallengesContext } from './ChallengesContext'

type CountdownProps = {
  minutes: number
  seconds: number
  time: number
  initialTime: number
  hasFinish: boolean
  isActive: boolean
  startCountdown: () => void
  resetCountdown: () => void
}

type ProviderProps = {
  children: ReactNode
}

let countdownTimeout: NodeJS.Timeout

export const CountdownContext = createContext({} as CountdownProps)

export function CountdownProvider({ children }: ProviderProps) {
  const { newChallenge } = useContext(ChallengesContext)

  const initialTime = 5
  const [time, setTime] = useState(initialTime)
  const [isActive, setIsActive] = useState(false)
  const [hasFinish, setHasFinish] = useState(false)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  const startCountdown = () => {
    setIsActive(true)
  }

  const resetCountdown = () => {
    clearTimeout(countdownTimeout)
    setIsActive(false)
    setHasFinish(false)
    setTime(initialTime)
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if (isActive && time === 0) {
      setHasFinish(true)
      setIsActive(false)
      newChallenge()
    }
  }, [isActive, time, newChallenge])

  return (
    <CountdownContext.Provider
      value={{
        minutes,
        seconds,
        time,
        initialTime,
        hasFinish,
        isActive,
        startCountdown,
        resetCountdown,
      }}
    >
      {children}
    </CountdownContext.Provider>
  )
}
