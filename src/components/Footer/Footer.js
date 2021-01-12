import React from 'react';
import PropTypes from 'prop-types';

import FooterBrand from './FooterBrand';
import FooterLinks from './FooterLinks';
import FooterDisclaimer from './FooterDisclaimer';

import './Footer.css';

const Footer = ({ theme, backgroundColor, fontColor, linkColor, columns, linksList}) => {
    const cssStyles = {
        color: fontColor,
        backgroundColor: backgroundColor,
        linkColor: linkColor,
    }

    return (
        <footer className={ theme } style={ cssStyles }>
            <FooterBrand position="center" />
            <FooterLinks linkColor = {linkColor} linksList = {linksList} numberOfColumns={columns} />
            <FooterDisclaimer position="center sm:left" />
        </footer>
    )
};

export default Footer;