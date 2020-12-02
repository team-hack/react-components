import React from 'react'
import './alert.css';

interface AlertProps {
    title?: string;
}

const Alert = ({title}: AlertProps): JSX.Element => (
    <div className={`alert`}>{title ? title : 'Hello World'}</div>
)

export default Alert