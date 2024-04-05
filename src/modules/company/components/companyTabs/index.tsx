'use client'

import Image from "next/image";
import Tabs from "@/UI/tabs";
import {useState} from "react";
import {CompanyDocuments, CompanyReports} from "@/types";
import styles from "./styles.module.scss";

interface Props {
    documents: Array<CompanyDocuments>
    reports: Array<CompanyReports>

}
export default function CompanyTabs({documents, reports}: Props) {
    const protocol = process.env.NEXT_PUBLIC_PROTOCOL
    const apiUrl = process.env.NEXT_PUBLIC_API_URL
    const [tabs, setTabs] = useState<Array<{name:string, id: string | number, active: boolean}>>([
        {name: 'Донори', id: 'donors', active: true},
        {name: 'Звіти', id: 'reports', active: false},
        {name: 'Документи', id: 'documents', active: false},
    ])

    const companyReports = reports.map((item:CompanyReports) => {
        return (
            <div key={item.id} className={styles.item} onClick={() => {window.open(`${protocol}://${apiUrl}:/${item.path}`, '_blank')}}>
                <div className={styles.preview}>
                    <Image src='/icons/file.svg' alt='file' width={36} height={36}/>
                </div>

                <div className={styles.info}>
                    <p>{item.name}</p>

                    <small>{item.description}</small>
                </div>
            </div>
        )
    })

    const companyDocuments = documents.map((item:CompanyDocuments) => {
        return (
            <div key={item.id} className={styles.item} onClick={() => {window.open(`${protocol}://${apiUrl}:/${item.path}`, '_blank')}}>
                <div className={styles.preview}>
                    <Image src='/icons/file.svg' alt='file' width={36} height={36}/>
                </div>

                <div className={styles.info}>
                    <p>{item.name}</p>

                    <small>{item.description}</small>
                </div>
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
                    <div className={styles.documents}>
                        {companyReports}
                    </div>
                }

                {tabs.find(tab => tab.active)?.id === 'documents' &&
                    <div className={styles.documents}>
                        {companyDocuments}
                    </div>
                }
            </div>
        </>
    )
}