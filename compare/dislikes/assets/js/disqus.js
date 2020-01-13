var urlsplit = location.href.split("/")
var user = "";

if (!urlsplit[5]) {
	user = "kJQP7kiw5Fk-RgKAFK5djSk";
} else {
	user = urlsplit[5];
}

var disqus_config = function () {
    this.page.url = 'https://livecounts.io/live-view-count/compare/'+user;
	this.page.identifier = user;
};

(function() {
var d = document, s = d.createElement('script');
s.src = 'https://livecounts-io.disqus.com/embed.js';
s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();