(function($) {
	$(document).ready(function() {
		$('.topten a').tooltip();
		$(".nav li").removeClass("active");
		$("[href='"+ document.location.hash +"']").click(function() {
			this.parent().addClass("active");
		});
		$("a").each(function(i, el) {
			if (el.hash == location.hash) {
				window.selected = true
			}
		})
	})

	$(document).on("mobileinit", function() {
		firstURL = $.mobile.path.parseUrl(window.location.href);
		cache_localStorage && cache_localStorage_clean()
	});

	function activate_nav(x){
		$(".nav li").removeClass("active");
		$(x).parent().addClass("active");
	}

})(jQuery);
function bytesToSize(b,c){var g=0;if(0==b)return"n/a";for(;1024<=b;)g++,b/=1024;return b.toFixed(c)+" "+["Bytes","KB","MB","GB","TB"][g]}
function formatBytes(b,c){if(0==b)return"No";var g=c+1||1,f=Math.floor(Math.log(b)/Math.log(1E3));return parseFloat((b/Math.pow(1E3,f)).toFixed(g))+" K M G T P E Z Y".split(" ")[f]}