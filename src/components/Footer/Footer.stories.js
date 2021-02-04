// Footer.story.js

import React from 'react';
import Footer from './Footer';

import * as FooterLinkStories from './FooterLink.stories';

export default {
    title: 'Footer',
    component: Footer,
    argTypes: {
        fontColor: { control: 'color' },
        linkColor: { control: 'color' },
        backgroundColor: { control: 'color' },
        columns: { 
            control: { type: 'range', min: 1, max: 3, step: 1, }
        },
    },
    args: {
        columns: 3,
        linksList: [
            { ...FooterLinkStories.Default.args.FooterLink, id: '1', title: 'About Us', url: '#0'},
            { ...FooterLinkStories.Default.args.FooterLink, id: '2', title: 'Terms of Service', url: '#0'},
            { ...FooterLinkStories.Default.args.FooterLink, id: '3', title: 'Code of Conduct', url: '#0'},
            { ...FooterLinkStories.Default.args.FooterLink, id: '4', title: 'Contact Us', url: '#0'},
            { ...FooterLinkStories.Default.args.FooterLink, id: '5', title: 'Chat', url: '#0'},
            { ...FooterLinkStories.Default.args.FooterLink, id: '6', title: 'Meetups', url: '#0'},
            { ...FooterLinkStories.Default.args.FooterLink, id: '7', title: 'Team Hack', url: '#0'},
            { ...FooterLinkStories.Default.args.FooterLink, id: '8', title: 'Mentorships', url: '#0'},
        ],
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

export const OneColumn = Template.bind({})
OneColumn.args = {
    columns: 1,
}

export const TwoColumn = Template.bind({})
TwoColumn.args = {
    columns: 2,
}
export const ThreeColumn = Template.bind({})
ThreeColumn.args = {
    columns: 3,
}