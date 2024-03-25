'use client'
import DonationProgressBar from "./components/donationProgressBar";
import Donation from "./components/donation";
import styles from "./styles.module.scss";
import Image from "next/image";
import Tabs from "@/UI/tabs";
import {useState} from "react";
import {useQuery} from "react-query";
import {Api} from "@/api";

export default function Project() {
    const [tabs, setTabs] = useState<Array<{name:string, id: string | number, active: boolean}>>([
        {name: 'Донори', id: 'donors', active: true},
        {name: 'Звіти', id: 'reports', active: false},
        {name: 'Документи', id: 'documents', active: false},
    ])

    useQuery(['test'], () => Api.test({test: 'test'}), {
        onSuccess: ({data}) => {
           console.log(312)
        },
    })

    return (
        <div className={styles.content}>
            <div className={styles.mainContentWrapper}>
                <div className={styles.projectPreview}>
                    <img src="/images/imagePreview.jpg" alt="imagePreview"/>
                </div>

                <div className={styles.donation}>
                    <DonationProgressBar target={100000} current={11220} />

                    <Donation />
                </div>
            </div>

            <div className={styles.descriptionWrapper}>
                <h1>Збір на дрони</h1>

                <p className={styles.description}>
                    Ми збираємо 10 мільйонів гривень на розвідні та бойові дрони для 23 ОМБр, яка потребує рекордної
                    кількості дронів та їх комплектуючих (комплексів) для аеророзвідки.
                </p>

                <p className={styles.description}>
                    У червні, підрозділ аеророзвідки
                    спільно з 110 бригадою ТрО звільнив населений пункт Новодарівка на Запоріжжі. А в липні група
                    аеророзвідки також виявила та допомогла знищити позиції окупантів у Приютному Запорізької області.
                </p>

                <h2>Поділитися збором</h2>

                <div className={styles.share}>
                    <a href='#' className={styles.item}>
                        <Image src='/icons/gmail.svg' alt='gmail' width={30} height={30}/>
                    </a>

                    <a  href='#' className={styles.item}>
                        <Image src='/icons/facebook.svg' alt='facebook' width={30} height={30}/>
                    </a>

                    <a href='#' className={styles.item}>
                        <Image src='/icons/telegram.svg' alt='telegram' width={30} height={30}/>
                    </a>
                </div>

                <Tabs
                    tabs={tabs}
                    setTabs={setTabs}
                    margin='0 0 20px 0'
                />

                <div className={styles.tabContent}>
                    {tabs.find(tab => tab.active)?.id === 'donors' &&
                        <div className={styles.donors}>
                            <div className={styles.item}>
                                <div className={styles.preview}>
                                    <Image src='/icons/heart.svg' alt='heart' width={36} height={36}/>
                                </div>

                                <div className={styles.info}>
                                    <p>Андрій Котик</p>

                                    <small>21.02.2024 12:14</small>
                                </div>

                                <div className={styles.sum}>
                                    1 000 ₴
                                </div>
                            </div>

                            <div className={styles.item}>
                                <div className={styles.preview}>
                                    <Image src='/icons/heart.svg' alt='heart' width={36} height={36}/>
                                </div>

                                <div className={styles.info}>
                                    <p>Андрій Котик</p>

                                    <small>21.02.2024 12:14</small>
                                </div>

                                <div className={styles.sum}>
                                    1 000 ₴
                                </div>
                            </div>

                            <div className={styles.item}>
                                <div className={styles.preview}>
                                    <Image src='/icons/heart.svg' alt='heart' width={36} height={36}/>
                                </div>

                                <div className={styles.info}>
                                    <p>Андрій Котик</p>

                                    <small>21.02.2024 12:14</small>
                                </div>

                                <div className={styles.sum}>
                                    1 000 ₴
                                </div>
                            </div>

                            <div className={styles.item}>
                                <div className={styles.preview}>
                                    <Image src='/icons/heart.svg' alt='heart' width={36} height={36}/>
                                </div>

                                <div className={styles.info}>
                                    <p>Андрій Котик</p>

                                    <small>21.02.2024 12:14</small>
                                </div>

                                <div className={styles.sum}>
                                    1 000 ₴
                                </div>
                            </div>
                        </div>
                    }

                    {tabs.find(tab => tab.active)?.id === 'reports' &&
                        <div className={styles.reports}>
                            <div className={styles.item}>
                                <img src='/images/repotImg.png' alt='repotImg'/>
                            </div>

                            <div className={styles.item}>
                                <img src='/images/repotImg.png' alt='repotImg'/>
                            </div>

                            <div className={styles.item}>
                                <img src='/images/repotImg.png' alt='repotImg'/>
                            </div>
                        </div>
                    }

                    {tabs.find(tab => tab.active)?.id === 'documents' &&
                        <div className={styles.documents}>
                            <div className={styles.item}>
                                <div className={styles.preview}>
                                    <Image src='/icons/file.svg' alt='file' width={36} height={36}/>
                                </div>

                                <div className={styles.info}>
                                    <p>Рахунок на закупівлю.pdf</p>

                                    <small>21.02.2024 12:14</small>
                                </div>
                            </div>

                            <div className={styles.item}>
                                <div className={styles.preview}>
                                    <Image src='/icons/file.svg' alt='file' width={36} height={36}/>
                                </div>

                                <div className={styles.info}>
                                    <p>Рахунок на закупівлю.pdf</p>

                                    <small>21.02.2024 12:14</small>
                                </div>
                            </div>

                            <div className={styles.item}>
                                <div className={styles.preview}>
                                    <Image src='/icons/file.svg' alt='file' width={36} height={36}/>
                                </div>

                                <div className={styles.info}>
                                    <p>Рахунок на закупівлю.pdf</p>

                                    <small>21.02.2024 12:14</small>
                                </div>
                            </div>

                            <div className={styles.item}>
                                <div className={styles.preview}>
                                    <Image src='/icons/file.svg' alt='file' width={36} height={36}/>
                                </div>

                                <div className={styles.info}>
                                    <p>Рахунок на закупівлю.pdf</p>

                                    <small>21.02.2024 12:14</small>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}