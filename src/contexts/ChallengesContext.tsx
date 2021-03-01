import { createContext, ReactNode, useState } from 'react'

import challengesList from '../../challenges.json'

type ContextProps = {
  level: number
  currentExperience: number
  challengesCompleted: number
  activeChallenge: Challenge
  levelUp: () => void
  newChallenge: () => void
}

type ProviderProps = {
  children: ReactNode
}

type Challenge = {
  type: 'body' | 'eye'
  description: string
  amount: number
}

export const ChallengesContext = createContext({} as ContextProps)

export function ChallengesProvider({ children }: ProviderProps) {
  const [level, setLevel] = useState(1)
  const [currentExperience, setCurrentExperience] = useState(0)
  const [challengesCompleted, setChallengesCompleted] = useState(0)

  const [activeChallenge, setActiveChallenge] = useState(null)

  function levelUp() {
    setLevel(level + 1)
  }

  function newChallenge() {
    const randomChallenge = Math.floor(Math.random() * challengesList.length)
    const challenge = challengesList[randomChallenge]
    setActiveChallenge(challenge)
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExperience,
        challengesCompleted,
        activeChallenge,
        levelUp,
        newChallenge,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  )
}
