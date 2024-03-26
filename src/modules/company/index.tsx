import {Api} from "@/api";
import Image from "next/image";
import DonationProgressBar from "./components/donationProgressBar";
import Donation from "./components/donation";
import CompanyTabs from "@/modules/company/components/companyTabs";
import styles from "./styles.module.scss";
interface Props {
    id: string
}
export default async function Company({id}: Props) {
    let companyInfo = null
    companyInfo = await Api.companyInfo({id: +id})

    return (
        <div className={styles.content}>
            <div className={styles.mainContentWrapper}>
                <div className={styles.companyPreview}>
                    <img src="/images/imagePreview.jpg" alt="imagePreview"/>
                </div>

                <div className={styles.donation}>
                    <DonationProgressBar target={companyInfo.target} current={11220} />

                    <Donation />
                </div>
            </div>

            <div className={styles.descriptionWrapper}>
                <h1>Збір на дрони</h1>

                <div className={styles.description} dangerouslySetInnerHTML={{ __html: companyInfo.description || '' }}></div>

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

                <CompanyTabs
                    images={companyInfo.images}
                />
            </div>
        </div>
    )
}