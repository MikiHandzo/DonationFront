import React from "react";
import {MouseEventHandler} from "react";
import styles from './styles.module.scss'

type Props = {
    width?: string,
    height?: string,
    margin?: string,
    children: React.ReactNode,
    disabled?: boolean,
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined,
    onMouseDown?: MouseEventHandler<HTMLButtonElement> | undefined,
    onMouseUp?: MouseEventHandler<HTMLButtonElement> | undefined,
}

export default function Button({
                                       children,
                                       disabled,
                                       onClick,
                                       onMouseDown,
                                       onMouseUp,
                                       width = '100%',
                                       height = '56px',
                                       margin = '0'
                                   }: Props) {
    return (
        <button
            style={{width: `${width}`, minHeight: `${height}`, margin: `${margin}`}}
            disabled={disabled}
            className={styles.main}
            onClick={onClick}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
        >
            {children}
        </button>
    )
}