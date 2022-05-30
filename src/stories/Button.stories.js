import React from 'react';

import { Button } from '../components';

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
  label: 'Button',
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  secondary: true,
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};

export const Inverted = Template.bind({});
Inverted.args = {
  label: 'Button',
  inverted: true,
};

export const ColoredInverted = Template.bind({});
ColoredInverted.args = {
  label: 'Button',
  inverted: true,
  color: 'orange',
};

export const Fluid = Template.bind({});
Fluid.args = {
  label: 'Button',
  fluid: true,
};
