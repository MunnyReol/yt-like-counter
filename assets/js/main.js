var YT = {};
var rightKeys = [];
var key = "";
var video = "";

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-119417406-7');

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
        vars[key] = value
    });
    return vars
}

function search() {
    var replaceurl = document.getElementById('search').value.replace("%20", " ");
    var rightKey = rightKeys[Math.floor(Math.random()*rightKeys.length)];
    $.getJSON('https://www.googleapis.com/youtube/v3/search?part=id&maxResults=1&type=video&q=' + replaceurl + '&key=' + rightKey, function(data) {
        window.location.href = '/yt-like-counter/?q=' + data.items[0].id.videoId;
    })
}

if(!getUrlVars()["q"]){
    video = "kJQP7kiw5Fk";
} else {
	video = getUrlVars()["q"];
}

for (let i=0; i<APIKeys.length; i++) {
    setTimeout( function timer(){
        			var checkKey = APIKeys[Math.floor(Math.random()*APIKeys.length)];
			$.getJSON('https://www.googleapis.com/youtube/v3/videos?part=statistics&id=hHW1oY26kxQ&key='+checkKey, function() {
			if (rightKeys.includes(checkKey)) {
				console.log("Tried to add key that already exists in array! Returning...")
				return;
			} else {
				rightKeys.push(checkKey)
				console.log("Valid key! Added to array, trying more...")
			}
			}).fail(function() {
				if (rightKeys.includes(checkKey)) {
					rightKeys.pop(checkKey)
					console.log("Invalid key detected in array, removing it...")
				}
				console.log("Invalid key, retrying...")
		}) 
    }, i*25 );
} 

setInterval(function(){

  var rightKey = rightKeys[Math.floor(Math.random()*rightKeys.length)];

    $.getJSON('https://www.googleapis.com/youtube/v3/videos?part=statistics,liveStreamingDetails,snippet&id='+video+'&key='+rightKey, function(data) {
        if (!data.items[0].liveStreamingDetails) {
            var views = data.items[0].statistics.viewCount;
            var likes = data.items[0].statistics.likeCount;
            var channelId = data.items[0].snippet.channelId;
            var ratio = parseInt(views) / parseInt(likes);
            if (localStorage.getItem('views' + channelId) == null) {
                localStorage.setItem('likes' + channelId, parseInt(likes));
                localStorage.setItem('views' + channelId, parseInt(views));
            } else if (parseInt(localStorage.getItem('views' + channelId)) !== parseInt(views)) {
                localStorage.setItem('views' + channelId, parseInt(views));
                localStorage.setItem('likes' + channelId, parseInt(likes));
            }
            var localLikes = localStorage.getItem('likes' + channelId);
            var finalRatio = ratio;
            if (finalRatio < 1) finalRatio = 1;
            var estimatedViews = parseInt(views) + parseInt((parseInt(likes) - localLikes) * finalRatio);
            YT.UpdateManager.updateViews(estimatedViews)
        } else {
            YT.UpdateManager.updateViews(data.items[0].liveStreamingDetails.concurrentViewers)
        }
        YT.UpdateManager.updateLike(data.items[0].statistics.likeCount)
        YT.UpdateManager.updateDislike(data.items[0].statistics.dislikeCount)
        YT.UpdateManager.updateComment(data.items[0].statistics.commentCount)
        if (data.items[0].snippet.title == document.querySelector("#title").innerText) return;
        else YT.UpdateManager.updateTitle(data.items[0].snippet.title)
    }).fail(function() {
			rightKeys.pop(checkKey)
			console.log("Invalid key detected in right keys array, removing it...")
    })
}, 2000);

window.onload = () => {
    YT.UrlManager.addVideo();
    YT.UrlManager.addTheme();

    if (getUrlVars()["theme"] == "0") YT.ThemeManager.load(0)
    if (getUrlVars()["theme"] == "1") YT.ThemeManager.load(1)
    if (getUrlVars()["theme"] == "2") YT.ThemeManager.load(2)
    if (getUrlVars()["theme"] == "3") YT.ThemeManager.load(3)

    $(".links").load("/assets/global/other.html");

    $('#searchbutton').click(function() {
        search();
    });
}

