function makeThrottler(delay = 300) {
  let isThrottled = false;
  let debounceTimeout = null;

  function throttle(callback) {
    if (!isThrottled) {
      isThrottled = true;

      setTimeout(() => {
        isThrottled = false;
        callback();
      }, delay);
    }

    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(callback, delay);
  }

  return throttle;
}

export default makeThrottler;
