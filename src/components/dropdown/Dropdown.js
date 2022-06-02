import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './dropdown.scss';

/**
 * Component that deploy a list of option to be selected with one by default
 */
export const Dropdown = ({ trigger }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className='vmcrjc-dropdown'>
      {trigger(open, () => setOpen(!open))}
      <ul className={!open ? 'd-none' : ''}>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
      </ul>
    </div>
  );
};

Dropdown.propTypes = {
  /**
   * A trigger component to open/close the dropdown
   * Should be a Button component.
   */
  trigger: PropTypes.func.isRequired,
};
