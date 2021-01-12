import React from 'react';

const FooterBrand = ({ position }) => (
    <div className={`row ${ position }`}>
        { /* position left | center | right */ }
        <div className="logo">The Company</div>
        {/*
            TO-DO: Add optional parameters to footer
            optional: add newsletter subscribe form
            optional: add social media links 
            add direction row, row-reverse, column, column-reverse
            add include into main row
            add full-width and max-width (?)
        */}
    </div>
);

export default FooterBrand;