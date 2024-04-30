import React from "react";
import {Api} from "@/api";
import LinkButton from "@/UI/LinkButton";
import Carousel from "@/UI/carousel";
import DonationProgressBar from "@/modules/company/components/donationProgressBar";
import {truncateWithEllipsis} from "@/helper";
import {CompanyImages} from "@/types";
import styles from "./styles.module.scss";

interface Props {
    title: string
    description: string
    images: CompanyImages[]
    id: number
}

export default async function CompanyItem({title, description, images, id}: Props) {
    let companyInfo = await Api.companyInfo({id: +id})

    return (
        <div className={styles.companyItem}>
            <div className={styles.companyPreview}>
                <Carousel items={images}/>
            </div>

            <div className={styles.description}>
                <div>
                    <h2>{title}</h2>

                    <DonationProgressBar target={companyInfo.target || 0} current={companyInfo.collected_amount || 0} />

                    <section dangerouslySetInnerHTML={{ __html: truncateWithEllipsis(description) || '' }}></section>
                </div>

                <LinkButton
                    href={`/company/${id}`}
                >
                    Підтримати
                </LinkButton>
            </div>
        </div>
    )
}