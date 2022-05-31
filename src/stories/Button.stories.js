import React from 'react';
import { Button, Icon } from '../components';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  children: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Button',
  secondary: true,
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  children: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  children: 'Button',
};

export const Inverted = Template.bind({});
Inverted.args = {
  children: 'Button',
  inverted: true,
};

export const ColoredInverted = Template.bind({});
ColoredInverted.args = {
  children: 'Button',
  inverted: true,
  color: 'orange',
};

export const Fluid = Template.bind({});
Fluid.args = {
  children: 'Button',
  fluid: true,
};

export const IconButton = Template.bind({});
IconButton.args = {
  children: <><Icon name='globe' /> Button</>,
  inverted: true
};
