import Link from 'next/link'
import { Button } from './Button'
import styles from './Header.module.css'

export default function Header() {
    return (
      <div className={styles.header}>
        <div className={styles.flexContainer}>
        <a href="/" className={styles.home}>SlinkousArt</a>
          <div className={styles.nav}>
            <Button goTo="/">Home</Button>
            <Button goTo="/">About</Button>
            <Button goTo="/works/sample">Works</Button>
            <Button goTo="https://www.redbubble.com/people/spencerlinkous/shop">Shop</Button>
          </div>
        </div>
        <hr className={styles.fullLine}/>
      </div>
    )
  }
  