import React from 'react';

const FooterLinksLayout = ({ children, position, numberOfColumns = null }) => {
    let childrenLinks = [];

    if (numberOfColumns === null) {
        childrenLinks = children;
    } else {
        const numberColumns = parseInt(numberOfColumns);
        for (let i = 0; i = children.length; i += numberColumns) {
            childrenLinks = children.slice(i,i+numberColumns);
            console.log(childrenLinks);
        }
    }

    const links = children;

    return (
        <>
            <div className="row flex">
                {
                    React.Children.map(links, (link, i) => {
                        return (
                            <div className="center">
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