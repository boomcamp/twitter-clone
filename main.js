$(document).ready(function() {
	var max = parseInt($("textarea").attr("maxlength"));
	$(".actions").hide();

	$(".input-container textarea").blur(textareaBlur);
	$(".input-container textarea").focus(textareaFocus);
	$(".post-tweet").click(postTweet);

	//for dark mode
	$("#dark-btn").click(dark);

	//functions

	function textareaBlur() {
		if ($(".input-container textarea").val() == "") {
			$(".actions").hide();
			$(".input-container textarea").removeClass("expanded");
			$(".input-button").show();
		}
	}

	function textareaFocus() {
		$(".actions").show();
		$(".input-button").hide();
		$("textarea").on("keypress input", buttonchange);
		$(".input-container textarea").addClass("expanded");
	}

	function buttonchange() {
		$(".message-count").text(max);

		var total = max - $("textarea").val().length;

		$(".message-count").text(total);

		if (total <= 10) {
			$(".message-count").css("color", "red");
		} else {
			$(".message-count").css("color", "#13B5F0");
		}
		if ($("textarea").val() != "") {
			$(".post-tweet").removeAttr("disabled");
		} else {
			$(".post-tweet").attr("disabled", true);
		}
	}

	function postTweet() {
		const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "October", "NOV", "DEC"];
		var tweet = $("textarea").val();
		var today = new Date();
		var date = months[today.getMonth()] + " " + today.getDate();
		var hours = today.getHours();
		var minutes = today.getMinutes();
		var seconds = today.getSeconds();

		var newformat = hours >= 12 ? "PM" : "AM";

		hours = hours % 12;

		hours = hours ? hours : 12;
		minutes = minutes < 10 ? "0" + minutes : minutes;

		var time = hours + ":" + minutes;
		var dateTime = time + " " + newformat + " " + date;

		$(".tweets").prepend(
			`<div class="tweet"><div class="profile"><img class="img-tweet-profile" src="img/damenleeturks.jpg" /></div><div class="message"><div class="posted-by"><span class="display-name">Jeff</span><span class="handle">@jeffguy</span></div><div class="content"><p> 
				${tweet} 
			</p><p class="time-stamp">${dateTime}</p></div><div class="tweet-actions"><i class="far fa-comment"></i><i class="fas fa-retweet"></i><i class="far fa-heart"></i><i class="far fa-envelope"></i></div></div></div>`
		);

		$(".actions").hide();
		$(".input-container textarea").removeClass("expanded");
		$("textarea").val("");
		$(".input-button").show();
		if ($("textarea").val() == "") {
			$(".post-tweet").attr("disabled", true);
		}

		$(".message-count").text(280);
		$(".message-count").css("color", "#13B5F0");
	}

	function dark() {
		if ($("input[type=checkbox]").prop("checked")) {
			$("#head-compose").addClass("bg-black");
			$("#foot-compose, .tweets, .pos").addClass("bg-dark");
			$(".tweets").addClass("text-white");
		} else {
			$("#foot-compose, .tweets, .pos").removeClass("bg-dark");
			$(".tweets").removeClass("text-white");
			$("#head-compose").removeClass("bg-black");
		}
	}
});
