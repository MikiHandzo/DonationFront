'use client'
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import {CompanyImages} from "@/types";
import styles from './styles.module.scss'


interface Props {
    items: CompanyImages[]
}
export default function EmblaCarousel({items}: Props) {
    const [emblaRef] = useEmblaCarousel({
        loop: true
    })
    const baseUrl = process.env.NEXT_PUBLIC_API_URL
    const protocol = process.env.NEXT_PUBLIC_PROTOCOL
    const images = items?.map((item:CompanyImages) =>
        <div key={item.id} className={styles.embla__slide}>
            <img src={`${protocol}://${baseUrl}${item.path}`} alt="imagePreview"/>
        </div>
    )

    return (
        <div className={styles.embla} ref={emblaRef}>
            <div className={styles.embla__container}>
                {images}
            </div>
        </div>
    )
}