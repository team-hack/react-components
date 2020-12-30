import React from 'react';

import FooterLinks from './FooterLinks';
import * as FooterLinkStories from './FooterLink.stories';

export default {
    component: FooterLinks,
    title: 'Example/FooterLinks',
    decorators: [story => <div style={{ padding: '3rem' }}>{story()}</div>],
};

const Template = args => <FooterLinks {...args} />;

export const Default = Template.bind({});
Default.args = {
    // Shaping the stories through args composition.
    // The data was inherited from the Default story in FooterLink.stories.js.
    linksList: [
        { ...FooterLinkStories.Default.args.FooterLink, id: '1', title: 'About', url: '#0'},
        { ...FooterLinkStories.Default.args.FooterLink, id: '2', title: 'Projects', url: '#0'},
        { ...FooterLinkStories.Default.args.FooterLink, id: '3', title: 'Blog', url: '#0'},
        { ...FooterLinkStories.Default.args.FooterLink, id: '4', title: 'Contact', url: '#0'},
        { ...FooterLinkStories.Default.args.FooterLink, id: '5', title: 'Forum', url: '#0'},
        { ...FooterLinkStories.Default.args.FooterLink, id: '6', title: 'Archive', url: '#0'},
        { ...FooterLinkStories.Default.args.FooterLink, id: '7', title: 'Gallery', url: '#0'},
        { ...FooterLinkStories.Default.args.FooterLink, id: '8', title: 'Foo', url: '#0'},
    ]

}
