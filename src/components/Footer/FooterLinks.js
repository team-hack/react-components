import React from 'react';

import FooterLink from './FooterLink';

export default function FooterLinks({linksList, linkColor, numberOfColumns}) {
    const cssStyles = {
        color: linkColor,
    }
    return (
        /*
        TO-DO: Reverse row and column classNames
        */
        <ul className={`row column column-${numberOfColumns}`}>
            {linksList.map(link => (
                <li key={link.id}>
                    <FooterLink footerLink={link} cssStyles={cssStyles} />
                </li>
            ))}
        </ul>
    );
}