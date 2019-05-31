$(document).ready(function(){
    //alert("Hello World!");
    $('.actions').hide();
    
    var originalWidth = $('#composeInput').width();
    var originalHeight = $('#composeInput').height(); 
    var doubleHeight = originalHeight * 5;
    
   

    $("#composeInput").focusin(function(){
       $(this).height(doubleHeight);
       $('.actions').show();
       $('.input-button').hide();
        });

    $("#composeInput").focusout(function(){
        $(this).height(originalHeight);
        $(this).width(originalWidth);
        

        if ($.trim($(this).val())) {
            // textarea is  not empty
            $(this).height(doubleHeight);
            $('.actions').show();
            $('.input-button').hide();
            }
        else{

        $('.actions').hide();
        $('.input-button').show();
        }
        });

    var originalCharCount = parseInt($('.message-count').text());
    $("#composeInput").keyup(function(){
        //console.log('changed');
        if ($('#composeInput').val()[0] == "" || $('#composeInput').val()[0] == 'undefined' || !$.trim($(this).val()) ) {
            // textarea is empty or contains only white-space
            //console.log('empty');
            $('.post-tweet').attr("disabled", true);
            }
        if ($.trim($(this).val())) {
            // textarea is  not empty
            //console.log('not empty');
            $('.post-tweet').attr("disabled", false);
            }
        //console.log('length is' + $(this).val().length);
        //console.log(originalCharCount - $(this).val().length);
        
        let tweetLength = originalCharCount - $(this).val().length;
        $('.message-count').text(tweetLength);

        if(tweetLength <= 10){
            $('.message-count').css('color','red');
        }
        if(tweetLength > 10){
            $('.message-count').removeAttr('style');
        } 
    });

    //tweet btn
    $( ".post-tweet" ).click(function() {
    $('.tweets').prepend($( '<div class="tweet">' +
        '<div class="profile">' +
        '  <img class="img-tweet-profile" src="img/damenleeturks.jpg" />' +
        '</div>' +
        '<div class="message">' +
        '  <div class="posted-by">' +
        '    <span class="display-name">Jeff</span>' +
        '    <span class="handle">@jeffguy</span>' +
        '  </div>' +
        `<div class="content"><p>${$('#composeInput').val()}</p></div>` +
        '  <div class="tweet-actions">' +
        '    <i class="far fa-comment"></i>' +
        '   <i class="fas fa-retweet"></i>' +
        '    <i class="far fa-heart"></i>' +
        '    <i class="far fa-envelope"></i>' +
        '  </div>' +
        '</div>' +
        '</div>'));
    
        $('#composeInput').val("");
        $('#composeInput').height(originalHeight);
        $('#composeInput').width(originalWidth);
        $('.actions').hide();
        $('.input-button').show();
        
    
    });

    
  
  });


