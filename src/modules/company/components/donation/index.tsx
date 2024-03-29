"use client"

import {useState} from "react";
import Button from "@/UI/button";
import Input from "@/UI/input";
import Radio from "@/UI/radio";
import Checkbox from "@/UI/checkbox";
import styles from './styles.module.scss'
export default function Donation() {
    const [totalPayment, setTotalPayment] = useState(0)
    const [payment, setPayment] = useState('')
    const [tax, setTax] = useState(true)

    return (
        <div className={styles.wrapper}>
            <main>
                <h2>Сума донату</h2>

                <Input
                    mask='99999999'
                    maskChar=''
                    value={payment}
                    onChange={(e) => {
                        setPayment(e.target.value)
                    }}
                    margin="0 0 16px 0"
                    units='₴'
                />

                <Radio
                    name='paymentSum'
                    options={[
                        {value: '500', text: '500 ₴'},
                        {value: '1000', text: '1000 ₴'},
                        {value: '10000', text: '10 000 ₴'},
                    ]}
                    onChange={(e)=> {
                        setPayment(e.target.value)
                    }}
                    checked={payment}
                    margin="0 0 16px 0"
                />

                <Checkbox
                    title='Допомогти ГО (+2%)'
                    name='tax'
                    checked={tax}
                    onChange ={(event) => setTax(event.target?.checked)}
                    margin="0 0 16px 0"
                />
            </main>

            <footer>
                <div className={styles.totalPaymentWrapper}>
                    <h3>Всього до оплати: </h3>

                    <span className={styles.totalPayment}>{tax ? (((+payment / 100) * 2) + +payment): +payment} ₴</span>
                </div>

                <Button>Задонатити</Button>
            </footer>
        </div>
    )
}