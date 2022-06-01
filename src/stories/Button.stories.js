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
const Template = (args) => <Button children='Button' {...args} />;

export const Default = Template.bind({});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  secondary: true,
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
};

export const Inverted = Template.bind({});
Inverted.args = {
  inverted: true,
};

export const ColoredInverted = Template.bind({});
ColoredInverted.args = {
  inverted: true,
  color: 'orange',
};
ColoredInverted.parameters = {
  backgrounds: {
    default: 'dark'
  }
};

export const Fluid = Template.bind({});
Fluid.args = {
  fluid: true,
};

export const NestedIcon = Template.bind({});
NestedIcon.args = {
  children: <><Icon name='globe' /> Button</>,
  primary: true
};

export const TrailingIcon = Template.bind({});
TrailingIcon.args = {
  trailingIcon: 'caret-down',
};

export const LeadingIcon = Template.bind({});
LeadingIcon.args = {
  leadingIcon: 'user',
};