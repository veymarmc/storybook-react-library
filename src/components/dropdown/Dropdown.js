import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './../../components';
import './dropdown.scss';

/**
 * Component that deploy a list of option to be selected with one by default
 */
export const Dropdown = ({ children }) => {
  return (
    <div className='vmcrjc-dropdown'>
      {children}
      <ul>
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
  children: PropTypes.instanceOf(Button).isRequired,
};
