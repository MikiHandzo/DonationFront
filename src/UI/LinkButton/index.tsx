import React from "react";
import styles from "./styles.module.scss";

interface Props {
    href: string
    children: React.ReactNode,
    width?: string,
    height?: string,
    margin?: string,
}
export default function LinkButton({
                                       href,
                                       width = '100%',
                                       height = '56px',
                                       children,
                                       margin = '0'
}: Props) {
    return (
        <a
            href={href}
            style={{width: `${width}`, minHeight: `${height}`, margin: `${margin}`}}
            className={styles.main}
        >
            {children}
        </a>
    )
}