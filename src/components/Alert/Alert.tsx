import React from 'react'
import './alert.scss';


interface AlertProps {
    text?: string;
    type?: string;
    align?: string;
    borderRadius?: string;
    backgroundColor?: string;
    fontColor?: string;
    darkMode?: boolean;
}

export const Alert = ({text, type, backgroundColor, borderRadius, fontColor, align, darkMode, ...props}: AlertProps) => {

    const cssStyles = {
        background: backgroundColor,        
        color: fontColor,
        borderRadius: `${borderRadius}px`
    }

    return (
        <div 
        className={`
            alert 
            ${type ? `${type}` :`primary`} 
            ${darkMode ? 'dark' : ''} 
            ${align ?? 'left'}`
        } style={cssStyles} {...props}>{text ?? ''}</div>
    )
}

