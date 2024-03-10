'use client'

import {truncateWithEllipsis} from "@/helper";
import Button from "@/UI/button";
import styles from "./styles.module.scss";

export default function ProjectItem() {
    return (
        <div className={styles.projectItem}>
            <div className={styles.projectPreview}>
                <img src="/images/imagePreview.jpg" alt="imagePreview"/>
            </div>

            <div className={styles.description}>
                <div>
                    <h2>Збір на дрони</h2>

                    <p>
                        {truncateWithEllipsis(
                            'Ми збираємо 10 мільйонів гривень на розвідні та бойові дрони для 23 ОМБр, яка потребує рекордної кількості дронів та їх комплектуючих (комплексів) для аеророзвідки. У червні, підрозділ аеророзвідки спільно з 110 бригадою ТрО звільнив населений пункт Новодарівка на Запоріжжі. А в липні група аеророзвідки також виявила та допомогла знищити позиції окупантів у Приютному Запорізької області.'
                        )}
                    </p>
                </div>

                <Button
                    onClick={() => window.location.href = `/project/test`}
                >
                    Підтримати
                </Button>
            </div>
        </div>
    )
}