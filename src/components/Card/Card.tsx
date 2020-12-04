import React from 'react'
import './card.css';

interface CardProps {
    title?: string;
    children?: any;
    width: number;
}

const Card = ({title, width = 300, children }: CardProps): JSX.Element => (
<div className="card" style={{width: `${width}px`}}>{children}</div>
)



export { Card}