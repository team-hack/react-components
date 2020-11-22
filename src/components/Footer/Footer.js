import React from 'react';
import PropTypes from 'prop-types';

import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="row center">
                { /* position left | center | right */ }
                <div className="logo">The Footer</div>
                { /* optional: add newsletter subscribe form */}
                { /* optional: add social media links */}
            </div>

            <div className="row flex">
                 { /* add n number columns */ } 
                <div className="center">
                    <a href="javascript:null">Footer link 1</a>
                    <a href="javascript:null">Footer link 2</a>
                    <a href="javascript:null">Footer link 3</a>
                </div>
                <div className="center">
                    <a href="javascript:null">Footer link 4</a>
                    <a href="javascript:null">Footer link 5</a>
                    <a href="javascript:null">Footer link 6</a>
                </div>
                <div className="center">
                    <a href="javascript:null">Footer link 7</a>
                    <a href="javascript:null">Footer link 8</a>
                </div>
            </div>

            <div className="row center sm:left">
                { /* position left | center | right */ }
                <div className="disclaimer">&copy;2020 All Rights Reserved.</div>
            </div>
        </footer>
    )
};

export default Footer;