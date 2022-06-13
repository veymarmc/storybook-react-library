import React from 'react';
import { Navbar, Button, Dropdown } from '../components';
import { Primary, Secondary, ColoredInverted } from './Button.stories';

export default {
  title: 'Example/Navbar',
  component: Navbar
};

const navbarLogo = (
  <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" fillRule="evenodd">
      <path
        d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
        fill="#FFF"
      />
      <path
        d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
        fill="#555AB9"
      />
      <path
        d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z"
        fill="#91BAF8"
      />
    </g>
  </svg>
);

const dropdownItems = [
  {
    item: 'English',
    value: 'English',
  },
  {
    item: 'Spanish',
    value: 'Spanish',
    selected: true
  },
  {
    item: 'French',
    value: 'French',
  }
];

const actions = [
  <Dropdown
    data={dropdownItems}
    trigger={(open, setOpen, current) => (
      <Button
        {...ColoredInverted.args}
        color='#F48225'
        trailingIcon={`caret-${!open ? 'down': 'up'}`}
        onClick={setOpen}
        label={current.value}
      />
    )} />,
  <Button {...Secondary.args} children='choose language' />,
  <Button {...Primary.args} children='Sign in' />,
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

export const Color = Template.bind({});
Color.args = {
  ...Actions.args,
  backgroundColor: '#F8F9F9',
  color: '#F48225',
}

export const Logo = Template.bind({});
Logo.args = {
  ...Actions.args,
  logo: navbarLogo
}
