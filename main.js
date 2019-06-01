$( document ).ready(function() {
    
    $( ".action-buttons" ).hide();
    $( ".post-actions" ).hide();

    $( "#composeInput" ).click(function() {
        $('.action-buttons').show();
        $('.post-actions').show();
    });
   
    $("textarea").keyup(function() {
		if($(this).val().length > 0) {
			$('.post-tweet').removeAttr('disabled');
		} else {
			$('.post-tweet').attr('disabled','disabled');
		}
    }).trigger('keyup'); // Enable button when text is typed

    var maxlen = 280;
    $("textarea").keyup(function(e) {
    var txtLen = $(this).val().length;
        if(txtLen <= maxlen) {
    var messageCount = maxlen - txtLen;
     $(".message-count").text(messageCount);
        }
        if(txtLen >= 270) {
            $(".message-count").css('color', '#FF0000');
        }
        else if(txtLen < 270) {
            $(".message-count").css('color', '#13B5F0');
        }
    });

    $("#textarea").keydown(function(e) {
    var keycode = e.keyCode;
    var txtLen = $(this).val().length;
      if(txtLen > maxlen) {
        if(keycode != 8) {
        return false;
             }
         }
     }); // Limit input to 280 characters

     $(".actions").click(function() {
        $('.action-buttons').hide();
        $('.post-actions').hide();
    });

    $(".actions").click(function() {
        $("textarea").val('');
    });

var $newButtonTweet = $(".post-tweet");

  $newButtonTweet.on("click", () => {
    var $twt = $("#composeInput").val();
    var $newTweet =
      '<div class="tweet">' +
      '<div class="profile">' +
      '<img class="img-tweet-profile" src="img/damenleeturks.jpg" />' +
      "</div>" +
      '<div class="message">' +
      '<div class="posted-by">' +
      '<span class="display-name">Jeff</span>' +
      '<span class="handle">@jeffguy</span>' +
      "</div>" +
      '<div class="content">' +
      "<p>" +
      $twt +
      "</p>" +
      "</div>" +
      '<div class="tweet-actions">' +
      '<i class="far fa-comment"></i>' +
      '<i class="fas fa-retweet"></i>' +
      '<i class="far fa-heart"></i>' +
      '<i class="far fa-envelope"></i>' +
      "</div>" +
      "</div>" +
      "</div>";

    $(".tweets").prepend($newTweet);
    $("#composeInput").removeClass("expanded");
    $(".input-button").show();
    $("#composeInput").val("");
    $(".message-count").text(280);
    $(".post-tweet").prop("disabled", true);
    $(".actions").hide();
    });	
});
