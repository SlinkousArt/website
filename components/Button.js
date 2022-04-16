import styles from './Button.module.css'

export function Button({children, goTo, newTab}) {
  return (
    <a className={styles.button} href={goTo}>
        {children}
    </a>
  )
}