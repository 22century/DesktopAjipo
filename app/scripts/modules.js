(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

    change: function (name, message) {
        _balloon.open(message);
        _imgAvatar.src = 'images/ajipoko/' + name + '.png';
    },

    resetTimer: function () {
        prividenie.clearTimer();
        prividenie.setTimer();
    },

    setTimer: function () {
        _timerId = setTimeout(function(){
            _timerId = 0;
            var msgs = MESSAGES.RANDOM.sample();
            prividenie.change(msgs[0], msgs[1]);
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
        prividenie.change(msgs[0], msgs[1]);
        prividenie.resetTimer();
    },

    mac: function () {
        var msgs = MESSAGES.MAC.sample();
        prividenie.change(msgs[0], msgs[1]);
        prividenie.resetTimer();
    },

    sleep: function () {
        var msgs = MESSAGES.SLEEP.sample();
        prividenie.change(msgs[0], msgs[1]);
        prividenie.resetTimer();
    }

};

module.exports = Prividenie;

},{"./balloon.js":3,"./messages.js":4}],2:[function(require,module,exports){
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

},{"./Prividenie.js":1,"./social.js":6,"nw.gui":"nw.gui"}],3:[function(require,module,exports){
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
        if (_timerId > 0) {
            clearTimeout(_timerId);
        }
        _timerId = setTimeout(balloon.close, 5000);
    },

    close: function () {
        _divBalloon.style.display = 'none';
        _pMessage.innerHTML = '';
        if (_timerId > 0) {
            clearTimeout(_timerId);
        }
    }

};

