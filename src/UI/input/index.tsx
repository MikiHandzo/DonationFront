import React, {ChangeEventHandler} from "react";
import InputMask from "react-input-mask-next";
import styles from './styles.module.scss'

type Props = {
    mask?: string | RegExp[]
    maskChar?: string
    margin?: string
    onChange?: ChangeEventHandler<HTMLInputElement> | undefined
    onBlur?: ChangeEventHandler<HTMLInputElement> | undefined
    value?: string | number | readonly string[] | undefined
    disabled?: boolean
    placeholder?: string
    numericKeyboard?: boolean
    units?: string
}
export default function Input({
                                  placeholder,
                                  onChange,
                                  value,
                                  mask = '',
                                  maskChar,
                                  margin = '0',
                                  onBlur,
                                  disabled,
                                  numericKeyboard,
                                  units,
}: Props) {
    return (
        <div className={styles.input}
             style={{margin: `${margin}`}}
        >
            <InputMask
                mask={mask}
                maskPlaceholder={maskChar}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                disabled={disabled}
            >
                <input
                    type="text"
                    required
                    value={value}
                    placeholder={placeholder}
                    inputMode={numericKeyboard ? 'numeric' : 'text'}
                    style={{padding: `${units ? '0 26px 0 0' : '0'}`}}
                />
            </ InputMask>

            {units && <span className={styles.units}>
                {units}
            </span>}
        </div>
    )
}