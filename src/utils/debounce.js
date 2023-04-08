const debounce = (func, delay) => {
  let timer;
  function debouncedFunc() {
    let self = this;
    let args = arguments;
    console.log("clearing debounce");
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(self, args);
    }, delay);
  }

  debouncedFunc.cancel = function () {
    console.log("clearing debounce");
    clearTimeout(timer);
  };

  return debouncedFunc;
};

export default debounce;
