$(document).ready(() => {
    
    const $actions = $('.actions');
    const $inputBtn = $('.input-button');
    $actions.hide();

    

    $('#composeInput').focus('click', () => {
        $actions.show();
        $('#composeInput').addClass("expanded");
        $inputBtn.hide();  
    });

    $('#composeInput').focusout( () => {
        if($('#composeInput').val().length <= 0){
            $('#composeInput').removeClass("expanded");
            $actions.hide();
            $inputBtn.show(); 
        }
        
    });



    $('#composeInput').on( 'input', () => {
        const $messageCount = $('.message-count');
        const $textAreaLength = $('#composeInput').attr('maxlength');
        var $textInput = $('#composeInput').val().length;

            var text_remaining = $textAreaLength - $textInput;
            $messageCount.html(text_remaining);
           
            if(text_remaining <= 10){
                $messageCount.addClass("danger");
                
            }else{
                $messageCount.removeClass("danger");
            }

            if($textInput >= 0 ){
                $('.post-tweet').removeAttr('disabled')
            }
            
    });

    
    
    var $btnTweet = $('.post-tweet');

    
    $btnTweet.on('click', () => {
        var $tweetValue = $('#composeInput').val();
        var $newTweet = '<div class="tweet">'+
        '<div class="profile">'+
          '<img class="img-tweet-profile" src="img/damenleeturks.jpg" />'+
        '</div>'+
        '<div class="message">'+
          '<div class="posted-by">'+
            '<span class="display-name">Jeff</span>'+
            '<span class="handle">@jeffguy</span>'+
          '</div>'+
          '<div class="content">'+
            '<p>'+ $tweetValue +'</p>'+
          '</div>'+
          '<div class="tweet-actions">'+
            '<i class="far fa-comment"></i>'+
            '<i class="fas fa-retweet"></i>'+
            '<i class="far fa-heart"></i>'+
            '<i class="far fa-envelope"></i>'+
          '</div>'+
        '</div>'+
      '</div>';

        $('.tweets').prepend($newTweet);
        $('#composeInput').removeClass('expanded');
        $inputBtn.show();
        $('#composeInput').val('');
        $('.message-count').text(280);
        $('.post-tweet').prop('disabled', true);
        $actions.hide();


    })



})