var prividenie = new (require('./Prividenie.js')),
    social = new (require('./social.js')),
    gui = require('nw.gui'),
    menu = new gui.Menu();

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


prividenie.setTimer();

menu.append(new gui.MenuItem({
    label: 'ドン！',
    click: prividenie.random
}));

menu.append(new gui.MenuItem({
    label: '動画はよ',
    click: social.getNicovideos
}));

menu.append(new gui.MenuItem({
    label: 'Macを投げる',
    click: prividenie.mac
}));

menu.append(new gui.MenuItem({
    label: 'クソリプする',
    click: function () {}
}));

menu.append(new gui.MenuItem({
    label: '寝ろ',
    click: prividenie.sleep
}));

menu.append(new gui.MenuItem({
    label: 'チップチューンのあじぽ',
    click: function () {}
}));

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    menu.popup(e.x, e.y);
}, false);
