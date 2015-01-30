(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var messages = {
	head : [
		['smile' , '°( [ I I]) ＜ 帽子だと思ったか？本体だよ！'],
		['smile' , '°( [ I I]) ＜ なんや'],
		['popin' , '°( [ I I])ｑ ＜ ｲｪｽ!'],
		['popin' , '°( [ I I]) ＜ フレッシュ！'],
		['popin' , '°( [ I I]) ＜ オウ早'],
		['popin' , '（ l _ l ）ポピーン！'],
		['udon'  , '( [＞ ＜]) ＜ バンバン！'],
		['udon'  , '( [＞ ＜]) ＜ Arialか… 吐き気がする…'],
		['udon'  , '( [＞ ＜]) ＜ ここのカーニングが…<br /><br />°( [ I I]) ＜ うるさい黙れ'],
	],
	eye : [
		['weep1' , 'ｷﾞｬｧｧｧｧｧ' ],
		['weep1' , '目ｶﾞｧｧｧｧｧ'],
		['weep2' , 'ﾔﾒﾛｫｫｫｫｫ'],
		['weep2' , '絶許ん！'],
		['weep1' , '(｡ŏ﹏ŏ)ふえぇ！'],
		['weep2' , '(｡ŏ﹏ŏ｡)ﾋﾞｴｪｪｪｪｪ！'],
	],
	breast : [
		['normal', '（迫真）'],
		['normal', '・・・・・'],
		['normal', '(｡◔ˇ-ˇ◔｡)'],
		['normal', '？！'],
		['smile' , 'ｵｳｺﾗ'],
		['smile' , 'あのっ？！'],
		['smile' , 'あの…'],
		['weep2' , 'ｽｹﾍﾞｪ…'],
		['smile' , 'なんなの…'],
		['smile' , 'うわぁ…'],
		['smile' , 'やめろォ！'],
		['popin' , '中身おっさんやぞ！'],
		['popin' , 'というセクハラだったのさ…'],
		['weep1' , '(｡･˘▿ˇ･｡) ＜ やめたげてよぉ！'],
	],
	normal : [
		['normal', '・・・・・'],
		['normal', 'あほか'],
		['normal', '_(:･ 」∠)_)))))) ｶｻｶｻｶｻｶｻｶｻ'],
		['normal','ん゛ん゛ん゛ん゛ん゛ん゛ん゛ん゛ん゛ん゛！！（肯定'],
		['smile' , 'はい'],
		['smile' , 'hai'],
		['smile' , 'ゴン！'],
		['smile' , 'ドン！'],
		['smile' , 'ドンドンドン！'],
		['smile' , 'うーさー殴りたい'],
		['smile' , '＾ー＾'],
		['smile' , '^-^?!'],
		['smile' , 'うるせー！'],
		['smile' , '？！'],
		['smile' , 'なんや'],
		['smile' , 'なんですか'],
		['smile' , 'ﾔﾍﾞｴﾖﾔﾍﾞｴﾖ…'],
		['smile' , 'ｳｪｰｰｰｰｰｰｰｰｰｰｯ?!'],
		['smile' , 'あの…'],
		['smile' , 'あのっ？！'],
		['smile' , 'ﾌﾋﾋ'],
		['smile' , 'ﾎﾋﾋ'],
		['smile' , 'ﾎﾋｰ…ﾎﾋﾋｰ…'],
		['smile' , 'ﾋｿﾋｿ…'],
		['smile' , 'どういう事なの…'],
		['smile' , 'はまちゃん…'],
		['smile' , 'はー、はまちゃん'],
		['smile' , 'はー'],
		['smile' , 'ｸｽｸｽ…'],
		['smile' , 'ﾄﾞﾔｧ…'],
		['smile' , '三 ⊂(　 っ.･.)っ　　°( [ I I])'],
		['smile' , '(｡･˘▿ˇ･｡) ＜ ・・・'],
		['smile' , '(๑′・▽・‵๑)'],
		['smile' , '┗|´o`|┛'],
		['smile' , 'd三d( ╹◡)b三b'],
		['smile' , 'd三d(^-^)b三b'],
		['smile' , '^-^b=b ｼｭﾊﾞﾊﾞﾊﾞ'],
		['smile' , 'Operaとかちょっと…'],
		['smile' , '太もも…太もも…'],
		['smile' , 'すべすべ…すべすべ…'],
		['smile' , '許ん！'],
		['smile' , 'ひびきさんって笑うんだ…'],
		['smile' , 'Helveticaだと思ったか？Arialだよ！'],
		['smile' , 'うーさー燃やしたい'],
		['smile' , 'なあ…ええやろ…？'],
		['smile' , 'ｽｯ'],
		['smile' , '逃ん！'],
		['smile' ,'シャバの空気……美味すぎ？！'],
		['smile' , 'あほ'],
		['smile' , 'そう…そのまま飲み込んで…僕のリモコン爆弾…'],
		['smile' , '（ﾋｿﾋｿ…あの人のMacBook…ｸｽｸｽ…'],
		['smile' , 'はぁ〜MBPすべすべﾍﾟﾛﾍﾟﾛ'],
		['smile' , 'gomi'],
		['smile' , 'うっへっへ～脱がしたるでえ～'],
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
		['udon'  , '( [＞ ＜]) ＜ 金文体…'],
		
		
	],
	mac: [
		['mac1'  , 'すべすべ…'],
		['mac2'  , 'すべすべｲｲﾜｧ…'],
		['mac1'  , 'ｷﾞｬｯ!'],
		['mac2'  , 'ｷﾞｬｱｱｱｱｱｱｱｱ'],
		['mac1'  , 'あぁん…'],
		['mac1'  , '(｡ŏ﹏ŏ)ふえぇ！'],
		['mac2'  , '(｡ŏ﹏ŏ｡)ﾋﾞｴｪｪｪｪｪ！'],
		['mac1'  , 'ﾔﾒﾛｫ!'],
	],
	boot:[
		['smile' , 'むくり'],
		['popin' , 'はまちゃんただいま！'],
		['popin' , 'はまちゃんおはよう！'],
		['smile' , 'おはようなのよ'],
		['popin' , 'ポピーン！'],
		['normal', 'なんや'],
		['normal', 'ﾄﾞｬｧ…'],
		['normal' , '起ん！'],
	],
	sleep : [
		['smile' , 'はい'],
		['normal', 'hai'],
		['normal', 'btr'],
		['normal', '_(:3」∠)_'],
		['normal', '[(:3[　　]'],
		['popin' , 'はまちゃんおやすみ'],
		['normal', 'Zzz...'],
		['normal', '寝ん！']
	],
	lastKey: null,
	getMessage: function(name){
		var arr = this[name];
		var key = 0;
		do {
			key = Math.random()*arr.length|0;
		} while (key===this.lastKey);
		this.lastKey = key;
		return arr[key];
	}
}

},{}],2:[function(require,module,exports){
/**
 * Prividenie
 */
var ajipo = 
{
	init: function(){
		this.contextmenu.init();
		this.shell.init();
		this.balloon.init();
		this.talk.init();
		delete this.init;
	},
	
	/** 本体 **/
	shell: {
		self: {},
		init: function(){
			this.self = $('#shell')[0];
			delete this.init;
		},
		change: function(index){
			this.self.src = 'img/ajipoko_'+index+'.png';
		}
	},
	
	/** 右クリックメニュー */
	contextmenu: {
		self: {},
		init: function(){
			if (typeof air.NativeMenu!='function') return false;
			
			this.self = new air.NativeMenu();
			this.addItem('ドン！',this.don);
			this.addItem('動画はよ',social.niconico.rss);
			this.addItem('Macを投げる', this.mac);
			this.addItem('あじぽさんのTwitter',this.home);
			this.addItem('寝ろ', this.btr);
			
			$('#shell').bind('contextmenu',function(e){
				e.preventDefault();
				ajipo.contextmenu.self.display(nativeWindow.stage, e.clientX, e.clientY);
			});
			
			delete this.init;
		},
		home: function(){
			air.navigateToURL(new air.URLRequest('http://twitter.com/ajipo'))
		},
		don: function(){
			ajipo.talk.exec('normal');
		},
		mac: function(){
			ajipo.talk.exec('mac');
		},
		btr: function(){
			ajipo.talk.exec('sleep');
			setTimeout(nativeWindow.close, 1000 * 2);
		},
		addItem: function(name,func){
			var cmd = this.self.addItem(new air.NativeMenuItem(name)); 
			cmd.addEventListener(air.Event.SELECT, func);
		}
	},
	
	/** ふきだし */
	balloon: {
		$self: {},
		timer: null,
		init : function(){
			this.$self = $('#balloon');
			delete this.init;
		},
		open: function(val){
			ajipo.balloon.setTimer(ajipo.balloon.close);
			ajipo.balloon.$self.hide().html(val)
			.find('a').bind('click', function(){
				// 標準ブラウザで開く
				try { air.navigateToURL(new air.URLRequest(this.href)) } 
				catch (e) {}
				return false;
			})
			.end()
				.fadeIn('fast');
			return ajipo.balloon.$self;
		},
		close: function(){
			ajipo.balloon.clearTimer();
			ajipo.balloon.$self.hide().text('');
			ajipo.shell.change('normal');
			return ajipo.balloon.$self;
		},
		// タイマー
		setTimer: function(func){
			if (ajipo.balloon.timer!=null) ajipo.balloon.clearTimer();
			ajipo.balloon.timer = setInterval(func, 10*1000);
		},
		// タイマー初期化
		clearTimer: function(){
			clearTimeout(ajipo.balloon.timer);
			ajipo.balloon.timer = null;
		}
	},
	
	/** 会話 */
	talk: {
		timer: null,
		init: function(){
			// タッチイベント
			$('.touch').bind('click',function(){
				ajipo.talk.exec($(this).val());
				ajipo.talk.setTimer(ajipo.talk.random);
			});
			this.exec('boot');
			ajipo.talk.setTimer(ajipo.talk.random);
			delete this.init;
		},
		random: function(){
			if ((Math.random()*10|0)==0) {
				social.twitter.rss(); // 150/h
			} else if ((Math.random()*15|0)==0) {
				social.niconico.rss();
			} else {
				ajipo.talk.exec('normal');
			}
		},
		exec: function(){
			var msg = {};
			var imgIndex = 0;
			var msgText  = '';
			// messages -> messages.js
			if (typeof arguments[0]=='string') {
				msg = messages.getMessage(arguments[0]);
			} else if (typeof arguments[0]=='object') {
				msg = arguments[0];
			} else {
				return false;
			}
			ajipo.shell.change(msg[0]); // image index
			ajipo.balloon.open(msg[1]); // message text
		},
		setTimer: function(func){
			if (ajipo.talk.timer!=null) ajipo.talk.clearTimer();
			ajipo.talk.timer = setInterval(func, 60*1000);
		},
		// タイマー初期化
		clearTimer: function(){
			clearInterval(ajipo.talk.timer);
			ajipo.talk.timer = null;
		}
	}
	
}

ajipo.init();

},{}],3:[function(require,module,exports){
/**
 * setup.js
 */

(function(){
	if (typeof String.trim=='undefined') {
		String.prototype.trim = function(){
			return this.replace(/^\s+|\s+$/, '');
		}
	}
	
	Array.prototype.shuffle = function() {
	    var i = this.length;
	    while(i){
	        var j = Math.random()*i|0;
	        var t = this[--i];
	        this[i] = this[j];
	        this[j] = t;
	    }
	    return this;
	}
	
	if (typeof nativeWindow != 'undefined') {
		document.getElementById('shell')
			.addEventListener('mousedown', 
				function(e){
					nativeWindow.startMove();
		}, false);
		nativeWindow.alwaysInFront = true;
	}
		
})();
},{}],4:[function(require,module,exports){
var social = {
	/** Twitter */
	twitter: {
		init: function(){
		},
		rss: function(){
			try {
				$.ajax({
					type: 'GET',
					url: 'http://twitter.com/statuses/user_timeline/16796460.rss',
					dataType: 'xml',
					cache: false,
					success: social.twitter.insert
				});
			} catch (e) {
			//	console.log('rss error.');
			}
		},
		insert: function(data){
			var $data = $(data);
			var items = [];
			$data.find('item title').each(function(){
				var o = $(this);
				var msg = [];
				msg.push('smile'); // image index
				msg.push(o.text().replace('ajipo:', ''));
				items.push(msg);
			});
			// prividenie.js
			ajipo.talk.exec( social.getMessage(items) );
		}
	},
	niconico: {
		init: function(){
			//	
		},
		rss: function(){
			$.ajax({
				type: 'GET',
				url: 'http://www.nicovideo.jp/mylist/11910840?rss=2.0',
				dataType: 'xml',
				cache: false,
				success: social.niconico.insert
			});
		},
		insert: function(data){
			var $data = $(data);
			var items = [];
			$data.find('item').each(function(){
				var o = $(this);
				var imgTag = o.find('description').text().match(/(<img[^>]+>)/)[0];
				var title  = o.find('title').text();
				var url = o.find('link').text();
				var msg = []; 
				msg.push('popin'); // image index
				msg.push(('<p>'+ imgTag +'</p><p>'+ title +'</p>').link(url));
				items.push(msg);
			});
			;
			// prividenie.js
			ajipo.talk.exec( social.getMessage(items) );
		}
	},
	lastKey: null
	,
	getMessage: function(arr){
		var key = 0;
		do {
			key = Math.random()*arr.length|0;
		} while (key===this.lastKey);
		this.lastKey = key;
		return arr[key];
	}
}
},{}]},{},[1,2,3,4]);
