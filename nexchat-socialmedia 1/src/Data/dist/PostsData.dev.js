"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PostsData = void 0;

var _postpic = _interopRequireDefault(require("../img/postpic1.jpg"));

var _postpic2 = _interopRequireDefault(require("../img/postpic2.jpg"));

var _postpic3 = _interopRequireDefault(require("../img/postpic3.JPG"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PostsData = [{
  img: _postpic["default"],
  name: 'Ibra',
  desc: "Happy New Year all friends! #2023",
  likes: 2300,
  liked: true
}, {
  img: _postpic2["default"],
  name: 'Mr Yusuf',
  desc: "One TBT :)",
  likes: 2300,
  liked: false
}, {
  img: _postpic3["default"],
  name: "Salena Gomez",
  desc: "At Archery Festival",
  likes: 800,
  liked: false
}];
exports.PostsData = PostsData;