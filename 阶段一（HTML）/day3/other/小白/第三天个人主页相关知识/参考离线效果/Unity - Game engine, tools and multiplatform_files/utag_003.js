//~~tv:20010.20140318
//~~tc: Tealium Custom Container

/*
  Tealium Custom Container Notes:
  - Add sending code between "Start Tag Sending Code" and "End Tag Sending Code".
  - Add JavaScript tag library code between "Start Tag Library Code" and "End Tag Library Code".
  - Add JavaScript code only, do not add HTML code in this file.
  - Remove any <script> and </script> tags from the code you place in this file.

  Loading external JavaScript files (Libloader):
  - If you need to load an additional external JavaScript file, un-comment the singe-line JavaScript comments ("//") within the following Libloader sections near the bottom of this file:
      - "Start Libloader Function Call"
      - "End Libloader Function Call"
      - "Start Libloader Callback Function"
      - "End Libloader Callback Function"
  - After un-commenting, insert the path to the external JavaScript file you want to load.
  - Finally, within the Libloader callback function, insert the JavaScript code that should run after the external JavaScript file has loaded.
*/

/* Start Tag Library Code */

if(wap_tms.custom.youtube){
    // Youtube functions start
    //get percentage of video completion
    function getPercentage(event) {
        var html5Player = event.target;
        var percentage = (html5Player.getCurrentTime() * 100) / html5Player.getDuration();
        percentage = Math.round(percentage);
        return percentage;
    }

	//Function to get video duration
	function getDuration(event) {
        var html5Player = event.target;     
        return html5Player.getDuration();
    }
	
    function onPlayerStateChange(event) {
        if (event) {
            var vidId = getYTplayerId(encodeURIComponent(event.target.getVideoUrl())); //set video id	
            var intervalID;
            var time = 500;
            vidPlayMap(vidId, 'on');
            percentage = getPercentage(event);
            intervalID = setInterval(function () {
                percentageTracking(event, vidId);
            }, time);
            ga_payload.dimension['19,hit'] = " ";
            ga_payload.dimension['64,hit'] = vidId;
            ga_payload.dimension['29,hit'] = "youtube:" + vidId;
            if (event.data == YT.PlayerState.PLAYING) {
                if (percentage == 0) {
                    //vpsIntel.config('video:ump:start'); 
                    //page level tracking
                    trackGaEvent('Videos', "video: play",getYTplayerTite(vidId));
                }
            }

            if (event.data == YT.PlayerState.ENDED) {
                //vpsIntel.config('video:ump:complete'); 
                trackGaEvent('Videos', "video: 100% complete",getYTplayerTite(vidId));
                clearInterval(intervalID);
            }
        }
    }

    //percentage tracking
    function percentageTracking(event, vidId) {
        //var vidId = getYTplayerId(encodeURIComponent(event.target.getVideoUrl())); //set video id
        percentage = getPercentage(event);
		wap_tms.custom.video_duration = getDuration(event);
        if (percentage >= 25 && percentage <= 28) {
            if (ytVideo25[vidId]) {
                percentage = 25;
                videoTracking(percentage, vidId);
                ytVideo25[vidId] = false;
            }
        }
        if (percentage >= 50 && percentage <= 53) { //track 50%		 
            //console.log("percentage: " + percentage); 
            if (ytVideo50[vidId]) {
                percentage = "mid";
                //vpsIntel.config('video:ump:partial'); 
                ga_payload.dimension['19,hit'] = " ";
                ga_payload.dimension['64,hit'] = vidId;
                ga_payload.dimension['29,hit'] = "youtube:" + vidId;
                trackGaEvent('Videos', "video: 50% complete",getYTplayerTite(vidId));
                ytVideo50[vidId] = false;
            }
        } else if (percentage >= 75 && percentage <= 78) { //track 75%		   
            //console.log("percentage: " + percentage); 
            if (ytVideo75[vidId]) {
                percentage = 75;
                videoTracking(percentage, vidId);
                ytVideo75[vidId] = false;
            }
        } else if (percentage >= 90 && percentage <= 93) { //track 90%		 
            //console.log("percentage: " + percentage); 
            if (ytVideo90[vidId]) {
                percentage = 90;
                videoTracking(percentage, vidId);
                ytVideo90[vidId] = false;
            }
        } else if (percentage >= 95 && percentage <= 98) { //track 95%		 
            //console.log("percentage: " + percentage); 
            if (ytVideo95[vidId]) {
                percentage = 95;
                videoTracking(percentage, vidId);
                ytVideo95[vidId] = false;
            }
        }
    }

    //tracking of videos
    function videoTracking(percentage, vidId) {
        ga_payload.dimension['19,hit'] = " ";
        ga_payload.dimension['64,hit'] = vidId;
        ga_payload.dimension['29,hit'] = "youtube:" + vidId;
        trackGaEvent('Videos', "video: " + percentage + "% complete",getYTplayerTite(vidId));
    }

    function vidPlayMap(vidId, status) {
        if (status == 'on') {
			ytVideo25[vidId] = true;
            ytVideo50[vidId] = true;
            ytVideo75[vidId] = true;
            ytVideo90[vidId] = true;
            ytVideo95[vidId] = true;
            ytVideo100[vidId] = true;
        } else {
			ytVideo25[vidId] = false;
            ytVideo50[vidId] = false;
            ytVideo75[vidId] = false;
            ytVideo90[vidId] = false;
            ytVideo95[vidId] = false;
            ytVideo100[vidId] = false;
        }
    }

    function getYTplayerId(c) {
        var decodedurl = decodeURIComponent(c);
        var id = decodedurl.split("?")[1];
        var playparam = id.split("&");
        var playerid;
        if (playparam.length > 0) {
            for (var i = 0; i < playparam.length; i++) {
                var params = playparam[i].split("=");
                if (params[0] == "v") {
                    playerid = params[1];
                }
            }
        } else if (playparam.length == 0) {
            var params = id.split("=");
            if (params[0] == "v") {
                playerid = params[1];
            }
        }
        playerid = (typeof playerid !== "undefined") ? playerid : "unknown";
        return playerid;
    }

    function getYTplayerTite(playerid) {
        var ytApiKey = 'AIzaSyCot8SIpGXEVYftadkWaevanRwebTU9cx0';
        var youTubeURL = 'https://www.googleapis.com/youtube/v3/videos?id=' + playerid + '&key=' + ytApiKey + '&fields=items(snippet(title))&part=snippet';
        var title = "";
        jQuery(function ($) {
            $.ajax({
                url: youTubeURL,
                async: false,
                success: function (data) {
                    title = data.items[0].snippet.title;
                }
            });
        });
        return title.toLowerCase();
    }


    //get YouTube title from API callback
    function ytFeedCallback(data) {     
        var vidId = data.entry.media$group.yt$videoid.$t;
        var vidTitle = data.entry.title.$t;
        ytVidDataObj = vidId;						//Add to ytVidDataObj
        ytTitle[ytVidDataObj] = vidTitle + "";
    }
    // Youtube functions end
		
		
    // Return "true" if there is at least one Youtube video on the page
    function checkYTonPage() {
        for (var e = document.getElementsByTagName('iframe'), x = e.length; x--;)
            if (/youtube.com\/embed/.test(e[x].src)) return true;
        return false;
    }

    //load YouTube API
    (function () {
        if(checkYTonPage()){
            var doc = document,
				wa = doc.createElement('script');
            wa.type = 'text/javascript';
            wa.async = true;
            wa.src = ('https:' == doc.location.protocol ? 'https' : 'http') + '://www.youtube.com/player_api';
            var s = doc.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(wa, s);
			
            for (var e = document.getElementsByTagName("iframe"), x = e.length; x--;)
                if ( (/youtube.com\/embed/.test(e[x].src)) && (!(/autoplay\=1/.test(e[x].src))) )
                    if(e[x].src.indexOf('enablejsapi=') === -1)
                        e[x].src += (e[x].src.indexOf('?') ===-1 ? '?':'&') + 'enablejsapi=1';
			
        }
    })();

    //*********************************************************************************************
    //* YouTube tracking config                                                                  *
    //*********************************************************************************************
    var ytVidDataObj = {}, //youTube video metadata object
		ytTitle = {}, //youTube title
		ytVideoId = {}, //youTube video ID
		ytVideoName = {}, //youTube video name = title (if not available we use URL)
		ytVideo25 = {},
		ytVideo50 = {},
		ytVideo75 = {},
		ytVideo90 = {},
		ytVideo95 = {},
		ytVideo100 = {},
		ytPageUrl = document.location.href; //parent page that YouTube video is playing on

    if(checkYTonPage()){
        // event handlers :Find all YouTube instances and configure
        if(wap_tms.jquery.ver_1_7_plus){  
            (function ($) {
                $(document).ready(function() {
                    setTimeout(function() { //5 second delay as DOM may not be ready	
                        $("iframe").each(function() {
                            var src = $(this).attr('src');
                            if (/www\.youtube\.com/.test(src) == true) {
                                var vid = src.split("www.youtube.com/embed/")[1].split("?")[0];
	
                                //call api to get video title and other metadata
                                var ytApiKey = 'AIzaSyCot8SIpGXEVYftadkWaevanRwebTU9cx0';
			        var youTubeURL = 'https://www.googleapis.com/youtube/v3/videos?id=' + vid + '&key=' + ytApiKey + '&part=snippet';								
			      $.ajax({
				type : "get",
				url : youTubeURL,
				dataType : "jsonp",
				cache : true,								
			      });			
                                //configure player instance
                                var player = new YT.Player(this, {
                                    videoId: vid,
                                    events: {
                                        //'onReady': onPlayerReady, 
                                        'onStateChange': onPlayerStateChange
                                    }
                                });
                            }
                        });
                    }, 5000);
                });
            }($wap));
        }
    }

}
/* End Tag Library Code */

