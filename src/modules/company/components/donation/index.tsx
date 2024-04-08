"use client"

import {Api} from "@/api";
import {useState} from "react";
import {useMutation} from "react-query";
import Button from "@/UI/button";
import Input from "@/UI/input";
import Radio from "@/UI/radio";
import Checkbox from "@/UI/checkbox";
import Loader from "@/components/loader";
import Toast from "@/components/toast";
import styles from './styles.module.scss'

interface Props {
    id: string
}

export default function Donation({id}: Props) {
    const domain = process.env.NEXT_PUBLIC_DOMAIN
    const [payment, setPayment] = useState('')
    const [tax, setTax] = useState(true)
    const [loader, setLoader] = useState(false)
    const [toastMsg, setToastMsg] = useState({
            state: false,
            msg: 'Виникла помилка',
            duration: 5,
        })
    const supportPay = ((+payment / 100) * 2)

    const donationCreate = useMutation('donation create', () =>
        Api.donationCreate({id: +id, contribution:+payment, support:supportPay, returnUrl: `${domain}/payment-success?id=${id}`}), {
            onSuccess: ({data}) => {
                donationCharge.mutate(data.id)
                setLoader(true)
            },
            onError:() => {
                setLoader(false)
                setToastMsg({
                    state: true,
                    msg: 'Помилка запиту',
                    duration: 5
                })
            }
        }
    )

    const donationCharge = useMutation('donation charge',  (paymentId:string) =>
        Api.donationCharge({id: paymentId}), {
            onSuccess: ({data}) => {
                window.open(data.forward_url || '', '_blank')
                setLoader(false)
            },
            onError:() => {
                setLoader(false)
                setToastMsg({
                    state: true,
                    msg: 'Помилка запиту',
                    duration: 5
                })
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

                    <span className={styles.totalPayment}>{tax ? (supportPay + +payment): +payment} ₴</span>
                </div>

                <Button
                    disabled={!payment}
                    onClick={() => {
                        donationCreate.mutate()
                    }}
                >
                    Задонатити
                </Button>
            </footer>

            {loader && <Loader />}

            <Toast
                duration={toastMsg.duration}
                toastMsg={toastMsg.msg}
                state={toastMsg.state}
                setState={setToastMsg}
            />
        </div>
    )
}
