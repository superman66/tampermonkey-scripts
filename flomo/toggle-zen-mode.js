// ==UserScript==
// @name         flomo zen mode
// @namespace    https://flomoapp.com
// @version      0.1
// @description  toggle zen mode in flomoapp
// @author       You
// @require      https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.18.2/babel.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.16.0/polyfill.js
// @match        https://flomoapp.com/*
// @icon         <$ICON$>
// ==/UserScript==

var inline_src = (<><![CDATA[
let isZen = false;

function toggleZenMode() {
  if (!isZen) {
    document.querySelector('body').setAttribute('class', 'fullscreen');
    const inputBox = document.querySelector('body.fullscreen .input-box');
    inputBox.style.height = '80vh';
    isZen = true;
  } else {
    document.querySelector('body').setAttribute('class', ' ');
    const inputBox = document.querySelector('body .input-box');
    inputBox.style.height = 'auto';
    isZen = false;
  }
}

function addZenModeButton() {
  const button = document.createElement('button');
  button.innerText = !isZen ? '开启专注模式' : '关闭专注模块';
  button.style.position = 'absolute';
  button.style.top = '10px';
  button.style.right = '10px';
  button.cursor = 'pointer';
  button.style.borderRadius = '6px';
  button.style.padding = '12px 20px';
  button.style.border = '0';
  button.onclick = function () {
    toggleZenMode();
  };
  const body = document.querySelector('body');
  body.appendChild(button);
}
addZenModeButton();

]]></>).toString();
var c = Babel.transform(inline_src, { presets: [ "es2015", "es2016" ] });
eval(c.code);