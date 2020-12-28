import React from 'react';

const FooterLinks = ({ linkColor }) => {

    const cssStyles = {
        color: linkColor,
    }
    return (
        <>
            <a style={cssStyles} href="#0">About</a>
            <a style={cssStyles} href="#0">Projects</a>
            <a style={cssStyles} href="#0">Blog</a>
            <a style={cssStyles} href="#0">Contact</a>
            <a style={cssStyles} href="#0">Forum</a>
            <a style={cssStyles} href="#0">Archive</a>
            <a style={cssStyles} href="#0">Gallery</a>
            <a style={cssStyles} href="#0">Foo</a>
            <a style={cssStyles} href="#0">Bar</a>
        </>
    )
}

export default FooterLinks;