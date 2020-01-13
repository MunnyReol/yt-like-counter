var YT = {};
var video1 = "";
var video2 = "";
var key = "";
var APIKeys = ["AIzaSyABWPY0xGFSEV_fp3b7RAthCyegwzr-prw","AIzaSyBneuqXGHEXQiJlWUOv23_FA4CzpsHaS6I","AIzaSyDsjY7zKIxE9NG3xluvZepwYHD2vjBt9lo","AIzaSyA8wEOgIJ7LEY4iDG4Qg_Ad2VgTEWlUIrA","AIzaSyCAICFzxvKWCfVhQUz1GSSblO3L4X74R0M","AIzaSyB4Q3icIKTwtGEuxKu09cVaBK30FxT57cs","AIzaSyCHooIQqQfZ3advyfy-F0KqM9Z5XUN2dTQ","AIzaSyAs2ErkL9jq7KQ_OGmFSIoj8z4yt2yKHZI","AIzaSyDT0_OI9Ss2Spi1IjpxhCy6JIwcnJ8cLuI","AIzaSyBfwGkn-dQxMy_T612ClTxE0akg4FYRVHI","AIzaSyDvQuHTDU6PE0q25RSHSAHFkY7YNncSTxs","AIzaSyAt14oAUc2M5P7ddtF6F2o6hNOZb1F9Gh8","AIzaSyCB4Hj3pIiIb6IaqoJvp0BoKDIygkQnT2c","AIzaSyBt8lp3CU87gU8AQKz4BWG5mLE5kFOSfmk","AIzaSyDpzp1OEW-axtoc5O5kyxl0S2-46WfGVJg","AIzaSyAu5kEu3rb1cCgM6Iqlbamt6D_DNrIex_8","AIzaSyAZEii_ygokYH2gUS7DISWORzw4dMkLU_w","AIzaSyDUTMnWBR_DfWz7Obdj_V-YMzPnNgqzKME","AIzaSyBA3r7t0ranMbGuQte9t7uPPd2UWvri11I","AIzaSyD87er3n_gedLNfb_uVY6sF-5cbYE-uFHM","AIzaSyDSrQg06OUouEYvf9eqtwMv1_HGdATZVak","AIzaSyCSYn85k54O6ZRHhjjVuU3itvxCKuZTha4","AIzaSyBEgxtwHJGbLdoe_CjEO37kd_eHncFugSQ","AIzaSyAkedClIJENM-lKk5Hwziprb_E9G5bKopc","AIzaSyDdck0LEAXOCBVKDpN4ZgxC0Gk6zBedOTM","AIzaSyBiwDi5co4t3Fopz9oEcfoisthYZz_kivM","AIzaSyAm3hJqTq1L1wcz-cz_4zLUNs2PD37hLuY","AIzaSyC_oqi_gbXaI29dkJJMRs0a82OWcl-h3tU","AIzaSyCRtJ2uhgYe7p3J-QkC6kHsm7KZz0bDIok","AIzaSyCo-PwQAtlrchgSAY0hLnE2HYSRhqdsPXk","AIzaSyC7asPTom1oZVPmZu7UcttGNFvqzRWQiRM","AIzaSyDmUVXdKMQfp1428NsX0GuBHEp3Hh6VnRQ","AIzaSyB0uq8HHarCnpYG4pZxYPwE8wLAtM_gBN0","AIzaSyCgp_Uc2jj1mAd7HW9AzAATt33rGkvttVQ","AIzaSyDUUfmvtaHY3lQ11CbkF8gplSJSXwgLe2g","AIzaSyDzUqDdCGrb5g5YU0fo0pB9QbqurkK3GSc","AIzaSyBgcyeGD9VK-Nu2pnlP5VQaLWqYSIPWZRk","AIzaSyAGry7aVXPytGcqt-GrOb4HkIXVGbuL4As","AIzaSyAiWjUpPAvVy1fLj2VTJitH56Gs-2PBMLY","AIzaSyA2bieaAnufzw9YNibt0R2WI14L8uU9tbw","AIzaSyDpTfaINBOTi_1YgYSmk25DPS8ex-duZsQ","AIzaSyAGFMcByfMdsbQbpK7FE8MfHLZNjMDIWsw","AIzaSyCLuua085lVPXp0Jmqb_AIePC0hG66N_5U","AIzaSyDGu5pdf-_0cNIZdNkcLKtdpn0UNulX7hU","AIzaSyDY8suw3_q3zMX6ZDhdr7IDpPLQ6CbEsoY","AIzaSyCE9cyVSRDrn0nCjO_ajRDSHXUr3yqLnT0","AIzaSyACVbv1wiiFdYQsaMQkthBJAUi-Ek-ZNkc","AIzaSyANLBp5fHf-XEsQnksu_-ygJMHviGQO7TY","AIzaSyCQXeXdjhu5SKnvLJeYz9SgyKbzT8fnQko","AIzaSyBlSrOJ-ajuFM4cRpbPbuBnI1Fn3BPFrbg","AIzaSyC9jt3y7ygY5qTToSUEanHCyMYonkCXz1w","AIzaSyA5dmZA8HwtRCI24FDlf4E0atZ5KjYxzWA","AIzaSyBBjLqNnzhnJ5xqRGwfdCmIVG13YNNNk2w","AIzaSyACZdXbrIijp3kLgAGNIdSCe7uxxIvo9wY","AIzaSyBKDw28djiaVr2rFLUUHEO2gNoa4SBa5Eo","AIzaSyAVsW7FWM1bRFZ2Sovyor649wJB0-frc6s","AIzaSyBqpsmewbPiTDYXnTCDoudNBqNsuIw-mKk","AIzaSyCJc3jP4mUaHK3H3iKP1tAg5Sre_ZXyRZ8","AIzaSyC-eb1wfd4BSRYXumrJHVKSZiZhGwMDOCU","AIzaSyBVvrKtgYwY0_aR6eI-RW9VSNx36DRyMj8","AIzaSyCmqRC4LPcEzH7VLPj43F16WQc62kwsK_w","AIzaSyBLG9IhobeWq4GhV3Tj30ul_RTf5OWV-A0","AIzaSyAx0PuIfN747I7AoH0tqe3ChmmUYwaQ2Hk","AIzaSyBYUX-FaspbUCmIHRku6Nlk8P7KeuBNv0U","AIzaSyBx2pYtSpgwRfZKgyyVKr50tvvatYo-qVk","AIzaSyB8GMc25p2aIAe-c7RprBg-4tWYH1z8Sks","AIzaSyCpxYGkgA84erP8wjh9wogUIscDjk8CWKU","AIzaSyD28RI5o_dYgRrlloUuKwafVsPWFiINW0o","AIzaSyCQ0-h0qSwqYHACIGlftvlHbga1vu6FL68","AIzaSyCffkLkQMyYCv53KZyQrxsv2M9AftBQVbc","AIzaSyA3hbM5bSmkZoxIOPBgMh2i9NO1oidlhg0","AIzaSyBJlU6gE9sWJWlFR3AU-apBEIqUTuBpMMs","AIzaSyDGPy7EpMnWBakmS--6Zo6he17npKi1Scc","AIzaSyAriSzreOo8iwur_xbuAnKOALHQ6CYNkdo","AIzaSyC3NhWVzNbrkKDq5tggtOKWctHQK3jfIeU","AIzaSyArF3ec1ypsO7ofUGw2WjbubgHNC7SNKCo","AIzaSyC8cBG9qURY7sGE-gpDEDFMEgryTToVRpc","AIzaSyBgDrdkGCyNY7NsOsHNijRF0crD2YGwvDg","AIzaSyBPUsOE-_pAInBPUG_A5NMJ9V78_S1cA5c","AIzaSyALUMHI1gzc_W5m89245j7hsT-thbe1qjY","AIzaSyB_iH4g5IpsQJgqd-0eaHZPNLE415-pB_4","AIzaSyASbvrdZO4sOkjs9zfvFX-L5bdDyDEbi08","AIzaSyC-2J15Q5Utd2CgpZsHF1Mbv0jnQlRPRaQ","AIzaSyAtHGrv1TRgjnKgONYNEHj3lDvRockUhNk","AIzaSyCNtFjts20PEQ8GpitQPVJ5OZFbUGgVhMc","AIzaSyBgQPSALZZNNA1tACSFDakTZYSEdaBANc4","AIzaSyAudGmI32QygtkxS80REON501yRkMpPFxc","AIzaSyAYclzmbzChKrUo9RXiWUd3e08WWl04_T0","AIzaSyDXbxJEIW1CeXY7xrQAVQSYDA3mSBzC9iM","AIzaSyC31MIJipeK5A9gkRVIKD9cXmh96pwu1l4","AIzaSyDfvgOTG8M2GqrrElnmYGeHorF_OgQhlA8","AIzaSyCLuSMMw3KAXwNJIsrxwxT5ShmSMAsNlro","AIzaSyDeT0mgsVGuI8D259Bt6l7xKI-qTjbtZYE","AIzaSyCxKhvvr8CvmJgeo-GHt3a_iog_kMXDsZc","AIzaSyBx8qy6Wk6Jwdj8ku1D2Aduwjkbt9paaEA","AIzaSyD-A8AygZFreRhsEzxtRGJUdH_JfDHOn8Y","AIzaSyBpIe46IyjC0sdn7ENHC7brTIA5kMd8FnA","AIzaSyAsfUSkfzhz74opMiWzKJ-iXDq0oF29mxQ","AIzaSyARqPa7dgDil9_OL7jw1UdWFcdUoT57O5U","AIzaSyBmrN6VwSBvGjRasOq7LBI0dkzVp-dreOk","AIzaSyA62Z94cavT-ODi6ZzsJSf7MbV3JsRyx4U","AIzaSyC5sq5uo1MtHPo0nvmhUd_KSdhwGdB8IAk"];
var rightKeys = [];

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
    var urlsplit = location.href.split("/")
    if (!urlsplit[6]) {
        video1 = "IHNzOHi8sJs"; //dududududdudududud (not darude sandstorm tho)
        video2 = "2S24-y0Ij3Y"; //kill this love
    } else {
        var vidsplit = urlsplit[6].split("$$")
        video1 = vidsplit[0];
        video2 = vidsplit[1];
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
        history.pushState(null,'',window.location.href+''+video1+'$$'+video2)
    }
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

setInterval(function () {
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
			console.log("Invalid key detected in right key array, removing it...")
		}
		console.log("Invalid key, retrying...")
  })

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
        window.location.href = '/yt-like-counter/compare/likes/' + data.items[0].id.videoId + '$$' + video2;
    })
}

function search2() {
    var replaceurl = document.getElementById('search2').value.replace("%20", " ");
    var rightKey = rightKeys[Math.floor(Math.random()*rightKeys.length)];
    $.getJSON('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&type=video&q=' + replaceurl + '&key=' + rightKey, function(data) {
        window.location.href = '/yt-like-counter/compare/likes/' + video1 + '$$' + data.items[0].id.videoId;
    })
}

  
