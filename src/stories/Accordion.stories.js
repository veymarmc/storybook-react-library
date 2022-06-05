import React from 'react';
import { Accordion } from '../components';

export default {
  title: 'Example/Accordion',
  component: Accordion
};

const data = [
  { title: 'title', content: 'content' },
  { title: 'title', content: 'content' },
  { title: 'title', content: 'content' },
];

const Template = (args) => <Accordion {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: data,
};

export const Primary = Template.bind({});
Primary.args = {
  ...Default.args,
  primary: true,
}

export const Secondary = Template.bind({});
Secondary.args = {
  ...Default.args,
  secondary: true,
}

export const Icons = Template.bind({});
Icons.storyName = 'Accordion\'s expand/shrink icons';
Icons.args = {
  ...Default.args,
  expandIcon: 'plus',
  shrinkIcon: 'xmark',
}

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

export const BackgroundColor = Template.bind({});
BackgroundColor.args = {
  ...Default.args,
  backgroundColor: '#68be6e',
  color: 'white',
};
