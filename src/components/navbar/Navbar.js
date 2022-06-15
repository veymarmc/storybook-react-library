import React, { useMemo, useRef } from 'react';
import PropTypes from 'prop-types';
import { useSetInitialState } from './navbarHooks';
import { Dropdown, Icon } from './../../components';
import './navbar.scss';

export const Navbar = ({
  actions,
  backgroundColor,
  color,
  logo,
  title,
 }) => {
  const backgroundColorStyle = backgroundColor ? { backgroundColor } : {};
  const colorStyle = color ? { color } : {};
  const containerRef = useRef({});
  const titleContainerRef = useRef({});
  const actionsContainerRef = useRef({});
  const [initialState, currentActions] = useSetInitialState(
    containerRef,
    titleContainerRef,
    actionsContainerRef,
    actions
  );
  const hiddenActions = useMemo(() => convertActionsToDropdownItems(currentActions.hidden), [currentActions.hidden]);
  const initialStateStyle = initialState ? { visibility: 'hidden' } : {};

  return (
    <div
      className='vmcrjc-navbar navbar'
      style={{...colorStyle, ...backgroundColorStyle}}
      ref={containerRef}
    >
      <div className='navbar__title-container' ref={titleContainerRef}>
        {logo}
        <h2
          data-logo={logo ? true : false}
          style={{...colorStyle}}
        >
          {title}
        </h2>
      </div>
      
      {!!actions.length &&
      <div 
        className='navbar__actions'
        ref={actionsContainerRef}
        style={{...initialStateStyle}}
      >
        {currentActions.displayed.map(({action}, i) => (
          <React.Fragment key={i}>
            {action}
          </React.Fragment>
        ))}
        {!!currentActions.hidden.length &&
          <Dropdown
            data={hiddenActions}
            position='right'
            trigger={(_, setOpen) => (
              <Icon
                onClick={setOpen}
                name='bars'
                style={{fontSize: '1.5rem'}}
              />
            )}
          />
        }
      </div>
      }
    </div>
  );
}

function convertActionsToDropdownItems(composedActions) {
  return composedActions.map(({ action }, i) => ({
    value: `${i}`,
    item: action
  }));
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
