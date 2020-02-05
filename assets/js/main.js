var YT = {};
var APIKeys = ["AIzaSyC2yHOH_wuAjkgvrUAZo5dhexZsaZJB1KY", "AIzaSyCj8wGz_c4h5xW-FugbbYOHH-BtLG1psHk", "AIzaSyABWPY0xGFSEV_fp3b7RAthCyegwzr-prw", "AIzaSyBneuqXGHEXQiJlWUOv23_FA4CzpsHaS6I", "AIzaSyDsjY7zKIxE9NG3xluvZepwYHD2vjBt9lo", "AIzaSyA8wEOgIJ7LEY4iDG4Qg_Ad2VgTEWlUIrA", "AIzaSyCAICFzxvKWCfVhQUz1GSSblO3L4X74R0M", "AIzaSyB4Q3icIKTwtGEuxKu09cVaBK30FxT57cs", "AIzaSyCHooIQqQfZ3advyfy-F0KqM9Z5XUN2dTQ", "AIzaSyAs2ErkL9jq7KQ_OGmFSIoj8z4yt2yKHZI", "AIzaSyDT0_OI9Ss2Spi1IjpxhCy6JIwcnJ8cLuI", "AIzaSyBfwGkn-dQxMy_T612ClTxE0akg4FYRVHI", "AIzaSyDvQuHTDU6PE0q25RSHSAHFkY7YNncSTxs", "AIzaSyAt14oAUc2M5P7ddtF6F2o6hNOZb1F9Gh8", "AIzaSyCB4Hj3pIiIb6IaqoJvp0BoKDIygkQnT2c", "AIzaSyBt8lp3CU87gU8AQKz4BWG5mLE5kFOSfmk", "AIzaSyDpzp1OEW-axtoc5O5kyxl0S2-46WfGVJg", "AIzaSyAu5kEu3rb1cCgM6Iqlbamt6D_DNrIex_8", "AIzaSyAZEii_ygokYH2gUS7DISWORzw4dMkLU_w", "AIzaSyDUTMnWBR_DfWz7Obdj_V-YMzPnNgqzKME", "AIzaSyBA3r7t0ranMbGuQte9t7uPPd2UWvri11I", "AIzaSyD87er3n_gedLNfb_uVY6sF-5cbYE-uFHM", "AIzaSyDSrQg06OUouEYvf9eqtwMv1_HGdATZVak", "AIzaSyCSYn85k54O6ZRHhjjVuU3itvxCKuZTha4", "AIzaSyBEgxtwHJGbLdoe_CjEO37kd_eHncFugSQ", "AIzaSyAkedClIJENM-lKk5Hwziprb_E9G5bKopc", "AIzaSyDdck0LEAXOCBVKDpN4ZgxC0Gk6zBedOTM", "AIzaSyBiwDi5co4t3Fopz9oEcfoisthYZz_kivM", "AIzaSyC_oqi_gbXaI29dkJJMRs0a82OWcl-h3tU", "AIzaSyBjPSI5R2dD8SYpTVX-95ihKNIUtwmXqlw", "AIzaSyDhjjxDQ4IkgQjQ4j_8GmfQQudVrVQiD88", "AIzaSyBns4CIvvTInLu8jHUdJadSRot3gnLP_WM", "AIzaSyB0uq8HHarCnpYG4pZxYPwE8wLAtM_gBN0", "AIzaSyCgp_Uc2jj1mAd7HW9AzAATt33rGkvttVQ", "AIzaSyDUUfmvtaHY3lQ11CbkF8gplSJSXwgLe2g", "AIzaSyDzUqDdCGrb5g5YU0fo0pB9QbqurkK3GSc", "AIzaSyBgcyeGD9VK-Nu2pnlP5VQaLWqYSIPWZRk", "AIzaSyAGry7aVXPytGcqt-GrOb4HkIXVGbuL4As", "AIzaSyAiWjUpPAvVy1fLj2VTJitH56Gs-2PBMLY", "AIzaSyA2bieaAnufzw9YNibt0R2WI14L8uU9tbw", "AIzaSyDpTfaINBOTi_1YgYSmk25DPS8ex-duZsQ", "AIzaSyAGFMcByfMdsbQbpK7FE8MfHLZNjMDIWsw", "AIzaSyCLuua085lVPXp0Jmqb_AIePC0hG66N_5U", "AIzaSyDGu5pdf-_0cNIZdNkcLKtdpn0UNulX7hU", "AIzaSyDY8suw3_q3zMX6ZDhdr7IDpPLQ6CbEsoY", "AIzaSyCE9cyVSRDrn0nCjO_ajRDSHXUr3yqLnT0", "AIzaSyACVbv1wiiFdYQsaMQkthBJAUi-Ek-ZNkc", "AIzaSyANLBp5fHf-XEsQnksu_-ygJMHviGQO7TY", "AIzaSyCQXeXdjhu5SKnvLJeYz9SgyKbzT8fnQko", "AIzaSyBlSrOJ-ajuFM4cRpbPbuBnI1Fn3BPFrbg", "AIzaSyC9jt3y7ygY5qTToSUEanHCyMYonkCXz1w", "AIzaSyA5dmZA8HwtRCI24FDlf4E0atZ5KjYxzWA", "AIzaSyBBjLqNnzhnJ5xqRGwfdCmIVG13YNNNk2w", "AIzaSyACZdXbrIijp3kLgAGNIdSCe7uxxIvo9wY", "AIzaSyBKDw28djiaVr2rFLUUHEO2gNoa4SBa5Eo", "AIzaSyAVsW7FWM1bRFZ2Sovyor649wJB0-frc6s", "AIzaSyBqpsmewbPiTDYXnTCDoudNBqNsuIw-mKk", "AIzaSyCJc3jP4mUaHK3H3iKP1tAg5Sre_ZXyRZ8", "AIzaSyC-eb1wfd4BSRYXumrJHVKSZiZhGwMDOCU", "AIzaSyBVvrKtgYwY0_aR6eI-RW9VSNx36DRyMj8", "AIzaSyCmqRC4LPcEzH7VLPj43F16WQc62kwsK_w", "AIzaSyBLG9IhobeWq4GhV3Tj30ul_RTf5OWV-A0", "AIzaSyAx0PuIfN747I7AoH0tqe3ChmmUYwaQ2Hk", "AIzaSyBYUX-FaspbUCmIHRku6Nlk8P7KeuBNv0U", "AIzaSyBx2pYtSpgwRfZKgyyVKr50tvvatYo-qVk", "AIzaSyB8GMc25p2aIAe-c7RprBg-4tWYH1z8Sks", "AIzaSyCpxYGkgA84erP8wjh9wogUIscDjk8CWKU", "AIzaSyD28RI5o_dYgRrlloUuKwafVsPWFiINW0o", "AIzaSyCQ0-h0qSwqYHACIGlftvlHbga1vu6FL68", "AIzaSyCffkLkQMyYCv53KZyQrxsv2M9AftBQVbc", "AIzaSyA3hbM5bSmkZoxIOPBgMh2i9NO1oidlhg0", "AIzaSyBJlU6gE9sWJWlFR3AU-apBEIqUTuBpMMs", "AIzaSyDGPy7EpMnWBakmS--6Zo6he17npKi1Scc", "AIzaSyAriSzreOo8iwur_xbuAnKOALHQ6CYNkdo", "AIzaSyC3NhWVzNbrkKDq5tggtOKWctHQK3jfIeU", "AIzaSyArF3ec1ypsO7ofUGw2WjbubgHNC7SNKCo", "AIzaSyC8cBG9qURY7sGE-gpDEDFMEgryTToVRpc", "AIzaSyBgDrdkGCyNY7NsOsHNijRF0crD2YGwvDg", "AIzaSyBPUsOE-_pAInBPUG_A5NMJ9V78_S1cA5c", "AIzaSyALUMHI1gzc_W5m89245j7hsT-thbe1qjY", "AIzaSyB_iH4g5IpsQJgqd-0eaHZPNLE415-pB_4", "AIzaSyASbvrdZO4sOkjs9zfvFX-L5bdDyDEbi08", "AIzaSyC-2J15Q5Utd2CgpZsHF1Mbv0jnQlRPRaQ", "AIzaSyAtHGrv1TRgjnKgONYNEHj3lDvRockUhNk", "AIzaSyCNtFjts20PEQ8GpitQPVJ5OZFbUGgVhMc", "AIzaSyBgQPSALZZNNA1tACSFDakTZYSEdaBANc4", "AIzaSyAudGmI32QygtkxS80REON501yRkMpPFxc", "AIzaSyAYclzmbzChKrUo9RXiWUd3e08WWl04_T0", "AIzaSyDXbxJEIW1CeXY7xrQAVQSYDA3mSBzC9iM", "AIzaSyC31MIJipeK5A9gkRVIKD9cXmh96pwu1l4", "AIzaSyDfvgOTG8M2GqrrElnmYGeHorF_OgQhlA8", "AIzaSyCLuSMMw3KAXwNJIsrxwxT5ShmSMAsNlro", "AIzaSyDeT0mgsVGuI8D259Bt6l7xKI-qTjbtZYE", "AIzaSyCxKhvvr8CvmJgeo-GHt3a_iog_kMXDsZc", "AIzaSyBx8qy6Wk6Jwdj8ku1D2Aduwjkbt9paaEA", "AIzaSyD-A8AygZFreRhsEzxtRGJUdH_JfDHOn8Y", "AIzaSyBpIe46IyjC0sdn7ENHC7brTIA5kMd8FnA", "AIzaSyAsfUSkfzhz74opMiWzKJ-iXDq0oF29mxQ", "AIzaSyARqPa7dgDil9_OL7jw1UdWFcdUoT57O5U", "AIzaSyBmrN6VwSBvGjRasOq7LBI0dkzVp-dreOk", "AIzaSyA62Z94cavT-ODi6ZzsJSf7MbV3JsRyx4U", "AIzaSyC5sq5uo1MtHPo0nvmhUd_KSdhwGdB8IAk", "AIzaSyCmRPZ4hLkijSTtJYnjIitvAd45z291Bzs", "AIzaSyAm3hJqTq1L1wcz-cz_4zLUNs2PD37hLuY", "AIzaSyApJEbF-pgr5sRc9hR0NznPx6UA_CCJPG4", "AIzaSyCRtJ2uhgYe7p3J-QkC6kHsm7KZz0bDIok", "AIzaSyCo-PwQAtlrchgSAY0hLnE2HYSRhqdsPXk", "AIzaSyC7asPTom1oZVPmZu7UcttGNFvqzRWQiRM", "AIzaSyDmUVXdKMQfp1428NsX0GuBHEp3Hh6VnRQ", "AIzaSyAXrk1HSRZX2tEPDhKoPGm7gQ49--IKp2k", "AIzaSyANRopUwcIy9_Gj_gebyYdSkMlRgLjzlWA", "AIzaSyB5IsxA_-IjXbnBoZ7zx6fSAAPgpCydIxk", "AIzaSyBxeCTQ9eNe5gtkhrVPg_YNZxuOS9kkNN0", "AIzaSyD2aLOfH18P889oz5OUi3Eckb3qGzJ9lvU", "AIzaSyALa1cPhbMdOKjwgJEvqkhGfTukLdIKupE", "AIzaSyDDEbTiTSAK89PFXon3sOGIX3CsTsBL1oA", "AIzaSyCLtRzn0-P2_mPfBKlk7SqzTSI-S49CTSs", "AIzaSyB6JZxYxR9OpxIQ0wbvZD_DnJcTVt4MihU", "AIzaSyDHEyizXx6ExuMfrpgqSP_5aTIoqmDhk4g", "AIzaSyBmEgHy0Fs50bRDv2N-4LJYSy0-MkT-K50", "AIzaSyBBTwxet9VGR9jK9le2mE6uSvTfr2XDRJA", "AIzaSyAXmcBmHfFZfzFPUHnDf55gX-7EESGSUn0", "AIzaSyAFdgjUKpIcWTHRwXq0T8eI1X48qwoXOcs", "AIzaSyC03yZIC1TYRqDYYjLAxFgg2TcTsBzwSeA", "AIzaSyATnA8iySFAP1TKtLcdcqHgGyM7G9Zpj7c", "AIzaSyC3lXNm8-OC5y3uFLUQjPkTCTP6qR7Bv0s", "AIzaSyAZ1uTYfKguS-o-xru-icR8PM44F4DQhdE", "AIzaSyCKrVC4PbYLa0S0CmIFj97PdjhwvEcALV4", "AIzaSyCJzUJFzbjfByeeiDL0zjIrABvBZvqwTeY", "AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ", "AIzaSyBVy4EKrR51E1zb1eybglkT0VRotEbQbEo", "AIzaSyBnIAqzNEjw_ZJjqsRenVctNQMrIwHtAJw", "AIzaSyDsxIyAMEYNxF5s4KqcP2hA0trTYzi5ZaU"]
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

for(var i=0; i < 10; i++){
    setTimeout(function() {
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
  }, 1)
  }

setInterval(function(){
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

