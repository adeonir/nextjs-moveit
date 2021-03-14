import 'react-toastify/dist/ReactToastify.css'

import { ReactNode, createContext, useEffect, useState } from 'react'

import challengesList from 'assets/challenges.json'
import { LevelUpModal } from 'components/LevelUpModal'
import Cookie from 'js-cookie'
import { ToastContainer, toast } from 'react-toastify'

type ContextProps = {
  level: number
  currentExperience: number
  nextExperience: number
  challengesCompleted: number
  activeChallenge: Challenge
  levelUp: () => void
  closeModal: () => void
  newChallenge: () => void
  resetChallenge: () => void
  completeChallenge: () => void
}

type ProviderProps = {
  children: ReactNode
  level: number
  currentExperience: number
  challengesCompleted: number
}

type Challenge = {
  type: 'body' | 'eye'
  description: string
  amount: number
}

export const ChallengesContext = createContext({} as ContextProps)

export function ChallengesProvider({ children, ...rest }: ProviderProps) {
  const [level, setLevel] = useState(rest.level ?? 1)
  const [currentExperience, setCurrentExperience] = useState(
    rest.currentExperience ?? 0
  )
  const [challengesCompleted, setChallengesCompleted] = useState(
    rest.challengesCompleted ?? 0
  )

  const [activeChallenge, setActiveChallenge] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const nextExperience = Math.pow((level + 1) * 4, 2)

  useEffect(() => {
    Cookie.set('level', String(level))
    Cookie.set('currentExperience', String(currentExperience))
    Cookie.set('challengesCompleted', String(challengesCompleted))
  }, [level, currentExperience, challengesCompleted])

  function levelUp() {
    setLevel(level + 1)
    setIsModalOpen(true)
  }

  function closeModal() {
    setIsModalOpen(false)
  }

  function newChallenge() {
    const randomChallenge = Math.floor(Math.random() * challengesList.length)
    const challenge = challengesList[randomChallenge]

    setActiveChallenge(challenge)

    new Audio('/notification.mp3').play()

    toast.info(`Valendo ${challenge.amount}xp`, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    })
  }

  function resetChallenge() {
    setActiveChallenge(null)
  }

  function completeChallenge() {
    if (!activeChallenge) return

    const { amount } = activeChallenge

    let finalExperience = currentExperience + amount

    if (finalExperience >= nextExperience) {
      finalExperience = finalExperience - nextExperience
      levelUp()
    }

    setActiveChallenge(null)
    setCurrentExperience(finalExperience)
    setChallengesCompleted(challengesCompleted + 1)
  }

  return (
    <>
      <ToastContainer />
      <ChallengesContext.Provider
        value={{
          level,
          currentExperience,
          nextExperience,
          challengesCompleted,
          activeChallenge,
          levelUp,
          closeModal,
          newChallenge,
          resetChallenge,
          completeChallenge,
        }}
      >
        {isModalOpen && <LevelUpModal />}

        {children}
      </ChallengesContext.Provider>
    </>
  )
}
