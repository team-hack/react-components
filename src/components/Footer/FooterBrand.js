import React from 'react';

const FooterBrand = ({ position }) => (
    <div className={`row ${ position }`}>
        { /* position left | center | right */ }
        <div className="logo">The Footer</div>
        { /* optional: add newsletter subscribe form */}
        { /* optional: add social media links */}
    </div>
);

export default FooterBrand;