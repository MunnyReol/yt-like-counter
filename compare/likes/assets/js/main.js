var YT = {};
var video1 = "";
var video2 = "";
var key = "";
var rightKeys = [];

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
        vars[key] = value
    });
    return vars
  }

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-119417406-7');

    setInterval(() => {
        $.each($('iframe'), (arr,x) => {
            let src = $(x).attr('src');
            if (src && src.match(/(ads-iframe)|(disqusads)/gi)) {
                $(x).remove();
            }
        });
    }, 300);

    var chart = new Highcharts.chart({
        chart: {
            renderTo: 'chart',
            type: 'line'
        },
        title: {
            text: 'Like Difference Graph'
        },
        xAxis: {
            type: 'datetime',
            tickPixelInterval: 150
        },
        yAxis: {
            title: {
                text: ''
            }
        },

        line: {
            marker: {
                enabled: false
            }
        },

        credits: {
            enabled: false
        },

        series: [{
            name: 'Like Difference',
        }]
    });


window.onload = () => {

    if (!getUrlVars()["v1"]) {
        video1 = "IHNzOHi8sJs"; //dududududdudududud (not darude sandstorm tho)
    } else {
        video1 = getUrlVars()["v1"];
    }

    if (!getUrlVars()["v2"]) {
        video2 = "2S24-y0Ij3Y"; //kill this love
    } else {
        video2 = getUrlVars()["v2"];
    }

        $.getJSON('https://www.googleapis.com/youtube/v3/videos?part=snippet&id='+video1+','+video2+'&key=AIzaSyAzRmWRQKbQpnAIH-Ws0ruzgxafjECdBCg', function(data) {
            if (data.items[0].id == video1) {
                YT.UpdateManager.updateTitle(data.items[0].snippet.title, data.items[1].snippet.title)
            } else {
                YT.UpdateManager.updateTitle(data.items[1].snippet.title, data.items[0].snippet.title)
            }

        YT.UpdateManager.updateThumbnail('https://i3.ytimg.com/vi/'+video1+'/maxresdefault.jpg', 'https://i3.ytimg.com/vi/'+video2+'/maxresdefault.jpg')
    })

    if (window.location.href.indexOf(video1 || video2) > -1) {
        return;
    } else {
        history.pushState(null,'',window.location.href+'?v1='+video1+'&v2='+video2)
    }
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

setInterval(function () {

  var rightKey = rightKeys[Math.floor(Math.random()*rightKeys.length)];

    $.getJSON('https://www.googleapis.com/youtube/v3/videos?part=statistics,snippet&id='+video1+','+video2+'&key='+rightKey, function(data) {
        if (data.items[0].id == video1) {
            YT.UpdateManager.updateLikes(data.items[0].statistics.likeCount, data.items[1].statistics.likeCount, parseInt(data.items[0].statistics.likeCount - data.items[1].statistics.likeCount))

            chart.series[0].addPoint([                   
                (new Date()).getTime(),
                data.items[0].statistics.likeCount - data.items[1].statistics.likeCount.toLocaleString()
            ])

        } else {
            YT.UpdateManager.updateLikes(data.items[1].statistics.likeCount, data.items[0].statistics.likeCount, parseInt(data.items[0].statistics.likeCount - data.items[1].statistics.likeCount))

            chart.series[0].addPoint([                   
                (new Date()).getTime(),
                data.items[0].statistics.likeCount - data.items[1].statistics.likeCount.toLocaleString()
            ])
        }
    }).fail(function() {
        rightKeys.pop(rightKey)
        console.log("Invalid key detected in right keys array, removing it...")
    })

}, 2500)

YT.UpdateManager = {
    updateThumbnail: function(a,b) {
        document.querySelector(".thumbnail1").src = a;
        document.querySelector(".thumbnail2").src = b;
    },

    updateTitle: function(a,b) {
        document.querySelector(".title1").innerText= a;
        document.querySelector(".title2").innerText= b;
    },

    updateLikes: function(a,b,c) {
        document.querySelector(".odo1").innerHTML=a;
        document.querySelector(".odo2").innerHTML=b;
        document.querySelector(".difference-odo").innerHTML=c;
    }
}


document.getElementById("search1").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        search1()
    }
})
document.getElementById("search2").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        search2()
    }
})

function search1() {
    var replaceurl = document.getElementById('search1').value.replace("%20", " ");
    var rightKey = rightKeys[Math.floor(Math.random()*rightKeys.length)];
    $.getJSON('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&type=video&q=' + replaceurl + '&key=' + rightKey, function(data) {
        window.location.href = '/yt-like-counter/compare/likes/?v1=' + data.items[0].id.videoId + '&v2=' + video2;
    })
}

function search2() {
    var replaceurl = document.getElementById('search2').value.replace("%20", " ");
    var rightKey = rightKeys[Math.floor(Math.random()*rightKeys.length)];
    $.getJSON('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&type=video&q=' + replaceurl + '&key=' + rightKey, function(data) {
        window.location.href = '/yt-like-counter/compare/likes/?v1=' + video1 + '&v2=' + data.items[0].id.videoId;
    })
}

  
