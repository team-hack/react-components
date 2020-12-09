import React from 'react'
import './alert.css';

interface AlertProps {
    title?: string;
}

export const Alert = ({title, ...props}: AlertProps): JSX.Element => (
    <div className={`alert`} {...props}>{title ? title : 'Hello World'}</div>
)

