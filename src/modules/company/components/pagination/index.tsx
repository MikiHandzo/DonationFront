import styles from "./styles.module.scss";
import Image from "next/image";
import React, {Dispatch, SetStateAction, useEffect, useState} from "react";

interface Props {
    list: { sum: number, time: string, id: string}[]
    itemsInPage: number;
    setCurrentIndex: Dispatch<SetStateAction<number[]>>;
}
export default function Pagination({list, itemsInPage, setCurrentIndex}: Props) {
    const [page, setPage] = useState(1)
    const lastPageIndex = Math.round(list?.length / itemsInPage)

    useEffect(() => {
        setCurrentIndex([(page * itemsInPage) - itemsInPage, page * itemsInPage])
    }, [page])

    return (
        <>
            {lastPageIndex > 1 && <ul className={styles.pagination}>
               <li onClick={() => setPage(1)}
                   className={[styles.first, styles.item, `${page <= 1 ? styles.disabled : ''}`].join(' ')}
               >
                   <Image src={'/icons/chevronLeftBlue.svg'} alt='chevron' width={13} height={13} />
                   <Image src={'/icons/chevronLeftBlue.svg'} alt='chevron' width={13} height={13} />
               </li>

               <li onClick={() => setPage(page - 1)}
                   className={[styles.prev, styles.item, `${page <= 1 ? styles.disabled : ''}`].join(' ')}
               >
                   <Image src={'/icons/chevronLeftBlue.svg'} alt='chevron' width={13} height={13} />
               </li>

               <li className={[styles.page, styles.item].join(' ')}>
                   {page}
               </li>

                <li onClick={() => setPage(page + 1)}
                   className={[styles.next, styles.item, `${page === lastPageIndex ? styles.disabled : ''}`].join(' ')}
               >
                   <Image src={'/icons/chevronRightBlue.svg'} alt='chevron' width={13} height={13} />
               </li>

                <li onClick={() => setPage(lastPageIndex)}
                   className={[styles.last, styles.item, `${page === lastPageIndex ? styles.disabled : ''}`].join(' ')}
               >
                   <Image src={'/icons/chevronRightBlue.svg'} alt='chevron' width={13} height={13} />
                   <Image src={'/icons/chevronRightBlue.svg'} alt='chevron' width={13} height={13} />
               </li>
            </ul>}
        </>
    )
}