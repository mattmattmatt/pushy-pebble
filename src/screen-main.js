/* global module */

var UI = require('ui');
var Settings = require('settings');

var mainScreen;

function setupEventListeners() {
    mainScreen.on('select', function(event) {
        mainScreen.hide();
    });
}

module.exports.screen = function() {
    if (!mainScreen) {
        mainScreen = new UI.Menu({
            fullscreen: true,
            backgroundColor: '#00AA00',
            textColor: '#FFFFFF',
            highlightBackgroundColor: '#FFFFFF',
            highlightTextColor: '#00AA00',
            sections: [{
                title: 'Choose a Pushbullet action',
                items: [{
                    title: 'Item 1'
                }, 
                {
                    title: 'Item 2'
                }, 
                {
                    title: 'Item 3'
                }]
            }]
        });
        setupEventListeners();
    }
    return mainScreen;
};
