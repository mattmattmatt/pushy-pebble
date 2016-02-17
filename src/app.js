/* global module */

var UI = require('ui');
var Settings = require('settings');

var clayConfig = require('./clay-settings');
var Clay = require('./clay');
var c = new Clay(clayConfig);

var screenMain = require('./screen-main').screen();

(function init() {
    screenMain.show();
})();
