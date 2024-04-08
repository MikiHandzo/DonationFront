'use client';
import Image from "next/image";
import { useRouter } from 'next/navigation';
import styles from './stlyes.module.scss'

export default function Header() {
    const { push } = useRouter();

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.logo} onClick={() => push('/')}>
                    <Image src="/images/logo.png" alt="logo" width={181} height={36}/>
                </div>

                {/*<div className={styles.menu}>*/}
                {/*    <Image src="/icons/burger.svg" alt="burger" width={36} height={36}/>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}