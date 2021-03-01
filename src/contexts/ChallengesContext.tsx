import { createContext, ReactNode, useState } from 'react'

type ContextProps = {
  level: number
  currentExperience: number
  challengesCompleted: number
  levelUp: () => void
  newChallenge: () => void
}

type ProviderProps = {
  children: ReactNode
}

export const ChallengesContext = createContext({} as ContextProps)

export function ChallengesProvider({ children }: ProviderProps) {
  const [level, setLevel] = useState(1)
  const [currentExperience, setCurrentExperience] = useState(0)
  const [challengesCompleted, setChallengesCompleted] = useState(0)

  function levelUp() {
    setLevel(level + 1)
  }

  function newChallenge() {
    console.log('New challenge')
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExperience,
        challengesCompleted,
        levelUp,
        newChallenge,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  )
}
