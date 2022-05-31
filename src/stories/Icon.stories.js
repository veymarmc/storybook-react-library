import React from 'react';
import { Icon } from '../components';

export default {
  title: 'Example/Icon',
  component: Icon,
};

const Template = args => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'globe',
};
