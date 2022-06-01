import React from 'react';
import { Button, Dropdown } from './../components';
import { IconButton } from './Button.stories';

export default {
  title: 'Example/Dropdown',
  component: Dropdown,
};

const Template = args => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <Button {...IconButton.args} />
};
