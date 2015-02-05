/**
 * intro
 */

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
    console.log('aaaa');
    setTimeout(arguments.callee, 100);
})();
