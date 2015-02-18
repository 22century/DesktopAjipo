/**
 * @type {Prividenie}
 */
var prividenie, Prividenie = function () {
    prividenie = this;
};

const MESSAGES = require('./messages.js');

var _balloon = new(require('./balloon.js')),
    _timerId = 0,
    _imgAvatar = document.querySelector('#avatar');

Prividenie.prototype = {

    change: function (name) {
        _imgAvatar.src = 'images/ajipoko/' + name + '.png';
    },

    resetTimer: function () {
        prividenie.clearTimer();
        prividenie.setTimer();
    },

    setTimer: function () {
        if (_timerId > 0) {
            prividenie.clearTimer();
        }
        _timerId = setTimeout(function(){
            _timerId = 0;
            prividenie.random();
            prividenie.setTimer();
        }, 5 * 1000);
        console.log('setTimer:', _timerId);
    },

    clearTimer: function () {
        console.log('clearTimer:', _timerId);
        clearTimeout(_timerId);
    },

    random: function () {
        var msgs = MESSAGES.RANDOM.sample();
        prividenie.change(msgs[0]);
        _balloon.open(msgs[1]);
        prividenie.resetTimer();
    },

    mac: function () {
        var msgs = MESSAGES.MAC.sample();
        prividenie.change(msgs[0]);
        _balloon.open(msgs[1]);
    },

    sleep: function () {
        var msgs = MESSAGES.SLEEP.sample();
        prividenie.change(msgs[0]);
        _balloon.open(msgs[1]);
    }

};

module.exports = Prividenie;
