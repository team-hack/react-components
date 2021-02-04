import React from 'react';
import PropTypes from 'prop-types';

import FooterLinks from './FooterLinks';
import FooterDisclaimer from './FooterDisclaimer';

import './footer.scss';

const Footer = ({ theme, backgroundColor, fontColor, linkColor, columns, linksList}) => {
    const cssStyles = {
        color: fontColor,
        backgroundColor: backgroundColor,
        linkColor: linkColor,
    }

    return (
        <footer className={ theme } style={ cssStyles }>
            <FooterLinks linkColor = {linkColor} linksList = {linksList} numberOfColumns={columns} />
            <FooterDisclaimer position="center sm:left" />
        </footer>
    )
};

export default Footer;