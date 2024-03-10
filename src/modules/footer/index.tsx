import styles from './styles.module.scss'
import Image from "next/image";

export default function Footer() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div>
                    © Copyright
                </div>

                <div className={styles.social}>
                    <a href='#' className={styles.item}>
                        <Image src='/icons/gmail.svg' alt='gmail' width={30} height={30}/>
                    </a>

                    <a  href='#' className={styles.item}>
                        <Image src='/icons/facebook.svg' alt='facebook' width={30} height={30}/>
                    </a>

                    <a href='#' className={styles.item}>
                        <Image src='/icons/telegram.svg' alt='telegram' width={30} height={30}/>
                    </a>
                </div>
            </div>
        </div>
    )
}