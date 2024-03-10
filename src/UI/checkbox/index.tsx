import React from "react";
import styles from './styles.module.scss'

interface Props {
    title: string
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    checked?: boolean
    name: string
    margin?: string,
}

export default function MainCheckbox({title, onChange, checked, name, margin}: Props) {
    return (
        <div className={styles.wrapper} style={{margin: `${margin}`}}>
            <input
                onChange={onChange}
                id={name}
                type="checkbox"
                checked={checked}
            />
            <label htmlFor={name}>{title}</label>
        </div>
    )
}