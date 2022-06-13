import React from 'react';
import { Navbar, Button } from '../components';
import { Primary, Secondary } from './Button.stories';

export default {
  title: 'Example/Navbar',
  component: Navbar
};

const actions = [
  <Button {...Primary.args} />,
  <Button {...Secondary.args} />,
]

const Template = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Navbar title',
}

export const Actions = Template.bind({});
Actions.args = {
  ...Default.args,
  actions
};
