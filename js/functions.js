function makeTimer() {

	//		var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");	
		var endTime = new Date("31 January 2020 0:00:00 GMT+5:30");			
			endTime = (Date.parse(endTime) / 1000);

			var now = new Date();
			now = (Date.parse(now) / 1000);

			var timeLeft = endTime - now;

			var days = Math.floor(timeLeft / 86400); 
			var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
			var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
			var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
  
			if (hours < "10") { hours = "0" + hours; }
			if (minutes < "10") { minutes = "0" + minutes; }
			if (seconds < "10") { seconds = "0" + seconds; }

			$("#days").html(days);
			$("#hours").html(hours );
			$("#minutes").html(minutes);
			$("#seconds").html(seconds);		

	}

	setInterval(function() { makeTimer(); }, 1000);


(function ($) {



	$('#countdown_dashboard1').countDown({

	        targetOffset: {
	            'day':      38,
	            'month':    1,
	            'year':     0,
	            'hour':     0,
	            'min':      0,
	            'sec':      0

	        },


	    });

	$('#email_field').focus(email_focus).blur(email_blur);
	$('#subscribe_form').bind('submit', function() { return false; });

})(jQuery);
