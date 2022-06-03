import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';
import { Icon } from './../../components';

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  backgroundColor,
  className,
  color,
  children,
  fluid,
  inverted,
  label,
  primary,
  secondary,
  size,
  trailingIcon,
  leadingIcon,
  ...props }) => {
  const mode = primary
    ? 'button--primary'
    : secondary
      ? 'button--secondary'
      : '';

  const invertedMode = inverted ? 'button--inverted' : '';
  const fluidMode = fluid ? 'fluid' : '';
  const invertedColor = color ? { boxShadow: `0 0 0 2px ${color} inset`, color} : {};
  const background = backgroundColor ? { backgroundColor } : {};

  return (
    <button
      type="button"
      className={[
        'vmcrjc-button button',
        fluidMode,
        `button--${size}`,
        mode,
        invertedMode,
        className].join(' ')}
      style={{...background, ...invertedColor}}
      {...props}
    >
      {leadingIcon && <Icon name={leadingIcon} className='button__leading-icon'/>}
      {children || label}
      {trailingIcon && <Icon name={trailingIcon} className='button__trailing-icon'/>}
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * Button secondary mode.
   */
  secondary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * Content of the button i.e. label or/and icon
   */
  children: PropTypes.node,
  /**
   * Extra classNames to add to the component
   */
  className: PropTypes.string,
  /**
   * A valid color to apply to the inverted mode
   */
  color: PropTypes.string,
  /**
   * The button label, if children is used this will be ignored.
   */
  label: PropTypes.string,
  /**
   * Icon name to be placed at the beggingin of the button label
   */
  leadingIcon: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Icon name to be placed at the end of the button
   */
  trailingIcon: PropTypes.string,
  /**
   * Makes a button fluid
   */
  fluid: PropTypes.bool,
  /**
   * inverted mode.
   */
  inverted: PropTypes.bool,
  /**
   * Optional works when onblur state comes
   */
  onBlur: PropTypes.func,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  color: null,
  className: null,
  fluid: false,
  inverted: false,
  label: null,
  leadingIcon: null,
  primary: false,
  secondary: false,
  size: 'medium',
  trailingIcon: null,
  onBlur: undefined,
  onClick: undefined,
};
