'use client'

import React, {useState} from "react";
import { useRouter } from 'next/navigation'
import Header from "@/modules/header";
import Footer from "@/modules/footer";
import Button from "@/UI/button";
import Loader from "@/components/loader";
import Image from "next/image";
import styles from './styles.module.scss'

export default function PaymentSuccessful() {
    const router = useRouter()
    const [loader, setLoader] = useState(false)

    return (
        <div className={styles.wrapper}>
            <Header />

            <div className={styles.content}>
                <Image src='/images/paymentSuccess.svg' alt='paymentSuccess' width={146} height={146}/>

                <h1>Оплата успішна</h1>

                <p>
                    Дякуємо за ваш вклад у
                    <br/>
                    забезпечення війська
                </p>

                <Button
                    onClick={() => {
                        setLoader(true)
                        router.push('/')
                    }}
                >
                    Повернутися на головну
                </Button>
            </div>

            <Footer />

            {loader && <Loader />}
        </div>
    )
}
