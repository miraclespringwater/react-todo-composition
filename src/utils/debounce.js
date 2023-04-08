const debounce = (func, delay) => {
  let timer;
  function debouncedFunc() {
    let self = this;
    let args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(self, args);
    }, delay);
  }

  debouncedFunc.cancel = function () {
    clearTimeout(timer);
  };

  return debouncedFunc;
};

export default debounce;
