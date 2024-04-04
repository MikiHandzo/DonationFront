"use client"

import {useState} from "react";
import Button from "@/UI/button";
import Input from "@/UI/input";
import Radio from "@/UI/radio";
import Checkbox from "@/UI/checkbox";
import styles from './styles.module.scss'
import {Api} from "@/api";
import {useMutation, useQuery} from "react-query";
export default function Donation() {
    const [totalPayment, setTotalPayment] = useState(0)
    const [payment, setPayment] = useState('')
    const [tax, setTax] = useState(true)
    const [paymentId, setPaymentId] = useState('')

    const donationCreate = useMutation('donation create', () =>
        Api.donationCreate({id: 2, contribution:+payment, support:2}), {
            onSuccess: ({data}) => {
                setPaymentId(data.id)
                setTimeout(() => donationCharge.mutate())
            },
            onError:(error:any) => {
            }
        }
    )

    const donationCharge = useMutation('donation charge',  () =>
        Api.donationCharge({id: paymentId}), {
            onSuccess: ({data}) => {
                window.open(data.forward_url || '')
            },
            onError:(error:any) => {
            },
        }
    )

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

                <Button onClick={() => {
                    donationCreate.mutate()
                }}>Задонатити</Button>
            </footer>
        </div>
    )
}