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