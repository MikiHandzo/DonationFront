'use client'

import Tabs from "@/UI/tabs";
import Image from "next/image";
import styles from "./styles.module.scss";
import {CompanyImages} from "@/types";
import {useState} from "react";

interface Props {
    images: Array<CompanyImages>
}
export default function CompanyTabs({images}: Props) {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL
    const protocol = process.env.NEXT_PUBLIC_PROTOCOL
    const [tabs, setTabs] = useState<Array<{name:string, id: string | number, active: boolean}>>([
        {name: 'Донори', id: 'donors', active: true},
        {name: 'Звіти', id: 'reports', active: false},
        {name: 'Документи', id: 'documents', active: false},
    ])

    const companyImages = images.map((item:CompanyImages) => {
        return (
            <div key={item.id} className={styles.item}>
                <img src={`${protocol}://${baseUrl}${item.path}`} alt="repotImg"/>
            </div>
        )
    })

    return (
        <>
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
                        {companyImages}
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
        </>
    )
}