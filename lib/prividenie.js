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
