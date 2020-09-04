"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.navigationOffCanvas = navigationOffCanvas;

var _hammerjs = require("hammerjs");

var Hammer = _interopRequireWildcard(_hammerjs);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

console.log("das"); // import Hammer from "hammerjs"
function navigationOffCanvas() {
  var d = document,
      w = window,
      panel = d.querySelector(".panel"),
      panelBtn = d.querySelector(".panel-button"),
      hamburger = d.querySelector(".hamburger"),
      mq = w.matchMedia("(min-width: 64em)"),
      hammerBody = new Hammer(d.body),
      hammerPanel = new Hammer(panel);

  function closePanel(mq) {
    if (mq.matches) {
      panel.classList.remove("is-active");
      hamburger.classList.remove("is-active");
    }
  }
  function hammerTouches(e) {
    if (e.type == "swipeleft") {
      panel.classList.remove("is-active");
      hamburger.classList.remove("is-active");
    } else if (e.type == "swiperight") {
      panel.classList.toggle("is-active");
      hamburger.classList.toggle("is-active");
    }
  }

  panelBtn.addEventListener("click", function (e) {
    e.preventDefault();
    panel.classList.toggle("is-active");
    hamburger.classList.toggle("is-active");
  });

  mq.addListener(closePanel);
  closePanel(mq);

  hammerPanel.on("swipeleft swiperight", hammerTouches);
  hammerBody.on("swipeleft swiperight", hammerTouches);
}