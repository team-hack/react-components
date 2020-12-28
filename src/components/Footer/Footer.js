import React from 'react';
import PropTypes from 'prop-types';

import FooterBrand from './FooterBrand';
import FooterLinksLayout from './FooterLinksLayout';
import FooterLinks from './FooterLinks';
import FooterDisclaimer from './FooterDisclaimer';

import './Footer.css';

const Footer = ({ theme, backgroundColor, fontColor, linkColor, columns }) => {
    const cssStyles = {
        color: fontColor,
        backgroundColor: backgroundColor,
    }
    return (
        <footer className={ theme } style={ cssStyles }>
            <FooterBrand position="center" />
            <FooterLinksLayout position="center" >
                <FooterLinks linkColor={ linkColor } numberOfColumns={ columns } />
            </FooterLinksLayout>
            <FooterDisclaimer position="center sm:left" />
        </footer>
    )
};

export default Footer;