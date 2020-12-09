import React from 'react'
import './alert.css';

interface AlertProps {
    title?: string;
}

export const Alert = ({title}: AlertProps): JSX.Element => (
    <div className={`alert`}>{title ? title : 'Hello World'}</div>
)

