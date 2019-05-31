$(document).ready(function(){
    alert("Hello World!");
    $('.actions').hide();
    
    var originalWidth = $('#composeInput').width();
    var originalHeight = $('#composeInput').height(); 
    
    //check if input box has val, then enable tweet button
   
      

    $("#composeInput").focusin(function(){
       let doubleH = $(this).height() * 2;
       $(this).height(doubleH);
       let doubleW = $(this).height() * 2;
       $(this).height(doubleW);

       $('.actions').show();
       $('.input-button').hide();
        });

    $("#composeInput").focusout(function(){
        $(this).height(originalHeight);
        $(this).width(originalWidth);
        
        $('.actions').hide();
        $('.input-button').show();
        });

    var originalCharCount = parseInt($('.message-count').text());
    $("#composeInput").keyup(function(){
        console.log('changed');
        if ($('#composeInput').val()[0] == "" || $('#composeInput').val()[0] == 'undefined' || !$.trim($(this).val()) ) {
            // textarea is empty or contains only white-space
            console.log('empty');
            $('.post-tweet').attr("disabled", true);
            }
        if ($.trim($(this).val())) {
            // textarea is  not empty
            console.log('not empty');
            $('.post-tweet').attr("disabled", false);
            }
        console.log('length is' + $(this).val().length);
        console.log(originalCharCount - $(this).val().length);
        
        let tweetLength = originalCharCount - $(this).val().length;
        $('.message-count').text(tweetLength);

        if(tweetLength <= 10){
            $('.message-count').css('color','red');
        }
        if(tweetLength > 10){
            $('.message-count').removeAttr('style');
        }
        
       
    });
    
  
  });