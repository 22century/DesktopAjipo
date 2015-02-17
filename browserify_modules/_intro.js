var Social = require('./social.js'),
    Prividenie = require('./Prividenie.js'),
    Gui = require('nw.gui');

var _readied = false;

setTimeout(function(){
    _readied = true;
}, 5000);

(function(){
    var iframe = document.getElementById('twitter-widget-0');
    if (_readied === true) {
        return;
    } else if (iframe !== null) {
        try {
            if (iframe.contentWindow.document.querySelectorAll('.stream .tweet').length > 0) {
                return;
            }
        } finally {
            //
        }
    }
    setTimeout(arguments.callee, 100);
})();


var prividenie = new Prividenie();
prividenie.setTimer();

var menu = new Gui.Menu();

menu.append(new Gui.MenuItem({
    label: 'ドン！',
    click: prividenie.random
}));

menu.append(new Gui.MenuItem({
    label: '動画はよ',
    click: function () { /* niconico */ }
}));

menu.append(new Gui.MenuItem({
    label: 'Macを投げる',
    click: prividenie.mac
}));

menu.append(new Gui.MenuItem({
    label: 'クソリプする',
    click: function () {}
}));

menu.append(new Gui.MenuItem({
    label: '寝ろ',
    click: prividenie.sleep
}));

menu.append(new Gui.MenuItem({
    label: 'チップチューンのあじぽ',
    click: function () {}
}));

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    menu.popup(e.x, e.y);
}, false);
