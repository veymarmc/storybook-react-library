import React from 'react';
import { Button, Dropdown } from './../components';
import * as ButtonStories from './Button.stories';

export default {
  title: 'Example/Dropdown',
  component: Dropdown,
};

const dataItems = [
  {
    item: 'item1',
    value: 'item1',
  },
  {
    item: 'item2',
    value: 'item2',
    selected: true
  },
  {
    item: 'item2',
    value: 'item2',
  }
];

export const NestedTriggerDropdown = args => (
  <Dropdown
    {...args}
    data={dataItems}
    trigger={(open, setOpen, item) => (
      <Button
        {...ButtonStories.ColoredInverted.args}
        trailingIcon={`caret-${!open ? 'down': 'up'}`}
        onClick={setOpen}
        label={item}
      />
    )}
  >
  </Dropdown>
);
