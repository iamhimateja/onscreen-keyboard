const $id = element_id => {
  return document.getElementById(element_id);
};

const $class = (selector, scope = document) => {
  return scope.querySelector(selector);
};

const $classes = (selector, scope = document) => {
  return scope.querySelectorAll(selector);
};

// Detecting the mobile device
// Reference: https://dev.to/timhuang/a-simple-way-to-detect-if-browser-is-on-a-mobile-device-with-javascript-44j3
const isMobileDevice = () => {
  return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
};

export {
  $id,
  $class,
  $classes,
  isMobileDevice
};
