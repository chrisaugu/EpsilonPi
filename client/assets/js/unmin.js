$(document).ready(function() {
  function r(t) {
    $("#loading").hide();
    $("#search_text").val(e[t])
  }
  var e = {
    invalid_query: "Please enter a valid query (Song)"
  };
  var t = "";
  var n = false;
  $("#content").css("min-height", $(window).height() - 122 + "px");
  $(window).resize(function() {
    $("#content").css("min-height", $(window).height() - 122 + "px")
  });
  $("#sources_button a").click(function() {
    if (n) {
      $("#sources").slideUp(300);
      $("#sources_button a").html($("#sources_button a").html().replace(/Hide/, "Show"));
      n = false
    } else {
      $("#sources_button a").html($("#sources_button a").html().replace(/Show/, "Hide"));
      $("#sources").slideDown(300);
      n = true
    }
    return false
  });
  $("#sources a").click(function() {
    if ($(this).attr("class") == "active") {
      $(this).attr("class", "inactive");
      $.ajax({
        url: "sources.php",
        async: false,
        cache: false,
        data: {
          sc: $(this).attr("id"),
          s: 0
        },
        type: "POST"
      });
      $("#active_sources").html(parseInt($("#active_sources").html()) - 1)
    } else if ($(this).attr("class") == "inactive") {
      $(this).attr("class", "active");
      $.ajax({
        url: "sources.php",
        async: false,
        cache: false,
        data: {
          sc: $(this).attr("id"),
          s: 1
        },
        type: "POST"
      });
      $("#active_sources").html(parseInt($("#active_sources").html()) + 1)
    }
    return false
  });
  $(document).on("click", ".player_link", function() {
    var e = parseInt($(this).attr("class").split(" ")[1]);
    if (t == e) {
      $(".preview_" + t).remove();
      $("#result_" + t + " .player_link").html("<span><b>▶&nbsp;PLAY</b></span>");
      t = "";
      return false
    }
    if (t) {
      $(".preview_" + t).remove();
      $("#result_" + t + " .player_link").html("<span><b>▶&nbsp;PLAY</b></span>");
      t = ""
    }
    $(this).html("<span><b>◼&nbsp;STOP</b></span>");
    var d = $(this).attr("data-sound-id").split('/');
    var save_name = $(this).attr("data-name-mp3").trim();
    var token = $(this).attr("data-token").trim();
    var n = d[0];
    var r = d[1];
    var i = "";
    switch (n) {
    case "yt-embed":
      i = '<div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="//www.youtube.com/embed/' + r + '?rel=0&showinfo=0&autoplay=1&controls=0" frameborder="0" allowfullscreen></iframe></div>';
      break;
    case "sc-embed":
      i = '<iframe width="100%" height="166" scrolling="no" frameborder="no" src="http://w.soundcloud.com/audio-player/?url=https://api.soundcloud.com/tracks/' + r + '&color=ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false"></iframe>';
      break;
    case "yt":
      i = '<audio controls loop autoplay><source type="audio/mpeg" src="' + youtube_play_url + '' + token + '/mp3/' + r + '/' + encodeURIComponent(save_name.replace(/\//g, '')) + '.mp3"></audio>';
      break;
    case "sc":
      i = '<audio controls loop autoplay><source type="audio/mpeg" src="https://api.soundcloud.com/tracks/' + r + '/stream?client_id=' + sc_key + '"></audio>';
      break;
    case "ge":
      i = '<iframe width="580" height="115" src="http://www.goear.com/embed/sound/' + r + '" marginheight="0" align="top" scrolling="no" frameborder="0" hspace="0" vspace="0" allowfullscreen></iframe>';
      break;
    case "4s":
      i = '<iframe src="http://www.4shared.com/web/embed/audio/file/' + r + '?type=MINI&widgetWidth=530&playlistHeight=0&widgetRid=978109129382" style="overflow:hidden;height:60px;width:530px;border:0;margin:0;"></iframe>';
      break;
    case "pd":
      i = '<iframe src="http://promodj.com/embed/' + r + '/small" width="100%" height="25" style="min-width: 450px; max-width: 900px" frameborder="0" allowfullscreen></iframe>';
      break
    }
    $("#audio-player" + e).after('<div id="preview" class="preview_' + e + '">' + i + "</div>");
    t = e;
    return false
  });
  $("#go_back").click(function() {
    history.back();
    return false
  });
  if (0 < $("#fb").length) {
    $("#fb a").attr("href", $("#fb a").attr("href") + document.URL)
  }
});
function play(e) {
  activeSong = document.getElementById(e),
  activeSong.play();
  var t = activeSong.volume / 1;
  document.getElementById("volumeMeter").offsetWidth * t,
  document.getElementById("volumeStatus").style.width = Math.round(percentageOfVolumeSlider) + "px"
}
function pause() {
  activeSong.pause()
}
function playPause(e) {
  activeSong = document.getElementById(e);
  var t = document.getElementById("songPlayPause");
  activeSong.paused ? (t.className = "playing",
  activeSong.play()) : (t.className = "",
  activeSong.pause())
}
function updateTime() {
  if (activeSong) {
    var e = (Math.floor(activeSong.currentTime % 60) < 10 ? "0" : "") + Math.floor(activeSong.currentTime % 60)
      , t = Math.floor(activeSong.currentTime / 60);
    if (document.getElementById("songTime")) {
      document.getElementById("songTime").innerHTML = t + ":" + e;
      var n = activeSong.currentTime / activeSong.duration
        , a = document.getElementById("songSlider").offsetWidth * n;
      document.getElementById("trackProgress").style.width = Math.round(a) + "px"
    }
  }
}
function volumeUpdate(e) {
  activeSong.volume = e / 100
}
function changeVolume(e, t) {
  activeSong.volume >= 0 && "down" == t && (activeSong.volume = activeSong.volume - e / 100),
  activeSong.volume <= 1 && "up" == t && (activeSong.volume = activeSong.volume + e / 100);
  var n = activeSong.volume / 1
    , a = document.getElementById("volumeMeter").offsetWidth * n;
  document.getElementById("volumeStatus").style.width = Math.round(a) + "px"
}
function setLocation(e) {
  activeSong.currentTime = activeSong.duration * e
}
function setSongPosition(e, t) {
  var n = e.offsetWidth
    , a = window.event ? event : t;
  clickLocation = a.layerX - e.offsetLeft;
  var i = clickLocation / n;
  setLocation(i)
}
function setVolume(e) {
  activeSong.volume = e;
  var t = activeSong.volume / 1
    , n = document.getElementById("volumeMeter").offsetWidth * t;
  document.getElementById("volumeStatus").style.width = Math.round(n) + "px"
}
function setNewVolume(e, t) {
  var n = e.offsetWidth
    , a = window.event ? event : t;
  clickLocation = a.layerX - e.offsetLeft;
  var i = clickLocation / n;
  setVolume(i)
}
function stopSong() {
  activeSong.currentTime = 0,
  activeSong.pause()
}
function showPlayer_new(e, t, n, a) {
  var o = document.getElementById("audio-player" + e)
    , l = document.getElementById("lk" + e);
  if ("<span><b>◼&nbsp;STOP</b></span>" === l.innerHTML)
    o.innerHTML = "",
    l.innerHTML = "<span><b>▶&nbsp;PLAY</b></span>",
    stopSong();
  else {
    var r = document.getElementsByTagName("a");
    for (i = 0; i < r.length; i++)
      "play_now" == r[i].className && (r[i].innerHTML = "<span><b>▶&nbsp;PLAY</b></span>"),
      "embed" == r[i].className && (r[i].innerHTML = "Embed");
    var d = document.getElementsByTagName("div");
    for (i = 0; i < d.length; i++)
      "audio-player" == d[i].className && (d[i].innerHTML = "");
    o.innerHTML = "",
    xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
    var m = "";
    canPlayMp3ViaHtml5 && (m = "&html5=true"),
    html5_audio_player && firstPlayerLoad && (html5_audio_player.play(),
    html5_audio_player.pause(),
    firstPlayerLoad = !1),
    xmlhttp.open("GET", "/audio-player.php?mp3id=" + e + "&title=" + a + "&ref=" + t + m),
    o.innerHTML = '<img src="/images/wd.gif" border="0" style="vertical-align:middle;">',
    xmlhttp.onreadystatechange = function() {
      4 == xmlhttp.readyState && 200 == xmlhttp.status && (o.innerHTML = xmlhttp.responseText,
      l.innerHTML = "<span><b>◼&nbsp;STOP</b></span>",
      canPlayMp3ViaHtml5 && (html5_audio_player.setAttribute("src", document.getElementById("download_url_" + e).value),
      playPause("song")))
    }
    ,
    xmlhttp.send(null),
    banner_div = document.getElementById("adr_banner"),
    banner_div.innerHTML = "",
    banner_div.innerHTML = '<iframe frameborder="0" marginwidth="0" marginheight="0" scrolling="NO" width="300" height="250" src="' + n + "&c2=" + a + '&my_zid=6"></iframe>',
    banner_div_2 = document.getElementById("adr_banner_2"),
    banner_div_2.innerHTML = "",
    banner_div_2.innerHTML = '<iframe frameborder="0" marginwidth="0" marginheight="0" scrolling="NO" width="300" height="250" src="' + n + "&c2=" + a + '&my_zid=32"></iframe>',
    banner_div_3 = document.getElementById("adr_banner_3"),
    banner_div_3.innerHTML = "",
    banner_div_3.innerHTML = '<iframe frameborder="0" marginwidth="0" marginheight="0" scrolling="NO" width="728" height="90" src="' + n + "&c2=" + a + '&my_zid=9"></iframe>',
    banner_div_4 = document.getElementById("adr_banner_4"),
    banner_div_4.innerHTML = "",
    banner_div_4.innerHTML = '<iframe frameborder="0" marginwidth="0" marginheight="0" scrolling="NO" width="468" height="60" src="' + n + "&c2=" + a + '&my_zid=8"></iframe>'
  }
}
function canPlayMp3() {
  var e = document.createElement("audio");
  return !(!e.canPlayType || !e.canPlayType("audio/mpeg;").replace(/no/, ""))
}
function dlreg(e, t) {
  xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP"),
  xmlhttp.open("GET", "/regdown.php?id=" + e + "&k=" + t),
  xmlhttp.onreadystatechange = function() {
    4 == xmlhttp.readyState && 200 == xmlhttp.status
  }
  ,
  xmlhttp.send(null)
}
function showDownload(e, t, n, m) {
  var a = document.getElementById("download" + e)
    , o = document.getElementById("dl" + e);
  if ('<span><i class="fa fa-cog fa-spin"></i> CONVERTING</span>' === o.innerHTML)
    a.innerHTML = "",
    o.innerHTML = '<span><i class="fa fa-download"></i> DOWNLOAD MP3</span>';
  else {
    var l = document.getElementsByTagName("a");
    for (i = 0; i < l.length; i++)
      "download_now" == l[i].className && (l[i].innerHTML = '<span><i class="fa fa-download"></i> DOWNLOAD MP3</span>'),
      "embed" == l[i].className && (l[i].innerHTML = "Embed");
    var r = document.getElementsByTagName("div");
    for (i = 0; i < r.length; i++)
      "download" == r[i].className && (r[i].innerHTML = "");
    a.innerHTML = "",
    xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP"),
    xmlhttp.open("GET", "/ydls.php?id=" + e + "&link=" + t + "&title=" + n + "&f=" + m),
    a.innerHTML = '<li style="padding-bottom: 5px;"><div id="download_link"><a href="#" id="click" rel="nofollow"><span><i style="color:red;" class="fa fa-cog fa-spin"></i> CONVERTING</span></a></div></li>',
    xmlhttp.onreadystatechange = function() {
      4 == xmlhttp.readyState && 200 == xmlhttp.status && (a.innerHTML = xmlhttp.responseText,
      o.innerHTML = '<span><i class="fa fa-cog fa-spin"></i> CONVERTING</span>')
    }
    ,
    xmlhttp.send(null)
  }
}
function showDownloads(e, t, n, m) {
  var a = document.getElementById("downloads" + e)
    , o = document.getElementById("dls" + e);
  if ('<span style="color:blue;"><i style="color:red;" class="fa fa-cog fa-spin"></i> PREPARING MP4</span>' === o.innerHTML)
    a.innerHTML = "",
    o.innerHTML = '<span style="color:blue;"><i style="color:blue;" class="fa fa-download"></i> DOWNLOAD MP4</span>';
  else {
    var l = document.getElementsByTagName("a");
    for (i = 0; i < l.length; i++)
      "download_now1" == l[i].className && (l[i].innerHTML = '<span style="color:blue;"><i style="color:blue;" class="fa fa-download"></i> DOWNLOAD MP4</span>'),
      "embed" == l[i].className && (l[i].innerHTML = "Embed");
    var r = document.getElementsByTagName("div");
    for (i = 0; i < r.length; i++)
      "downloads" == r[i].className && (r[i].innerHTML = "");
    a.innerHTML = "",
    xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP"),
    xmlhttp.open("GET", "/ydls.php?id=" + e + "&link=" + t + "&title=" + n + "&f=" + m),
    a.innerHTML = '<li style="padding-bottom: 5px;"><div id="download_link"><a href="#" id="click" rel="nofollow"><span style="color:blue;"><i style="color:red;" class="fa fa-cog fa-spin"></i> PREPARING MP4</span></a></div></li>',
    xmlhttp.onreadystatechange = function() {
      4 == xmlhttp.readyState && 200 == xmlhttp.status && (a.innerHTML = xmlhttp.responseText,
      o.innerHTML = '<span style="color:blue;"><i style="color:red;" class="fa fa-cog fa-spin"></i> PREPARING MP4</span>')
    }
    ,
    xmlhttp.send(null)
  }
}
function showDownloadss(e, t, n, m) {
  var a = document.getElementById("downloadss" + e)
    , o = document.getElementById("dlss" + e);
  if ('<span style="color:darkblue;"><i style="color:red;" class="fa fa-cog fa-spin"></i> CONVERTING</span>' === o.innerHTML)
    a.innerHTML = "",
    o.innerHTML = '<span style="color:darkblue;"><i class="fa fa-download"></i> DOWNLOAD MP3</span>';
  else {
    var l = document.getElementsByTagName("a");
    for (i = 0; i < l.length; i++)
      "download_now2" == l[i].className && (l[i].innerHTML = '<span style="color:darkblue;"><i class="fa fa-download"></i> DOWNLOAD MP3</span>'),
      "embed" == l[i].className && (l[i].innerHTML = "Embed");
    var r = document.getElementsByTagName("div");
    for (i = 0; i < r.length; i++)
      "downloadss" == r[i].className && (r[i].innerHTML = "");
    a.innerHTML = "",
    xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP"),
    xmlhttp.open("GET", "/ydls.php?id=" + e + "&link=" + t + "&title=" + n + "&f=" + m),
    a.innerHTML = '<div id="download_link"><a href="#" id="click" rel="nofollow"><span style="color:darkblue;"><i style="color:red;" class="fa fa-cog fa-spin"></i> CONVERTING</span></a></div>',
    xmlhttp.onreadystatechange = function() {
      4 == xmlhttp.readyState && 200 == xmlhttp.status && (a.innerHTML = xmlhttp.responseText,
      o.innerHTML = '<span style="color:darkblue;"><i style="color:red;" class="fa fa-cog fa-spin"></i> CONVERTING</span>')
    }
    ,
    xmlhttp.send(null)
  }
}
function showDownloadsss(e, t, n, m) {
  var a = document.getElementById("downloadsss" + e)
    , o = document.getElementById("dlsss" + e);
  if ('<span style="color:blue;"><i style="color:red;" class="fa fa-cog fa-spin"></i> PREPARING VIDEOS</span>' === o.innerHTML)
    a.innerHTML = "",
    o.innerHTML = '<span style="color:blue;"><i style="color:blue;" class="fa fa-download"></i> DOWNLOAD VIDEOS</span>';
  else {
    var l = document.getElementsByTagName("a");
    for (i = 0; i < l.length; i++)
      "download_now3" == l[i].className && (l[i].innerHTML = '<span style="color:blue;"><i style="color:blue;" class="fa fa-download"></i> DOWNLOAD VIDEOS</span>'),
      "embed" == l[i].className && (l[i].innerHTML = "Embed");
    var r = document.getElementsByTagName("div");
    for (i = 0; i < r.length; i++)
      "downloadsss" == r[i].className && (r[i].innerHTML = "");
    a.innerHTML = "",
    xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP"),
    xmlhttp.open("GET", "/ydls.php?id=" + e + "&link=" + t + "&title=" + n + "&f=" + m),
    a.innerHTML = '<div id="download_link"><a href="#" id="click" rel="nofollow"><span style="color:blue;"><i style="color:red;" class="fa fa-cog fa-spin"></i> PREPARING VIDEOS</span></a></div>',
    xmlhttp.onreadystatechange = function() {
      4 == xmlhttp.readyState && 200 == xmlhttp.status && (a.innerHTML = xmlhttp.responseText,
      o.innerHTML = '<span style="color:blue;"><i style="color:red;" class="fa fa-cog fa-spin"></i> PREPARING VIDEOS</span>')
    }
    ,
    xmlhttp.send(null)
  }
}
function showytPlayer(e, t, n) {
  var a = document.getElementById("playeryt" + e)
    , o = document.getElementById("yt" + e);
  if ("<span><b>◼&nbsp;STOP</b></span>" === o.innerHTML)
    a.innerHTML = "",
    o.innerHTML = "<span><b>▶&nbsp;PLAY</b></span>";
  else {
    var l = document.getElementsByTagName("a");
    for (i = 0; i < l.length; i++)
      "playyt_now" == l[i].className && (l[i].innerHTML = "<span><b>▶&nbsp;PLAY</b></span>"),
      "embed" == l[i].className && (l[i].innerHTML = "Embed");
    var r = document.getElementsByTagName("div");
    for (i = 0; i < r.length; i++)
      "playeryt" == r[i].className && (r[i].innerHTML = "");
    a.innerHTML = "",
    xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP"),
    xmlhttp.open("GET", "/youtubeplay.php?id=" + e + "&link=" + t + "&title=" + n),
    a.innerHTML = '<img src="/images/wd.gif" border="0" style="vertical-align:middle;">',
    xmlhttp.onreadystatechange = function() {
      4 == xmlhttp.readyState && 200 == xmlhttp.status && (a.innerHTML = xmlhttp.responseText,
      o.innerHTML = "<span><b>◼&nbsp;STOP</b></span>")
    }
    ,
    xmlhttp.send(null)
  }
}
var activeSong, canPlayMp3ViaHtml5 = canPlayMp3(), html5_audio_player, firstPlayerLoad = !0;
canPlayMp3ViaHtml5 && document.addEventListener("DOMContentLoaded", function() {
  html5_audio_player = document.createElement("audio"),
  html5_audio_player.setAttribute("id", "song"),
  html5_audio_player.setAttribute("ontimeupdate", "updateTime()"),
  html5_audio_player.setAttribute("type", "audio/mp3"),
  document.body.appendChild(html5_audio_player)
});
;!function(t) {
  t.fn.easyPaginate = function(e) {
    function n() {
      clearTimeout(l),
      i = (v - 1) * d,
      o = i + d,
      t(u).each(function(n) {
        var a = t(this);
        a.hide(),
        n >= i && o > n && setTimeout(function() {
          a.fadeIn("fast")
        }, (n - Math.floor(n / d) * d) * e.delay),
        e.nextprev && (o >= p ? c.fadeOut("fast") : c.fadeIn("fast"),
        i >= 1 ? s.fadeIn("fast") : s.fadeOut("fast"))
      }),
      t("li", "#" + e.controls).removeClass(e.current),
      t('li[data-index="' + v + '"]', "#" + e.controls).addClass(e.current),
      e.auto && (e.clickstop && x || (l = setTimeout(a, e.pause)))
    }
    function a() {
      e.loop && o >= p && (v = 0,
      n()),
      p > o && (v++,
      n())
    }
    var i, o, r, c, s, l, f = {
      step: 4,
      delay: 100,
      numeric: !0,
      nextprev: !0,
      auto: !1,
      loop: !1,
      pause: 4e3,
      clickstop: !0,
      controls: "pagination",
      current: "current",
      randomstart: !1
    }, e = t.extend(f, e), d = e.step, u = t(this).children(), p = u.length, h = Math.floor(p / d), v = e.randomstart ? Math.floor(Math.random() * h) + 1 : 1, x = !1;
    this.each(function() {
      if (r = this,
      p > d) {
        p / d > h && h++;
        var a = t('<ol id="' + e.controls + '"></ol>').insertAfter(r);
        if (e.nextprev && (s = t('<li class="prev">Previous</li>').hide().appendTo(a).click(function() {
          x = !0,
          v--,
          n()
        })),
        e.numeric)
          for (var i = 1; h >= i; i++)
            t('<li data-index="' + i + '">' + i + "</li>").appendTo(a).click(function() {
              x = !0,
              v = t(this).attr("data-index"),
              n()
            });
        e.nextprev && (c = t('<li class="next">Next</li>').hide().appendTo(a).click(function() {
          x = !0,
          v++,
          n()
        })),
        n()
      }
    })
  }
}(jQuery);
;$(window).load(function() {
  $("#search_text").autocomplete({
    source: function(e, t) {
      var c = "https://suggestqueries.google.com/complete/search?hl=en&ds=yt&client=youtube&hjson=t&cp=1&q=" + escape(e.term) + "&format=5&alt=json&callback=?";
      $.getJSON(c, function(e) {
        var c = [];
        $.each(e[1], function(e, t) {
          c.push(t[0])
        }),
        t(c)
      })
    },
    select: function(e, t) {
      $("#search_text").val(t.item.label);
    },
    delay: 200
  })
});
function auto_redirect() {
  var e = "";
  var t = $.trim($("#search_text").val());
  if (-1 < t.indexOf("youtube.com") && (e = (new RegExp("v=[a-zA-Z0-9-_]{11}")).exec(t))) {
    e = e.toString().substr(2)
  } else if (-1 < t.indexOf("youtu.be") && (e = (new RegExp("/[a-zA-Z0-9-_]{11}")).exec(t))) {
    e = e.toString().substr(1)
  } else if (-1 < t.indexOf("soundcloud.com/")) {
    document.location.href = "http://azconverter.com/?ref=ssmp3&browser=userscript&url=" + t + "&format=mp3&utm_source=ssmp3.com&utm_medium=search";
    return 1;
  }
  if (0 < e.length) {
    document.location.href = "http://ssmp3.com/youtube.php?v=" + e + "";
    return 1;
  } else {
    if (t.length < 2 || t == "Please enter a valid query (Song)") {
      r("invalid_query");
      return false
    }
  }
  return false;
}
function search_update(sid, kw) {
  $.ajax({
    method: "POST",
    url: site_url + "update.php",
    data: {
      id: sid,
      kw: kw
    }
  }).done(function(msg) {
    console.log('update ' + msg);
  });
}
function search() {
  var auto = auto_redirect();
  if (auto == 1)
    return true;
  var v = $("#search_text").val();
  if (v.trim() == '') {
    $('#search_text').focus();
    return false;
  }
  $('#fountainG').css('display', 'block');
  $.ajax({
    method: "POST",
    url: site_url + "update.php",
    data: {
      kw: v
    },
    beforeSend: function() {
      $('#click_search').prop('disabled', true);
    }
  }).done(function(msg) {
    console.log(msg);
    var res = JSON.parse(msg);
    if (res.url != document.URL) {
      window.location.href = res.url;
    } else {
      window.location.href = res.url;
      $('#fountainG').css('display', 'none');
      $('#click_search').removeAttr('disabled');
    }
  });
}
$('#click_search').click(function() {
  search();
});
$('#search_text').keypress(function(event) {
  var keycode = (event.keyCode ? event.keyCode : event.which);
  if (keycode == '13') {
    search();
  }
});
if (_page == 'search') {
  var t = Math.round(new Date().getTime() / 1000) - parseInt(lastupdate);
  if (t > 900) {
    search_update(sid, kw);
  }
  var check = localStorage.getItem('s_' + sid);
  if (!check)
    check = 0;
  var t2 = Math.round(new Date().getTime() / 1000) - parseInt(check);
  if (parseInt(sid) > 0 && t2 > 900) {
    $.ajax({
      method: "POST",
      url: site_url + "view_count.php",
      data: {
        id: sid
      }
    }).done(function(msg) {
      localStorage.setItem('s_' + sid, new Date().getTime() / 1000);
      console.log('update view sid:' + sid);
    });
  }
} else if (_page == 'download') {
  var check = localStorage.getItem('dl_' + vid);
  if (!check)
    check = 0;
  var t = Math.round(new Date().getTime() / 1000) - parseInt(check);
  if (vid != '' && t > 900) {
    $.ajax({
      method: "POST",
      url: site_url + "download_count.php",
      data: {
        id: vid
      }
    }).done(function(msg) {
      localStorage.setItem('dl_' + vid, new Date().getTime() / 1000);
      console.log('update download vid:' + vid);
    });
  }
}
$(function($) {
  $('ul#items').easyPaginate({
    step: 25
  });
});
function showDownloadss2(divid, btn, url) {
  var a = document.getElementById(divid)
    , b = document.getElementById(btn);
  b.style.display = 'none';
  a.innerHTML = 'Loading...';
  var toppos = $("#" + divid).offset().top - 70;
  $('html, body').animate({
    scrollTop: toppos
  }, 1000);
  setTimeout(function() {
    a.innerHTML = '<iframe class="ytubeframe" src="' + url + '"></iframe>';
  }, 2000);
}
