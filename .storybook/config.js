import { configure, addDecorator } from '@storybook/react';
import '@storybook/addons';
import '@storybook/addon-knobs/register';
import { withKnobs } from '@storybook/addon-knobs';


function loadStories() {
    require('../stories/index.js');
    // You can require as many stories as you need.
}

configure(loadStories, module).addDecorator(withKnobs);