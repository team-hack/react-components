import React from 'react';

import FooterLink from './FooterLink';


export default {
    component: FooterLink,
    title: 'example/Footer Link',
};

const Template = args => <FooterLink {...args} />;

export const Default = Template.bind({});
Default.args = {
    footerLink: {
        id: '1',
        title: 'Test Link',
    },
};