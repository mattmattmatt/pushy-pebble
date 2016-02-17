/* global module */

var UI = require('ui');
var Settings = require('settings');

var screenMain = require('./screen-main').screen();

(function init() {
    screenMain.show();
})();
