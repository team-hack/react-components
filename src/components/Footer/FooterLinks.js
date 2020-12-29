import React from 'react';

import FooterLink from './FooterLink';

export default function FooterLinks({linksList, linkColor}) {
    const cssStyles = {
        color: linkColor,
    }
    return (
        <div className="row">

            {linksList.map(link => (
                <FooterLink key={link.id} footerLink={link} cssStyles={cssStyles} />
            ))}

        </div>
    );
}