import React from 'react';
import { Button, Dropdown } from './../components';
import * as ButtonStories from './Button.stories';

export default {
  title: 'Example/Dropdown',
  component: Dropdown,
};

export const NestedTriggerDropdown = args => (
  <Dropdown
    {...args}
    trigger={(open, setOpen) => (
      <Button
        {...ButtonStories.ColoredInverted.args}
        trailingIcon={`caret-${!open ? 'down': 'up'}`}
        onClick={setOpen}
      />
    )}
  >
  </Dropdown>
);
