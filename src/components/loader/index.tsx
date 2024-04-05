import styles from './styles.module.scss'
import Image from "next/image";

export default function Loader() {
    return (
        <div className={styles.loaderWrapper}>
            <Image
                src='/loaderSpiner.svg'
                alt="loader"
                width={200}
                height={200}
                priority
            />
        </div>
    )
}