import styles from './stlyes.module.scss'
import Image from "next/image";

export default function Header() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.logo}>
                    <Image src="/images/logo.svg" alt="logo" width={36} height={36}/>
                </div>

                <div className={styles.menu}>
                    <Image src="/icons/burger.svg" alt="burger" width={36} height={36}/>
                </div>
            </div>
        </div>
    )
}