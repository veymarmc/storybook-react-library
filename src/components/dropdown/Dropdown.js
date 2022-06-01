import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './../../components';

/**
 * Component that deploy a list of option to be selected with one by default
 */
export const Dropdown = ({ children }) => {
  return (
    children
  );
};

Dropdown.propTypes = {
  /**
   * A trigger component to open/close the dropdown
   * Should be a Button component.
   */
  children: PropTypes.instanceOf(Button).isRequired,
};
