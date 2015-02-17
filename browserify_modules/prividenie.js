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
        prividenie.clearTimer();
        prividenie.setTimer();
    },

    setTimer: function () {
        _timerId = setTimeout(function(){
            prividenie.random();
            prividenie.setTimer();
        }, 5 * 1000);
    },

    clearTimer: function () {
        clearTimeout(_timerId);
    },

    random: function () {
        var msgs = MESSAGES.RANDOM.sample();
        prividenie.change(msgs[0]);
        _balloon.open(msgs[1]);
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
