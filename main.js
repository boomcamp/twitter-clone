$(document).ready(function() {
	var max = 280;
	$(".message-count").text(max);
	$(".actions").hide();
	$(".input-container textarea").blur(function() {
		if ($(".input-container textarea").val() == "") {
			$(".actions").hide();
			$(".input-container textarea").removeClass("expanded");
			$(".input-button").show();
		}
	});

	$(".input-container textarea").focus(function() {
		$(".actions").show();
		$(".input-button").hide();
		$("textarea").on("keyup", buttonchange);
		$(".input-container textarea").addClass("expanded");
	});

	$(".post-tweet").click(function() {
		var tweet = $("textarea").val();

		$(".tweets").prepend(
			`<div class="tweet"><div class="profile"><img class="img-tweet-profile" src="img/damenleeturks.jpg" /></div><div class="message"><div class="posted-by"><span class="display-name">Jeff</span><span class="handle">@jeffguy</span></div><div class="content"><p> 
				${tweet} 
			</p></div><div class="tweet-actions"><i class="far fa-comment"></i><i class="fas fa-retweet"></i><i class="far fa-heart"></i><i class="far fa-envelope"></i></div></div></div>`
		);

		$(".actions").hide();
		$(".input-container textarea").removeClass("expanded");
		$("textarea").val("");
		$(".input-button").show();
		if ($("textarea").val() == "") {
			$(".post-tweet").attr("disabled", true);
		}
	});

	//functions
	function buttonchange() {
		var text = $("textarea").val();
		var max = max - text.length;

		$(".message-count").text(max);

		if (text.length > max) {
			var new_text = text.substr(0, max);
			$(".message-count").val(new_text);
		} else {
			$(".message-count").text(total);
		}

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
});
