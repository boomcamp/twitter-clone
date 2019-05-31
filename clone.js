$(document).ready(() => {
  
    $('.actions').hide();

    $('#composeInput').focus('click', () =>{
        $('.actions').show();
        $('.input-button').hide();  
        $('#composeInput').addClass('expanded')
    
    })


    $('#composeInput').keyup(function(){
        $(".post-tweet").attr("disabled", true);
        if ($(this).val().length === 0) {
          $(".post-tweet").attr("disabled", true);
        } else {
          $(".post-tweet").removeAttr("disabled");
        }
      })
     
      $(document).ready(function(){
        var max = 280;
        $("#composeInput").keyup(function(e){
     
         // Finding total characters in Textarea
         var txtLen = $(this).val().length;
     
         if(txtLen <= max){
          var remain = max - txtLen;
     
          if (remain <= 10) {
            $(".message-count").text(remain).css('color', 'red');
          }
          else {
            $(".message-count").text(remain).css('color', '#13B5F0');
          }
         }
        });


    });

    $('#composeInput').focusout(()=>{
        if($('#composeInput').val().length<=0){
            $('.actions').hide()
            $('#composeInput').removeClass('expanded')
            $('.input-button').show();
        }
    })

   
    var $btn = $('.post-tweet');

    $btn.on('click', () => {
        var $tweet = $('textarea').val();
        var $newTweet = '<div class="tweet">' +
        '<div class="profile">' + 
        '<img class="img-tweet-profile" src="img/damenleeturks.jpg" />' +
        '</div>' +
        '<div class="message">' +
        '<div class="posted-by">' +
        '<span class="display-name">Jeff</span>' +
        '<span class="handle">@jeffguy</span>' +
        '</div>' +
        '<div class="content">' +
        '<p>'+ $tweet +'</p>' +
        '</div>' +
        '<div class="tweet-actions">' +
        '<i class="far fa-comment"></i>' +
        '<i class="fas fa-retweet"></i>' +
        '<i class="far fa-heart"></i>' +
        '<i class="far fa-envelope"></i>' +
        '</div>' +
        '</div>' +
        '</div>';

        $('.tweets').prepend($newTweet);
        $('textarea').removeClass('expanded');
        $('#composeInput').val('');
        $('.message-count').text(280);
        $('.post-tweet').attr('disabled', true);
        $('.actions').hide();
        $('.input-button').show();

       
    });

    
});

