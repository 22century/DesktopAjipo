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