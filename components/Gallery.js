import styles from './Gallery.module.css'

export default function Gallery({children}) {
    return (
        <div className={styles.gallery}>
            {children}
        </div>
    )
  }