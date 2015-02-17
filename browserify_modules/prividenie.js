/**
 * @type {Prividenie}
 */
var prividenie, Prividenie = function () {
    prividenie = this;
    this._initialize();
};

const MESSAGES = require('./messages.js');

var _balloon = new(require('./balloon.js')),
    _timerId = 0,
    _imgAvatar = document.querySelector('#avatar');

Prividenie.prototype = {

    _initialize: function () {
        prividenie.setTimer();
    },

    change: function (name) {
        _imgAvatar.src = 'images/ajipoko/' + name + '.png';
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
    }

};

module.exports = Prividenie;
