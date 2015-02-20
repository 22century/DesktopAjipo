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
