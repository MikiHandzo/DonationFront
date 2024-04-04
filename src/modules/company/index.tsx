import React from "react";
import {Api} from "@/api";
import DonationProgressBar from "./components/donationProgressBar";
import Donation from "./components/donation";
import CompanyTabs from "@/modules/company/components/companyTabs";
import Carousel from "@/UI/carousel";
import SocialShare from "@/modules/company/components/socialShare";
import styles from "./styles.module.scss";
interface Props {
    id: string
}

export default async function Company({id}: Props) {
    let companyInfo = await Api.companyInfo({id: +id})

    return (
        <div className={styles.content}>
            <div className={styles.mainContentWrapper}>
                <div className={styles.companyPreview}>
                   <Carousel items={companyInfo.images}/>
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

                <SocialShare />

                <CompanyTabs
                    images={companyInfo.images}
                />
            </div>
        </div>
    )
}