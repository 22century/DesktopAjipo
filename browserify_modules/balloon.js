/**
 * @type {Balloon}
 */
var balloon, Balloon = function () {
    balloon = this;
};

var _divBalloon = document.querySelector('#balloon'),
    _pMessage = document.querySelector('#message'),
    _timerId = 0;

Balloon.prototype = {

    open: function (text) {
        _divBalloon.style.display = 'block';
        _pMessage.innerHTML = text;
        _timerId = setTimeout(balloon.close, 5000);
    },

    close: function () {
        _divBalloon.style.display = 'none';
        _pMessage.innerHTML = '';
        clearTimeout(_timerId);
    }

};

module.exports = Balloon;
