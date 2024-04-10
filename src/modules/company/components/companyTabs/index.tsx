'use client'

import Image from "next/image";
import Tabs from "@/UI/tabs";
import {useState} from "react";
import {CompanyDocuments, CompanyReports} from "@/types";
import styles from "./styles.module.scss";
import DonorsList from "@/modules/company/components/donorsList";

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

    const companyReports = reports?.map((item:CompanyReports) => {
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

    const companyDocuments = documents?.map((item:CompanyDocuments) => {
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
                    <DonorsList
                        list={
                            [
                                {
                                    sum: 1001,
                                    time: '21.02.2024 12:00',
                                    id: '1',
                                },
                                {
                                    sum: 1002,
                                    time: '21.02.2024 12:01',
                                    id: '2',
                                },
                                {
                                    sum: 1005,
                                    time: '21.02.2024 12:02',
                                    id: '3',
                                },
                                {
                                    sum: 1005,
                                    time: '21.02.2024 12:03',
                                    id: '4',
                                },
                                {
                                    sum: 1005,
                                    time: '21.02.2024 12:04',
                                    id: '5',
                                },
                                {
                                    sum: 1005,
                                    time: '21.02.2024 12:05',
                                    id: '6',
                                },
                                {
                                    sum: 1005,
                                    time: '21.02.2024 12:06',
                                    id: '7',
                                },
                                {
                                    sum: 1005,
                                    time: '21.02.2024 12:07',
                                    id: '8',
                                },
                                {
                                    sum: 1005,
                                    time: '21.02.2024 12:08',
                                    id: '9',
                                },
                                {
                                    sum: 1005,
                                    time: '21.02.2024 12:09',
                                    id: '10',
                                },
                                {
                                    sum: 1005,
                                    time: '21.02.2024 12:10',
                                    id: '11',
                                },
                                {
                                    sum: 1005,
                                    time: '21.02.2024 12:11',
                                    id: '12',
                                },
                                {
                                    sum: 1005,
                                    time: '21.02.2024 12:12',
                                    id: '13',
                                },
                                {
                                    sum: 5125,
                                    time: '21.02.2024 12:13',
                                    id: '14',
                                },
                                {
                                    sum: 515,
                                    time: '21.02.2024 12:14',
                                    id: '15',
                                },
                                {
                                    sum: 312321,
                                    time: '21.02.2024 12:15',
                                    id: '16',
                                },
                                {
                                    sum: 321,
                                    time: '21.02.2024 12:16',
                                    id: '17',
                                },
                            ]
                        }
                    />
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