import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Data from '../index';

storiesOf('Data', module)
  .add('default view', () => (
    <Data onClick={ action('Data clicked') } num={3333}>Hello</Data>
  ))
  .add('some emojies as the text', () => (
    <Data num={3333}>😀 😎 👍 💯</Data>
  ))
  .add('custom styles', () => {
    const style = {
      fontSize: 20,
      textTransform: 'uppercase',
      color: '#FF8833',
    };
    return (
      <Data num={3333}>Hello</Data>
    );
  });
