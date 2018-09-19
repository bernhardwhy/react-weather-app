import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withNotes } from '@storybook/addon-notes';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';
import BackgroundContainer from '../src/components/BackgroundContainer/BackgroundContainer'



storiesOf('Button', module)
    .add('with text', () => (
        <button disabled={boolean('Disabled', false)} onClick={action('clicked')}>Hello Button</button>
    ))
    .add('with some emoji', () => (
        <button disabled={boolean('Disabled', false)} onClick={action('clicked second')}><span role="img" aria-label="so cool">😀 😎 👍 💯</span></button>
    ));

storiesOf('Layout', module).addDecorator(withKnobs)
    .add('summer', withNotes('A very simple layout component')(() =>
        <BackgroundContainer disabled={boolean('Disabled', false)} season={'summer'} />
    )).add('winter', () => (
        <BackgroundContainer season={text('season', 'winter')} season={'winter'} />
    ));