module.exports = Balloon;

},{}],4:[function(require,module,exports){
const MESSAGES =
{
	HEAD: [
		['talk' , '°( [ I I]) ＜ 帽子だと思ったか？本体だよ！'],
		['talk' , '°( [ I I]) ＜ なんや'],
		['popin' , '°( [ I I])ｑ ＜ ｲｪｽ!'],
		['popin' , '°( [ I I]) ＜ フレッシュ！'],
		['popin' , '°( [ I I]) ＜ オウ早'],
		['popin' , '（ l _ l ）ポピーン！'],
		['udon'  , '( [＞ ＜]) ＜ バンバン！'],
		['udon'  , '( [＞ ＜]) ＜ Arialか… 吐き気がする…'],
		['udon'  , '( [＞ ＜]) ＜ ここのカーニングが…<br /><br />°( [ I I]) ＜ うるさい黙れ']
	],
	EYE: [
		['weep1' , 'ｷﾞｬｧｧｧｧｧ' ],
		['weep1' , '目ｶﾞｧｧｧｧｧ'],
		['weep2' , 'ﾔﾒﾛｫｫｫｫｫ'],
		['weep2' , '絶許ん！'],
		['weep1' , '(｡ŏ﹏ŏ)ふえぇ！'],
		['weep2' , '(｡ŏ﹏ŏ｡)ﾋﾞｴｪｪｪｪｪ！']
	],
	BREAST: [
		['normal', '（迫真）'],
		['normal', '・・・・・'],
		['normal', '(｡◔ˇ-ˇ◔｡)'],
		['normal', '？！'],
		['talk' , 'ｵｳｺﾗ'],
		['talk' , 'あのっ？！'],
		['talk' , 'あの…'],
		['weep2' , 'ｽｹﾍﾞｪ…'],
		['talk' , 'なんなの…'],
		['talk' , 'うわぁ…'],
		['talk' , 'やめろォ！'],
		['popin' , '中身おっさんやぞ！'],
		['popin' , 'というセクハラだったのさ…'],
		['weep1' , '(｡･˘▿ˇ･｡) ＜ やめたげてよぉ！']
	],
	RANDOM: [
		['normal', '・・・・・'],
		['normal', 'あほか'],
		['normal', '_(:･ 」∠)_)))))) ｶｻｶｻｶｻｶｻｶｻ'],
		['normal','ん゛ん゛ん゛ん゛ん゛ん゛ん゛ん゛ん゛ん゛！！（肯定'],
		['talk' , 'はい'],
		['talk' , 'hai'],
		['talk' , 'ゴン！'],
		['talk' , 'ドン！'],
		['talk' , 'ドンドンドン！'],
		['talk' , 'うーさー殴りたい'],
		['talk' , '＾ー＾'],
		['talk' , '^-^?!'],
		['talk' , 'うるせー！'],
		['talk' , '？！'],
		['talk' , 'なんや'],
		['talk' , 'なんですか'],
		['talk' , 'ﾔﾍﾞｴﾖﾔﾍﾞｴﾖ…'],
		['talk' , 'ｳｪｰｰｰｰｰｰｰｰｰｰｯ?!'],
		['talk' , 'あの…'],
		['talk' , 'あのっ？！'],
		['talk' , 'ﾌﾋﾋ'],
		['talk' , 'ﾎﾋﾋ'],
		['talk' , 'ﾎﾋｰ…ﾎﾋﾋｰ…'],
		['talk' , 'ﾋｿﾋｿ…'],
		['talk' , 'どういう事なの…'],
		['talk' , 'はまちゃん…'],
		['talk' , 'はー、はまちゃん'],
		['talk' , 'はー'],
		['talk' , 'ｸｽｸｽ…'],
		['talk' , 'ﾄﾞﾔｧ…'],
		['talk' , '三 ⊂(　 っ.･.)っ　　°( [ I I])'],
		['talk' , '(｡･˘▿ˇ･｡) ＜ ・・・'],
		['talk' , '(๑′・▽・‵๑)'],
		['talk' , '┗|´o`|┛'],
		['talk' , 'd三d( ╹◡)b三b'],
		['talk' , 'd三d(^-^)b三b'],
		['talk' , '^-^b=b ｼｭﾊﾞﾊﾞﾊﾞ'],
		['talk' , 'Operaとかちょっと…'],
		['talk' , '太もも…太もも…'],
		['talk' , 'すべすべ…すべすべ…'],
		['talk' , '許ん！'],
		['talk' , 'ひびきさんって笑うんだ…'],
		['talk' , 'Helveticaだと思ったか？Arialだよ！'],
		['talk' , 'うーさー燃やしたい'],
		['talk' , 'なあ…ええやろ…？'],
		['talk' , 'ｽｯ'],
		['talk' , '逃ん！'],
		['talk' ,'シャバの空気……美味すぎ？！'],
		['talk' , 'あほ'],
		['talk' , 'そう…そのまま飲み込んで…僕のリモコン爆弾…'],
		['talk' , '（ﾋｿﾋｿ…あの人のMacBook…ｸｽｸｽ…'],
		['talk' , 'はぁ〜MBPすべすべﾍﾟﾛﾍﾟﾛ'],
		['talk' , 'gomi'],
		['talk' , 'うっへっへ～脱がしたるでえ～'],
		['popin' , 'コーラうめえ！コーラうめえ！'],
		['popin' , 'はまちゃん… はまちゃん…'],
		['popin' , '（ l _ l ）どやっ'],
		['popin' , 'ポピーン！'],
		['popin' , 'ぽぴーん！'],
		['popin' , 'すべすべｲｲﾜｧ…'],
		['popin' , 'ほぅら、おはぎだよ〜 °( [ I I])つ *~●'],
		['popin' , 'd=(^-^)=b うそです'],
		['popin' , '爪弾くは荒ぶる調べ！'],
		['popin' , '死にかけフレッシュ！キュアあじぽ！'],
		['popin' , '（ﾁﾗｯﾁﾗｯ'],
		['popin' , '強くなりたい♂'],
		['popin' , 'ｱｻﾋｽｳｩﾊﾟｧﾄﾞｩｩｪｪｲ'],
		['popin' , '^-^o=b ｲｲﾈ!'],
		['weep1' , 'レッドブル…レッドブル…'],
		['weep2' , 'ﾋｯﾋｯﾌｰﾋｯﾋﾎﾋﾋ'],
		['weep1' , '(｡ŏ﹏ŏ)ふえぇ！'],
		['weep2' , '(｡ŏ﹏ŏ｡)ﾋﾞｴｪｪｪｪｪ！'],
		['weep2' , '＼たすけてはまちゃん！／'],
		['udon'  , 'UDON NIGHT はよ'],
		['udon'  , 'ｳｯﾙｯｾｰｰｰ!?'],
		['udon'  , 'フォントクラスタ怖い…'],
		['udon'  , '( [＞ ＜]) ＜ ほらうどんきたよ ほらほらほら うどんだようどんうどんほらうどんだよ'],
		['udon'  , '( [＞ ＜]) ＜ フ　ォ　ン　ト'],
		['udon'  , '( [＞ ＜]) ＜ o^-^o=3 ←くるま'],
		['udon'  , '( [＞ ＜]) ＜ ((o^-^o)) ←こっちに向かってくるくるま'],
		['udon'  , '( [＞ ＜]) ＜ うどんは国民食'],
		['udon'  , '( [＞ ＜]) ＜ とりあえず小塚使っとけみたいなの許さない'],
		['udon'  , '( [＞ ＜]) ＜ これ、モリサワのオーラ出てるよね'],
		['udon'  , '( [＞ ＜]) ＜ ^-^-^-^-^-^-^-^<br /><br />°( [ I I]) ＜ ^-...'],
		['udon'  , '( [＞ ＜]) ＜ でもあの同人誌みかちゃんフォントですよ？'],
		['udon'  , '( [＞ ＜]) ＜ きたよきたよあくあフォントきたよ'],
		['udon'  , '( ╹◡╹ ) < にせあじぽだよー'],
		['udon'  , '( [＞ ＜]) ＜ 金文体…']
	],
	MAC: [
		['mac1'  , 'すべすべ…'],
		['mac2'  , 'すべすべｲｲﾜｧ…'],
		['mac1'  , 'ｷﾞｬｯ!'],
		['mac2'  , 'ｷﾞｬｱｱｱｱｱｱｱｱ'],
		['mac1'  , 'あぁん…'],
		['mac1'  , '(｡ŏ﹏ŏ)ふえぇ！'],
		['mac2'  , '(｡ŏ﹏ŏ｡)ﾋﾞｴｪｪｪｪｪ！'],
		['mac1'  , 'ﾔﾒﾛｫ!']
	],
	BOOT: [
		['talk' , 'むくり'],
		['popin' , 'はまちゃんただいま！'],
		['popin' , 'はまちゃんおはよう！'],
		['talk' , 'おはようなのよ'],
		['popin' , 'ポピーン！'],
		['normal', 'なんや'],
		['normal', 'ﾄﾞｬｧ…'],
		['normal' , '起ん！']
	],
	SLEEP: [
		['talk' , 'はい'],
		['normal', 'hai'],
		['normal', 'btr'],
		['normal', '_(:3」∠)_'],
		['normal', '[(:3[　　]'],
		['popin' , 'はまちゃんおやすみ'],
		['normal', 'Zzz...'],
		['normal', '寝ん！']
	]
};

module.exports = MESSAGES;

},{}],5:[function(require,module,exports){
arguments[4][1][0].apply(exports,arguments)
},{"./balloon.js":3,"./messages.js":4,"dup":1}],6:[function(require,module,exports){
/**
 * @type {Social}
 */
var social, Social = function () {
    social = this;
};

var gui = require('nw.gui');

Social.prototype = {

	getTweets: function () {
		//
	},

	getNicovideos: function () {
        var xml = social.request('http://www.nicovideo.jp/mylist/11910840?rss=2.0');
        var fragment = social.createXmlFragment(xml);
        var item = fragment.querySelector('item');

        var title = item.querySelector('title').textContent;
        var img = item.querySelector('description > img');
        var url = item.getElementsByTagName('link').innerHTML;

        gui.Shell.openExternal(url);
        fragment = null;
	},

	createXmlFragment: function (xmlString) {
        var df = document.createDocumentFragment();
        var container = document.createElement('article');
        container.innerHTML = xmlString;
        df.appendChild(container);
        return df;
    },

    request: function (url) {
        var request = new XMLHttpRequest();
        request.open('GET', url, false);
        request.send();
        if (request.status === 200) {
            return request.responseText;
        } else {
            return null;
        }
    }

};

module.exports = Social;

},{"nw.gui":"nw.gui"}]},{},[2,3,4,5,6]);