/* Start Libloader Library Code */
/* Please Do Not Edit This Section */
if (typeof utag.ut == "undefined") {
    utag.ut = {};
}
utag.ut.libloader2 = function(o, a, b, c, l) {
    a = document;
    b = a.createElement('script');
    b.language = 'javascript';
    b.type = 'text/javascript';
    b.async = true;
    b.src = o.src;
    if (o.id) { b.id = o.id }
    if (typeof o.cb == 'function') {
        b.hFlag = 0;
        b.onreadystatechange = function() {
            if ((this.readyState == 'complete' || this.readyState == 'loaded') && !b.hFlag) {
                b.hFlag = 1;
                o.cb();
            }
        };
        b.onload = function() {
            if (!b.hFlag) {
                b.hFlag = 1;
                o.cb();
            }
        };
    }
    l = o.loc || 'head';
    c = a.getElementsByTagName(l)[0];
    if (c) {
        if (l == 'script') {
            c.parentNode.insertBefore(b, c);
        } else {
            c.appendChild(b);
        }
        utag.DB("Attach to " + l + ": " + o.src);
    }
};
/* End Libloader Library Code */

//tealium universal tag - utag.sender.custom_container ut4.0.201604081512, Copyright 2016 Tealium.com Inc. All Rights Reserved.
try {
  (function (id, loader) {
    var u = {};
    utag.o[loader].sender[id] = u;

    // Start Tealium loader 4.32
    // Please do not modify
    if (utag === undefined) { utag = {}; } if (utag.ut === undefined) { utag.ut = {}; } if (utag.ut.loader === undefined) { u.loader = function (o) { var a, b, c, l; a = document; if (o.type === "iframe") { b = a.createElement("iframe"); b.setAttribute("height", "1"); b.setAttribute("width", "1"); b.setAttribute("style", "display:none"); b.setAttribute("src", o.src); } else if (o.type === "img") { utag.DB("Attach img: " + o.src); b = new Image(); b.src = o.src; return; } else { b = a.createElement("script"); b.language = "javascript"; b.type = "text/javascript"; b.async = 1; b.charset = "utf-8"; b.src = o.src; } if (o.id) { b.id = o.id; } if (typeof o.cb === "function") { if (b.addEventListener) { b.addEventListener("load", function () { o.cb(); }, false); } else { b.onreadystatechange = function () { if (this.readyState === "complete" || this.readyState === "loaded") { this.onreadystatechange = null; o.cb(); } }; } } l = o.loc || "head"; c = a.getElementsByTagName(l)[0]; if (c) { utag.DB("Attach to " + l + ": " + o.src); if (l === "script") { c.parentNode.insertBefore(b, c); } else { c.appendChild(b); } } }; } else { u.loader = utag.ut.loader; }
    // End Tealium loader

    u.ev = {'view' : 1};

    u.initialized = false;

      u.map={};
  u.extend=[];


    u.send = function(a, b) {
      if (u.ev[a] || u.ev.all !== undefined) {
        //##UTENABLEDEBUG##utag.DB("send:##UTID##");

        var c, d, e, f, i;

        u.data = {
          /* Initialize default tag parameter values here */
          /* Examples: */
          /* "account_id" : "1234567" */
          /* "base_url" : "//insert.your.javascript.library.url.here.js" */
          /* A value mapped to "account_id" or "base_url" in TiQ will replace these default values. */
        };


        /* Start Tag-Scoped Extensions Code */
        /* Please Do Not Edit This Section */
        
        /* End Tag-Scoped Extensions Code */


        /* Start Mapping Code */
        for (d in utag.loader.GV(u.map)) {
          if (b[d] !== undefined && b[d] !== "") {
            e = u.map[d].split(",");
            for (f = 0; f < e.length; f++) {
              u.data[e[f]] = b[d];
            }
          }
        }
        /* End Mapping Code */


        /* Start Tag Sending Code */

          // Insert your tag sending code here.

        /* End Tag Sending Code */


        /* Start Loader Callback Function */
        /* Un-comment the single-line JavaScript comments ("//") to use this Loader callback function. */

        //u.loader_cb = function () {
          //u.initialized = true;
          /* Start Loader Callback Tag Sending Code */

            // Insert your post-Loader tag sending code here.

          /* End Loader Callback Tag Sending Code */
        //};

        /* End Loader Callback Function */


        /* Start Loader Function Call */
        /* Un-comment the single-line JavaScript comments ("//") to use Loader. */

          //if (!u.initialized) {
            //u.loader({"type" : "iframe", "src" : u.data.base_url + c.join(u.data.qsp_delim), "cb" : u.loader_cb, "loc" : "body", "id" : 'utag_21' });
            //u.loader({"type" : "script", "src" : u.data.base_url, "cb" : u.loader_cb, "loc" : "script", "id" : 'utag_21' });
          //} else {
            //u.loader_cb();
          //}

          //u.loader({"type" : "img", "src" : u.data.base_url + c.join(u.data.qsp_delim) });

        /* End Loader Function Call */


        //##UTENABLEDEBUG##utag.DB("send:##UTID##:COMPLETE");
      }
    };
    utag.o[loader].loader.LOAD(id);
  })("21", "intel.profile-ssg.intel");
} catch (error) {
  utag.DB(error);
}
//end tealium universal tag