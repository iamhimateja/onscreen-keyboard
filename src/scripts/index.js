import '../styles/reset.css';
import '../styles/index.scss';
import KeyBoard from "./components/keyBoard.js";

if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}

const keyboard = new KeyBoard();

keyboard.init();
