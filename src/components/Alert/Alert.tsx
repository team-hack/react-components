import React from 'react'
import styles from  './alert.module.scss';


interface AlertProps {
    text?: string;
    type?: string;
    align?: string;
}

export const Alert = ({text, align, type, ...props}: AlertProps) => {
    return (
        <div 
        className={`
            ${styles.alert} 
            ${styles[type] ?? styles.primary} 
            ${styles[align] ?? styles.left }`
        }>{text ?? ''}</div>
    )
}

