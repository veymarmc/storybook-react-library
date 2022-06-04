import React from 'react';
import { Accordion } from '../components';

export default {
  title: 'Example/Accordion',
  component: Accordion
};

const data = Array(5).fill(2);

const Template = (args) => <Accordion {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: data,
};
