'use client'
import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import {CompanyImages} from "@/types";
import styles from './styles.module.scss'
import Image from "next/image";


interface Props {
    items: CompanyImages[]
}
export default function EmblaCarousel({items}: Props) {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true
    })
    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi)
    const baseUrl = process.env.NEXT_PUBLIC_API_URL
    const protocol = process.env.NEXT_PUBLIC_PROTOCOL
    const images = items?.map((item:CompanyImages) =>
        <div key={item.id} className={styles.embla__slide}>
            <img src={`${protocol}://${baseUrl}${item.path}`} alt="imagePreview"/>
        </div>
    )

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <>

            <div className={styles.embla} ref={emblaRef}>
                <div className={styles.embla__container}>
                    {images}
                </div>
                <div className={styles.navButtons}>
                    <div className={styles.buttonNext} onClick={scrollPrev}>
                        <Image src={'/icons/chevronLeft.svg'} alt='chevron' width={36} height={36} />
                    </div>
                    <div className={styles.buttonPrev} onClick={scrollNext}>
                        <Image src={'/icons/chevronRight.svg'} alt='chevron' width={36} height={36} />
                    </div>
                </div>

                <div  className={styles.navDots}>
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                            key={index}
                            onClick={() => onDotButtonClick(index)}
                            className={[styles.dot, `${index === selectedIndex ?  styles.dotSelected : ''}`].join(' ')}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}