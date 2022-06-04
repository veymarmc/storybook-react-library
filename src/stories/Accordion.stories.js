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
