$( document ).ready(function() {
    
    $( ".action-buttons" ).hide();
    $( ".post-actions" ).hide();

    $( "#composeInput" ).click(function() {
        $('.action-buttons').show();
        $('.post-actions').show();
    });
   
    $('textarea').keyup(function() {
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

});






