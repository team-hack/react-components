// Footer.story.js

import React from 'react';
import Footer from './Footer';

export default {
    title: 'example/Footer',
    component: Footer,
    argTypes: {
        fontColor: { control: 'color' },
        linkColor: { control: 'color' },
        backgroundColor: { control: 'color' },
        columns: { control: 'number' },
    },
    args: {
        
    },
}

const Template = (args) => <Footer {...args} />

export const Light = Template.bind({})
Light.args = {
    theme: 'light',
}

export const Dark = Template.bind({})
Dark.args = {
    theme: 'dark',
}