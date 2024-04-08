import styles from "./styles.module.scss"

interface Props {
    target: number
    current: number
}
export default function DonationProgressBar({target, current}: Props) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.indexes}>
                <div className={styles.item}>
                    <h6>Зібрано:&nbsp;</h6>

                    <strong>
                        {current.toLocaleString('uk-UA')} ₴
                    </strong>
                </div>

                <div className={styles.item}>
                    <h6>Ціль:&nbsp;</h6>

                    <strong>
                        {target?.toLocaleString('uk-UA')} ₴
                    </strong>
                </div>
            </div>

            <div className={styles.progressBar}>
                <span className={styles.progress} style={{width: `${current / (target / 100)}%`}}></span>
            </div>
        </div>
    )
}