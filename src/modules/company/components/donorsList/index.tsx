import Image from "next/image";
import {useEffect, useState} from "react";
import styles from "./styles.module.scss";

interface Props {
    list: { sum: number, time: string, id: string}[]
}
export default function DonorsList({list}: Props) {
    const [hydrated, setHydrated] = useState(false);
    useEffect(() => {
        setHydrated(true);
    },[])
    const namesList = [
        'Помічник котиків',
        'Благодійник',
        'Донатер',
        'Волонтер',
        'Наближатор перемоги',
        'Небайдужий патріот',
        'Котик',
        'Надійний тил',
        'Свідомий',
        'Бавовняр',
    ]
    const colorList = [
        '#ff4646',
        '#ffbc46',
        '#46ff4d',
        '#46fff8',
        '#4670ff',
        '#8346ff',
        '#f746ff',
        '#ff4685',
    ]
    const randomIndexName = () => Math.floor(Math.random() * namesList.length)
    const randomIndexColor = () => Math.floor(Math.random() * colorList.length)
    const renderList = list.map((item) => {
        return (
            <div key={item.id} className={styles.item}>
                {hydrated && <div className={styles.preview} style={{background: colorList[randomIndexColor()]}}>
                    <Image src='/icons/heart.svg' alt='heart' width={36} height={36}/>
                </div>}

                <div className={styles.info}>
                    {hydrated && <p>{namesList[randomIndexName()]}</p>}

                    <small>21.02.2024 12:14</small>
                </div>

                <div className={styles.sum}>
                    1 000 ₴
                </div>
            </div>
        )
    })

    return (
        <div className={styles.donors}>
            {renderList}
        </div>
    )
}