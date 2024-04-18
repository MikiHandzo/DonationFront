import Image from "next/image";
import {useEffect, useState} from "react";
import Pagination from "@/modules/company/components/pagination";
import {Donors} from "@/types";
import styles from "./styles.module.scss";

interface Props {
    list: Array<Donors>
}
export default function DonorsList({list}: Props) {
    const [hydrated, setHydrated] = useState(false);
    const [currentIndex, setCurrentIndex] = useState<Array<number>>([0, 10])
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
    const randomIndexName = () => Math.floor(Math.random() * namesList.length)
    const randomAvatar = () => Math.floor(Math.random() * 11)
    const itemInPage = 10

    const renderList = () => list.map((item, index) => {
        if(index >= currentIndex[0] && index < currentIndex[1]) {
            return (
                <div key={item.processed_at} className={styles.item}>
                    {hydrated && <div className={styles.preview}>
                        <Image src={`/icons/donationsUserList/${randomAvatar()}.svg`} alt='avatar' width={35} height={35}/>
                    </div>}

                    <div className={styles.info}>
                        {hydrated && <p>{namesList[randomIndexName()]}</p>}

                        <small>{item.processed_at}</small>
                    </div>

                    <div className={styles.sum}>
                        {item.amount} ₴
                    </div>
                </div>
            )
        }
    })

    return (
        <div className={styles.donors}>
            {list?.length ?
                renderList()
                :
                <div className={styles.noDonorsMsg}>
                    <h2>Стань першим донором!</h2>

                    <p>
                        Цей проєкт ще не встигли підтримати. Стань першим із донорів, хто допоможе зібрати необхідну
                        суму на проєкт!
                    </p>
                </div>
            }

            <Pagination
                list={list}
                itemsInPage={10}
                setCurrentIndex={setCurrentIndex}
            />
        </div>
    )
}