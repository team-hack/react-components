import React from 'react';
import PropTypes from 'prop-types';

import FooterBrand from './FooterBrand';
import FooterLinksLayout from './FooterLinksLayout';
import FooterLinks from './FooterLinks';
import FooterDisclaimer from './FooterDisclaimer';

import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <FooterBrand position="center" />
            <FooterLinksLayout position="center" numberOfColumns="3">
                <FooterLinks />
            </FooterLinksLayout>
            <FooterDisclaimer position="center sm:left" />
        </footer>
    )
};

export default Footer;