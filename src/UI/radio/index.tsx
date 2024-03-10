import React, {ChangeEventHandler} from "react";
import Image from 'next/image'
import styles from "./styles.module.scss"

type Props = {
    onChange?: ChangeEventHandler<HTMLInputElement> | undefined
    options: Array<Option>,
    checked: string | number,
    name: string,
    margin?: string,
    disabled?: boolean,
}

type Option = {
    value: string | number
    text: string
    icon?: string
    iconChecked?: string
}

export default function Radio({options, checked, name, disabled, onChange, margin }: Props) {
    let radioItem = options?.map((item: Option, index) =>
        <React.Fragment key={`${name}${index}`}>
            <input
                type='radio'
                id={`${name}${index}`}
                value={item.value}
                name={name}
                checked={checked === item.value}
                readOnly
                disabled={disabled}
                onChange={onChange}
            />
            <label htmlFor={`${name}${index}`}>
                {!!item.icon && <Image className={styles.icon} src={`/assets/icons/${item.icon}`} alt="icon" width={24} height={24}/>}
                {!!item.iconChecked && <Image className={styles.iconInvert} src={`/assets/icons/${item.iconChecked}`} alt="icon" width={24} height={24}/>}
                {item.text}
            </label>
        </React.Fragment>
    );

    return (
        <div className={styles.wrapper} style={{margin: `${margin}`}}>
            <div className={[styles.radioButton, `${disabled ? styles.disabled : ''}`].join(' ')}>
                {radioItem}
            </div>
        </div>
    )
}