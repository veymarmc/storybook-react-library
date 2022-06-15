import { useEffect, useReducer, useRef, useState } from "react";
import { htmlElementsUtils, makeThrottler } from './../../utlis';

const { getElementComposedWidth } = htmlElementsUtils;

function currentActionsReducer( state, action) {
  switch (action.type) {
    case 'init-width':
      return {
        ...state,
        displayed: state.displayed.map((a, i) => ({ 
          action: a.action, 
          width: action.payload[i]
        }))
      }
    case 'hide':
      return {
        hidden: [state.displayed.pop(), ...state.hidden],
        displayed: [...state.displayed]
      };
    case 'display':
      return {
        displayed: [...state.displayed, state.hidden.shift()],
        hidden: [...state.hidden],
      }
    default:
      return state;
  }
}

export function useSetInitialState(containerRef, titleContainerRef, actionsContainerRef, actions) {
  const [initialState, setInitialState] = useState(true);
  const [actionsState, actionsDispatch] = useReducer(
    currentActionsReducer,
    {
      displayed: actions.map((action, i) => ({
        action,
        width: 0
      })),
      hidden: []
    }
  );

  useListenerResizeComponet(containerRef);

  // TODO: Solve the linter issue (seems that the current solution is not well implemented, adding dependencies could solve the problem)
  // TODO: The initial state is not clear now since this effect is being executed many times.
  useEffect(() => {
    if (actions.length) {
      const containerComposedWidth = getElementComposedWidth(containerRef.current, 'padding', false);
      const titleDimension = titleContainerRef.current.getBoundingClientRect();
      const actionsDimension = actionsContainerRef.current.getBoundingClientRect();

      !actionsState.displayed[0].width && actionsDispatch({
        type: 'init-width',
        payload: actions.map((_, i) =>
          getElementComposedWidth(actionsContainerRef.current.children[i], 'margin-left', true))
      });

      function canContainerHoldOneMore() {
        // TODO: this function has to work for showing the actions when the navbar grows.
      }

      if (
        titleDimension.width + actionsDimension.width > containerComposedWidth &&
        actionsState.displayed.length > 0
      ) {
        actionsDispatch({ type: 'hide'});
      // TODO: this condition has to be enabled when the navbar grows and we have to show more actions
      // } else if (
      //   titleDimension.width + actionsDimension.width < containerRealWidth &&
      //   actionsState.hidden.length > 0
      // ) {
        // actionsDispatch({ type: 'display'});
      } else {
        setInitialState(false);
      }
    }
  });

  return [initialState, actionsState];
}

function useListenerResizeComponet(componentRef) {
  const throttle = useRef(makeThrottler());
  const [, update] = useState({});
  const resizeObserver = useRef(new ResizeObserver((entries) => {
    throttle.current(() => update({}));
  }));

  useEffect(() => {
    resizeObserver.current.observe(componentRef.current);    
  }, [componentRef]);
}
