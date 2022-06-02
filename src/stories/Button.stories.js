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
const Template = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  ...Default.args,
  primary: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Default.args,
  secondary: true,
};

export const Large = Template.bind({});
Large.args = {
  ...Default.args,
  size: 'large',
};

export const Small = Template.bind({});
Small.args = {
  ...Default.args,
  size: 'small',
};

export const Inverted = Template.bind({});
Inverted.args = {
  ...Default.args,
  inverted: true,
};

export const ColoredInverted = Template.bind({});
ColoredInverted.args = {
  ...Default.args,
  inverted: true,
  color: 'orange',
};
ColoredInverted.parameters = {
  ...Default.args,
  backgrounds: {
    default: 'dark'
  }
};

export const Fluid = Template.bind({});
Fluid.args = {
  ...Default.args,
  fluid: true,
};

export const NestedIcon = Template.bind({});
NestedIcon.args = {
  ...Default.args,
  children: <><Icon name='globe' /> Button</>,
  primary: true
};

export const TrailingIcon = Template.bind({});
TrailingIcon.args = {
  ...Default.args,
  trailingIcon: 'caret-down',
};

export const LeadingIcon = Template.bind({});
LeadingIcon.args = {
  ...Default.args,
  leadingIcon: 'user',
};
