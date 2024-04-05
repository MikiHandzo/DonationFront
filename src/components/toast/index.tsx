import React, { useEffect } from 'react';
import styles from './styles.module.scss'

type Props = {
    toastMsg: string
    duration: number
    state: boolean
    setState: any
    color?: string
}

const Toast = ({toastMsg, duration, state, setState, color}: Props) => {
    useEffect(() => {
        const id = setTimeout(() => {
            setState((prevState: any) => ({
                ...prevState,
                state: false
            }));
        }, duration * 1000);
        return () => clearTimeout(id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state]);

    return (
        <>
            {state && <div className={[styles.errorMessage, `${color && styles[color]}`].join(' ')} style={{animationDuration: `${duration}s`}}>
                <span className={styles.textMessage}>
                    {toastMsg}
                </span>
            </div>}
        </>
    )
}

export default Toast