import React from 'react';
import PropTypes from 'prop-types';

export const Icon = ({ name, className, ...props }) => {

  return (
    <i className={`fa-solid fa-${name} ${className}`} {...props} />
  )
}

Icon.propTypes = {
  /**
   * corresponding font-awesome free solid icon name.
   */
  name: PropTypes.string.isRequired,
  /**
   * additional classes to apply.
   */
  className: PropTypes.string,
};

Icon.defaultProps = {
  className: '',
};
