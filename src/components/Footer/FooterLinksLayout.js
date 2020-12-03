import React from 'react';

const FooterLinksLayout = ({ children, position, numberOfColumns = null }) => {
    let childrenLinks = React.Children.toArray(children);

    if (numberOfColumns && numberOfColumns > 1) {

        const numberColumns = parseInt(numberOfColumns);
        for (let i = 0; i = children.length; i += numberColumns) {
            childrenLinks = children.slice(i,i+numberColumns);
        }
    }

    const links = children;

    return (
        <>
            <div className="row flex">
                {
                    React.Children.map(links, (link, i) => {
                        return (
                            <div className={ position }>
                                { link }
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
};

export default FooterLinksLayout;