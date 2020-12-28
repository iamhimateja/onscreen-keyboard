import '../styles/reset.css';
import '../styles/index.scss';
import KeyBoard from "./components/keyBoard.js";
import { isMobileDevice } from "./helpers/helpers";

if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}

window.addEventListener("load", function () {
  if (!isMobileDevice()){
    const keyboard = new KeyBoard();
    keyboard.init();
  }
});
