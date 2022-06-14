import { useRef, useEffect, useState } from 'react';

/**
 * Hook that verifies if a click was done outside of the html elements (refs)
 * This will execute the callback if the click was outside the given components.
 * @param {Array} refs references to verify if the click was on one of them. 
 * @param {boolean} open check when to add or remove the listener
 * @param {function} callback callback to be executed if the click was outside the component 
 */
export function useComponentsArentClicked(refs, open, callback) {
  const listenerFunction = useRef(null);  
  useEffect(() => {
    function checkIfClickIsInComponents(e) {
      const elementWasClicked = refs.some(ref => {
        const {left, right, top, bottom} = ref.current.getBoundingClientRect();
        return e.pageX >= left && e.pageX <= right && e.pageY >= top && e.pageY <= bottom;
      });
  
      !elementWasClicked && callback();
    }

    if (open) {
      document.addEventListener('mousedown', checkIfClickIsInComponents);
      listenerFunction.current = checkIfClickIsInComponents;
    } else {
      document.removeEventListener('mousedown', listenerFunction.current);
    }
  }, [open, callback, refs]);

}

/**
 * Initialize the values of the dropdown.
 * @param {object} listRef html reference to the dropdown list
 * @param {object} dropdownRef html reference to the dropdown itself.
 * @returns 
 */
export function useDropDownStatus(listRef, dropdownRef) {
  const [initialState, setInitialState] = useState(true);
  const listDimension = useRef(null);
  const dropdownDimension = useRef(null); 

  useEffect(() => {
    listDimension.current = listRef.current.getBoundingClientRect();
    dropdownDimension.current = dropdownRef.current.getBoundingClientRect();

    setInitialState(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) // disabled since we need an equivalent componentdidmount for initialState the dropdown

  return [initialState, dropdownDimension, listDimension];
}
