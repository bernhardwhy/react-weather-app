import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withNotes } from '@storybook/addon-notes';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs/react';
import BackgroundContainer from '../src/components/BackgroundContainer/BackgroundContainer'



storiesOf('Button', module)
    .add('with text', () => (
        <button disabled={boolean('Disabled', false)} onClick={action('clicked')}>Hello Button</button>
    ))
    .add('with some emoji', () => (
        <button disabled={boolean('Disabled', false)} onClick={action('clicked second')}><span role="img" aria-label="so cool">😀 😎 👍 💯</span></button>
    ));

storiesOf('Layout', module).addDecorator(withKnobs)
    .addDecorator(story => (
        <div style={{ width: '250px' }}>
            {story()}
        </div>
    ))
    .add('summer', withNotes('A very simple layout component')(() =>
        <BackgroundContainer
            weatherType={select('weather Type', {
                summer: 'Choose summer theming',
                winter: 'Choose winter themeing',
                hotSummer: 'Choose Hot Summer themeing',
                foggy: 'Choose foggy themeing',
                rainy: 'Choose rainy themeing',
            }, 'winter')} />
    ))


