import Layout from "../components/Layout"
import styles from "./Info.module.css"
import { Button } from "../components/Button"
export default function Info() {
  return (
    <div>
        <Layout>
            <div className={styles.container}>
                <div className={styles.left}>
                    <img src="https://i.imgur.com/8IKxxfh.png"/>
                </div>
                <div className={styles.right}>
                    <div className={styles.title}>
                        <h1>Title</h1>
                    </div>
                    <hr className='halfCenterLine'/>
                    <div className={styles.description}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className={styles.buttonBar}>
                        <Button goTo="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Never Gonna Give You Up</Button>
                        <Button goTo="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Never Gonna Let You Down</Button>
                    </div>
                </div>
            </div>
        </Layout>
    </div>
  )
}