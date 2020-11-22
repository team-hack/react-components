// Footer.story.js

import React from 'react';
import Footer from './Footer';

export default {
    title: 'components/Footer',
    component: Footer,
    decorators: [],
    parameters: {},
}

export const Basic = () => <Footer />;
export const WithProp = () => <Footer prop="value" />;