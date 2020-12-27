const keyCodes = {
  "backspace": {
    keyCode: 8
  },

  "tab": {
    keyCode: 9
  },

  "enter": {
    keyCode: 13
  },

  "shift": {
    keyCode: 16
  },

  "rightShift": {
    keyCode: 16,
    shortForm: "shift"
  },

  "control": {
    keyCode: 17,
    shortForm: "ctrl"
  },

  "rightControl": {
    keyCode: 17,
    shortForm: "ctrl"
  },

  "alt": {
    keyCode: 18
  },

  "rightAlt": {
    keyCode: 18,
    shortForm: "alt"
  },

  "capsLock": {
    keyCode: 20,
    shortForm: "CAPS"
  },

  "escape": {
    keyCode: 27,
    shortForm: "ESC"
  },

  "spaceBar": {
    keyCode: 32,
    shortForm: "&nbsp;"
  },

  "pageUp": {
    keyCode: 33,
    shortForm: "PU"
  },

  "pageDown": {
    keyCode: 34,
    shortForm: "PD"
  },

  "end": {
    keyCode: 35
  },

  "home": {
    keyCode: 36,
    shortForm: "HM"
  },

  "leftArrow": {
    keyCode: 37
  },

  "upArrow": {
    keyCode: 38
  },

  "rightArrow": {
    keyCode: 39
  },

  "downArrow": {
    keyCode: 40
  },

  "insert": {
    keyCode: 45,
    disabled: true,
    shortForm: "INS"
  },

  "delete": {
    keyCode: 46
  },

  "0": {
    keyCode: 48,
    shiftCharecter: ")"
  },

  "1": {
    keyCode: 49,
    shiftCharecter: "!"
  },

  "2": {
    keyCode: 50,
    shiftCharecter: "@"
  },

  "3": {
    keyCode: 51,
    shiftCharecter: "#"
  },

  "4": {
    keyCode: 52,
    shiftCharecter: "$"
  },

  "5": {
    keyCode: 53,
    shiftCharecter: "%"
  },

  "6": {
    keyCode: 54,
    shiftCharecter: "^"
  },

  "7": {
    keyCode: 55,
    shiftCharecter: "&"
  },

  "8": {
    keyCode: 56,
    shiftCharecter: "*"
  },

  "9": {
    keyCode: 57,
    shiftCharecter: "("
  },

  "a": {
    keyCode: 65
  },

  "b": {
    keyCode: 66
  },

  "c": {
    keyCode: 67
  },

  "d": {
    keyCode: 68
  },

  "e": {
    keyCode: 69
  },

  "f": {
    keyCode: 70
  },

  "g": {
    keyCode: 71
  },

  "h": {
    keyCode: 72
  },

  "i": {
    keyCode: 73
  },

  "j": {
    keyCode: 74
  },

  "k": {
    keyCode: 75
  },

  "l": {
    keyCode: 76
  },

  "m": {
    keyCode: 77
  },

  "n": {
    keyCode: 78
  },

  "o": {
    keyCode: 79
  },

  "p": {
    keyCode: 80
  },

  "q": {
    keyCode: 81
  },

  "r": {
    keyCode: 82
  },

  "s": {
    keyCode: 83
  },

  "t": {
    keyCode: 84
  },

  "u": {
    keyCode: 85
  },

  "v": {
    keyCode: 86
  },

  "w": {
    keyCode: 87
  },

  "x": {
    keyCode: 88
  },

  "y": {
    keyCode: 89
  },

  "z": {
    keyCode: 90
  },

  "contextMenu": {
    keyCode: 93,
    shortForm: "&nbsp;"
  },

  "super": {
    keyCode: 93
  },

  "numpad_0": {
    keyCode: 96
  },

  "numpad_1": {
    keyCode: 97
  },

  "numpad_2": {
    keyCode: 98
  },

  "numpad_3": {
    keyCode: 99
  },

  "numpad_4": {
    keyCode: 100
  },

  "numpad_5": {
    keyCode: 101
  },

  "numpad_6": {
    keyCode: 102
  },

  "numpad_7": {
    keyCode: 103
  },

  "numpad_8": {
    keyCode: 104
  },

  "numpad_9": {
    keyCode: 105
  },

  "f1": {
    keyCode: 112,
    disabled: true
  },

  "f2": {
    keyCode: 113,
    disabled: true
  },

  "f3": {
    keyCode: 114,
    disabled: true
  },

  "f4": {
    keyCode: 115,
    disabled: true
  },

  "f5": {
    keyCode: 116,
    disabled: true
  },

  "f6": {
    keyCode: 117,
    disabled: true
  },

  "f7": {
    keyCode: 118,
    disabled: true
  },

  "f8": {
    keyCode: 119,
    disabled: true
  },

  "f9": {
    keyCode: 120,
    disabled: true
  },

  "f10": {
    keyCode: 121,
    disabled: true
  },

  "f11": {
    keyCode: 122,
    disabled: true
  },

  "f12": {
    keyCode: 123,
    disabled: true
  },

  ";": {
    keyCode: 186,
    shiftCharecter: ":",
    className: "semi-colon"
  },

  "=": {
    keyCode: 187,
    shiftCharecter: "+",
    className: "equal-to-symbol"
  },

  ",": {
    keyCode: 188,
    shiftCharecter: "<",
    className: "comma"
  },

  "-": {
    keyCode: 189,
    shiftCharecter: "_",
    className: "minus"
  },

  ".": {
    keyCode: 190,
    shiftCharecter: ">",
    className: "full-stop"
  },

  "/": {
    keyCode: 191,
    shiftCharecter: "?",
    className: "forward-slash"
  },

  "`": {
    keyCode: 192,
    shiftCharecter: "~",
    className: "backtick"
  },

  "[": {
    keyCode: 219,
    shiftCharecter: "{",
    className: "left-square-bracket"
  },

  "\\": {
    keyCode: 220,
    shiftCharecter: "|",
    className: "back-slash"
  },

  "]": {
    keyCode: 221,
    shiftCharecter: "}",
    className: "right-square-bracket"
  },

  "'": {
    keyCode: 222,
    shiftCharecter: '"',
    className: "single-quote"
  },

  "fn": {
    keyCode: 0,
    className: "function"
  }
};

export default keyCodes;