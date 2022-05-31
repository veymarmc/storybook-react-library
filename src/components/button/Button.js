import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

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
  primary,
  secondary,
  size,
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
        'vmcrjc-button',
        fluidMode,
        `button--${size}`,
        mode,
        invertedMode,
        className].join(' ')}
      style={{...background, ...invertedColor}}
      {...props}
    >
      {children}
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
  children: PropTypes.node.isRequired,
  /**
   * Extra classNames to add to the component
   */
  className: PropTypes.string,
  /**
   * A valid color to apply to the inverted mode
   */
  color: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Makes a button fluid
   */
  fluid: PropTypes.bool,
  /**
   * inverted mode.
   */
  inverted: PropTypes.bool,
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
  primary: false,
  secondary: false,
  size: 'medium',
  onClick: undefined,
};
