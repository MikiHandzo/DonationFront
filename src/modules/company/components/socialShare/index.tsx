'use client'
import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import Link from "next/link";
import { usePathname } from 'next/navigation'

export default function SocialShare() {
    const currentUrl = usePathname()
    const domain = process.env.NEXT_PUBLIC_DOMAIN

    return (
        <div className={styles.share}>
            <Link href={{
                pathname: `https://www.facebook.com/sharer/sharer.php?u=${domain}${currentUrl}`
            }} className={styles.item} target='_blank'>
                <Image src='/icons/facebook.svg' alt='facebook' width={30} height={30}/>
            </Link>

            <Link href={`https://t.me/share/url?url=${domain}${currentUrl}`} className={styles.item} target='_blank'>
                <Image src='/icons/telegram.svg' alt='telegram' width={30} height={30}/>
            </Link>
        </div>
    )
}