import React from 'react';
import PropTypes from 'prop-types';
import './navbar.scss';

export const Navbar = ({ title, actions }) => {
  return (
    <div className='vmcrjc-navbar navbar'>
      <h2>{title}</h2>
      
      {!!actions.length &&
      <div className='navbar__actions'>
        {actions.map((a, i) => (
          <React.Fragment key={i}>
            {a}
          </React.Fragment>
        ))}
      </div>
      }
    </div>
  );
}

Navbar.propTypes = {
  /**
   * actions in the navbar that can be any react node.
   */
  actions: PropTypes.arrayOf(PropTypes.node),
  /**
   * title of the navbar, usually application name
   */
  title: PropTypes.string,
};

Navbar.defaultProps = {
  actions: [],  
};
