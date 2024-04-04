import {truncateWithEllipsis} from "@/helper";
import LinkButton from "@/UI/LinkButton";
import styles from "./styles.module.scss";
import Carousel from "@/UI/carousel";
import React from "react";
import {CompanyImages} from "@/types";

interface Props {
    title: string
    description: string
    images: CompanyImages[]
    id: number
}

export default function CompanyItem({title, description, images, id}: Props) {
    return (
        <div className={styles.companyItem}>
            <div className={styles.companyPreview}>
                <Carousel items={images}/>
            </div>

            <div className={styles.description}>
                <div>
                    <h2>{title}</h2>

                    <p dangerouslySetInnerHTML={{ __html: truncateWithEllipsis(description) || '' }}></p>
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