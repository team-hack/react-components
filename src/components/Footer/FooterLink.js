import React from 'react';

export default function FooterLink({ footerLink: {id, title, url}, cssStyles}) {
    return (
        <a style={cssStyles} id={id} href={url}>{title}</a>
    );
}