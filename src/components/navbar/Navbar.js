import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown, Icon } from './../../components';
import './navbar.scss';

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
    item: 'item3',
    value: 'item3',
  }
];

export const Navbar = ({
  actions,
  backgroundColor,
  color,
  logo,
  title,
 }) => {
  const backgroundColorStyle = backgroundColor ? { backgroundColor } : {};
  const colorStyle = color ? { color } : {};

  return (
    <div
      className='vmcrjc-navbar navbar'
      style={{...colorStyle, ...backgroundColorStyle}}
    >
      <div className='navbar__title-container'>
        {logo}
        <h2
          data-logo={logo ? true : false}
          style={{...colorStyle}}
        >
          {title}
        </h2>
      </div>
      
      {!!actions.length &&
      <div className='navbar__actions'>
        {actions.map((a, i) => (
          <React.Fragment key={i}>
            {a}
          </React.Fragment>
        ))}
        <Dropdown
          data={dataItems}
          position='right'
          trigger={(_, setOpen) => (
            <Icon
              onClick={setOpen}
              name='bars'
              style={{fontSize: '1.5rem'}}
            />
          )}
        />
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
   * sets the background of the navbar
   */
  backgroundColor: PropTypes.string,
  /**
   * sets the color of the header title
   */
  color: PropTypes.string,
  /**
   * Any node to put as logo (image, svg, icon, etc)
   */
  logo: PropTypes.node,
  /**
   * title of the navbar, usually application name
   */
  title: PropTypes.string,
};

Navbar.defaultProps = {
  actions: [],  
};
