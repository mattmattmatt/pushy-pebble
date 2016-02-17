/* global module */

//var clayConfig = require('settings.js');
//console.log(JSON.stringify(clayConfig));
//var Clay = require('clay');

//var clay = new Clay(clayConfig);


var UI = require('ui');
var Settings = require('settings');

var screenMain = require('./screen-main').screen();

(function init() {
    screenMain.show();
})();
