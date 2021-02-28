import Head from 'next/head'

import { ChallengeBox } from '../components/ChallengeBox'
import { CompletedChallenges } from '../components/CompletedChallenges'
import { CountDown } from '../components/CountDown'
import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'
import styles from '../styles/pages/Home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Move.It!</title>
      </Head>
      <div className={styles.container}>
        <ExperienceBar />

        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <CountDown />
          </div>

          <div>
            <ChallengeBox />
          </div>
        </section>
      </div>
    </>
  )
}
