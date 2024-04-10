'use client'

import { useRouter } from 'next/navigation'
import Image from "next/image";
import Header from "@/modules/header";
import Footer from "@/modules/footer";
import Button from "@/UI/button";
import styles from './styles.module.scss'
import React, {useState} from "react";
import Loader from "@/components/loader";

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
