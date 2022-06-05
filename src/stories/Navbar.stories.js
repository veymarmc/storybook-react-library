import React from 'react';
import { Navbar } from '../components';

export default {
  title: 'Example/Navbar',
  component: Navbar
};

const Template = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
