import styles from '../styles/components/ExperienceBar.module.scss'

export function ExperienceBar() {
  return (
    <header className={styles.container}>
      <span>0 xp</span>
      <div>
        <div className={styles.progress} style={{ width: '60%' }} />
        <span className={styles.current} style={{ left: '60%' }}>400px</span>
      </div>
      <span>600 xp</span>
    </header>
  )
}
