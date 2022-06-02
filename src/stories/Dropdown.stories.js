import React from 'react';
import { Button, Dropdown } from './../components';
import * as ButtonStories from './Button.stories';

export default {
  title: 'Example/Dropdown',
  component: Dropdown,
};

const Template = args => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <Button {...ButtonStories.ColoredInverted.args} trailingIcon='caret-down' />
};
