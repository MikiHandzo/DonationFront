import React from "react";
import LinkButton from "@/UI/LinkButton";
import Carousel from "@/UI/carousel";
import {truncateWithEllipsis} from "@/helper";
import {CompanyImages} from "@/types";
import styles from "./styles.module.scss";

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