document.getElementById("search").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        search();
    }
})



YT.UpdateManager = {
    updateTitle: function(a) {
        document.querySelector("#title").innerText = a;
    },

    updateViews: function(a) {
        $('#view').html(a);
    },
    
    updateLike: function(a) {
        $('#like').html(a);
    },

    updateDislike: function(a) {
        $('#dislike').html(a);
    },

    updateComment: function(a) {
        $('#comment').html(a);
    },
};

YT.UrlManager = {
	addVideo: function() {
		if (!getUrlVars()["q"]) {
			if (window.location.href.indexOf("?")>-1){
				history.pushState(null,'',window.location.href+'&q='+video)
			} else {
				history.pushState(null,'',window.location.href+'?q='+video);
			}
		}
	},
	addTheme: function() {
		if (!getUrlVars()["theme"]) {
			if (window.location.href.indexOf("?")>-1){
				history.pushState(null,'',window.location.href+'&theme=0')
			} else {
				history.pushState(null,'',window.location.href+'?theme=0');
			}
		}
	}
};




YT.ThemeManager = {
    load: function(theme) {
        switch(theme) {
            case 0: {
                $("html").css("background-color", "transparent");
                $("ul").css("background-color", "transparent");
                $(".odometer").css("color", "#24292E");
                $(".title").css("color", "#000000");
                $("#nav").css("color", "#000000");
                $(".odometer").removeClass('rainbow-text');
                $(".title").removeClass('rainbow-text');
                $("#nav").removeClass('rainbow-text');
                $("#square-dark").css("outline", "none")
                $("#square-white").css("outline-style", "solid")
                $("#square-white").css("outline-color", "black")
                $("#square-rainbow-black").css("outline", "none")
                $("#square-rainbow-white").css("outline", "none")
                
                if (window.location.href.indexOf("theme=0") > -1) {
                    return;
                } else {
                    if (window.location.href.indexOf("?") > -1) {
                        if (window.location.href.indexOf("theme=1") > -1) {
                            history.pushState(null, '', window.location.toString().replace('&theme=1', '&theme=0'));
                        }
                        if (window.location.href.indexOf("theme=2") > -1) {
                            history.pushState(null, '', window.location.toString().replace('&theme=2', '&theme=0'));
                        }
                        if (window.location.href.indexOf("theme=3") > -1) {
                            history.pushState(null, '', window.location.toString().replace('&theme=3', '&theme=0'));
                        }
                    } else {
                        if (window.location.href.indexOf("theme=1") > -1) {
                            history.pushState(null, '', window.location.toString().replace('?theme=1', '?theme=0'));
                        }
                        if (window.location.href.indexOf("theme=2") > -1) {
                            history.pushState(null, '', window.location.toString().replace('?theme=2', '?theme=0'));
                        }
                        if (window.location.href.indexOf("theme=3") > -1) {
                            history.pushState(null, '', window.location.toString().replace('?theme=3', '?theme=0'));
                        }
                    }
                }
            } break;
            
            case 1: {
                $("html").css("background-color", "black");
                $("ul").css("background-color", "black");
                $(".odometer").css("color", "#808080");
                $(".title").css("color", "#808080");
                $("#nav").css("color", "#808080");
                $(".odometer").removeClass('rainbow-text');
                $(".title").removeClass('rainbow-text');
                $("#nav").removeClass('rainbow-text');
                $("#square-dark").css("outline-style", "solid")
                $("#square-dark").css("outline-color", "white")
                $("#square-white").css("outline", "none")
                $("#square-rainbow-black").css("outline", "none")
                $("#square-rainbow-white").css("outline", "none")

                if (window.location.href.indexOf("?") > -1) {
                    if (window.location.href.indexOf("theme=0") > -1) {
                        history.pushState(null, '', window.location.toString().replace('&theme=0', '&theme=1'));
                    }
                    if (window.location.href.indexOf("theme=2") > -1) {
                        history.pushState(null, '', window.location.toString().replace('&theme=2', '&theme=1'));
                    }
                    if (window.location.href.indexOf("theme=3") > -1) {
                        history.pushState(null, '', window.location.toString().replace('&theme=3', '&theme=1'));
                    }
                } else {
                    if (window.location.href.indexOf("theme=0") > -1) {
                        history.pushState(null, '', window.location.toString().replace('?theme=0', '?theme=1'));
                    }
                    if (window.location.href.indexOf("theme=2") > -1) {
                        history.pushState(null, '', window.location.toString().replace('?theme=2', '?theme=1'));
                    }
                    if (window.location.href.indexOf("theme=3") > -1) {
                        history.pushState(null, '', window.location.toString().replace('?theme=3', '?theme=1'));
                    }
                }
            } break;

            case 2: {
                $("html").css("background-color", "black");
                $("ul").css("background-color", "black");
                $(".odometer").addClass('rainbow-text');
                $(".title").addClass('rainbow-text');
                $("#nav").addClass('rainbow-text');
                $("#square-dark").css("outline", "none")
                $("#square-white").css("outline-style", "solid")
                $("#square-white").css("outline-color", "black")
                $("#square-rainbow-black").css("outline", "none")
                $("#square-rainbow-white").css("outline", "none")

                if (window.location.href.indexOf("?") > -1) {
                    if (window.location.href.indexOf("theme=1") > -1) {
                        history.pushState(null, '', window.location.toString().replace('&theme=1', '&theme=2'));
                    }
                    if (window.location.href.indexOf("theme=0") > -1) {
                        history.pushState(null, '', window.location.toString().replace('&theme=0', '&theme=2'));
                    }
                    if (window.location.href.indexOf("theme=3") > -1) {
                        history.pushState(null, '', window.location.toString().replace('&theme=3', '&theme=2'));
                    }
                } else {
                    if (window.location.href.indexOf("theme=1") > -1) {
                        history.pushState(null, '', window.location.toString().replace('?theme=1', '?theme=2'));
                    }
                    if (window.location.href.indexOf("theme=0") > -1) {
                        history.pushState(null, '', window.location.toString().replace('?theme=0', '?theme=2'));
                    }
                    if (window.location.href.indexOf("theme=3") > -1) {
                        history.pushState(null, '', window.location.toString().replace('?theme=3', '?theme=2'));
                    }
                }

            } break;

            case 3: {
                $("html").css("background-color", "transparent");
                $("ul").css("background-color", "transparent");
                $(".odometer").addClass('rainbow-text');
                $(".title").addClass('rainbow-text');
                $("#nav").addClass('rainbow-text');
                $("#square-dark").css("outline", "none")
                $("#square-rainbow-white").css("outline-style", "solid")
                $("#square-rainbow-white").css("outline-color", "black")
                $("#square-white").css("outline", "none")
                $("#square-rainbow-black").css("outline", "none")

                if (window.location.href.indexOf("?") > -1) {
                    if (window.location.href.indexOf("theme=1") > -1) {
                        history.pushState(null, '', window.location.toString().replace('&theme=1', '&theme=3'));
                    }
                    if (window.location.href.indexOf("theme=0") > -1) {
                        history.pushState(null, '', window.location.toString().replace('&theme=0', '&theme=3'));
                    }
                    if (window.location.href.indexOf("theme=2") > -1) {
                        history.pushState(null, '', window.location.toString().replace('&theme=2', '&theme=3'));
                    }
                } else {
                    if (window.location.href.indexOf("theme=1") > -1) {
                        history.pushState(null, '', window.location.toString().replace('?theme=1', '?theme=3'));
                    }
                    if (window.location.href.indexOf("theme=0") > -1) {
                        history.pushState(null, '', window.location.toString().replace('?theme=0', '?theme=3'));
                    }
                    if (window.location.href.indexOf("theme=2") > -1) {
                        history.pushState(null, '', window.location.toString().replace('?theme=2', '?theme=3'));
                    }
                }
            } break;
        }
    }
};

