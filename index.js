$('button').hide();
$('.message-count').hide();
$('.actions').hide();


$( "#composeInput" ).focus(function() {
    $('button').show();
    $('.message-count').show();
    $('.input-button').hide();
    $('textarea').addClass('expanded');
    $('.actions').show();
});




// $('.actions').on('click', () => {

//     $('button').hide();
//     $('.message-count').hide();
//     $('.tweets').show();
//     $('#img').show();
//     $('#composeInput').addClass('expanded');
// })


$("#composeInput").on("keypress", function () {
    if ($(this).val() != "") {
      $("button").removeAttr('disabled');
    }
  });


var textarea = $('#composeInput');
$('textarea').on('input', function(){
    var maxlength = $(this).attr('maxlength');
    var currentLength = $(this).val().length;
    var sum = maxlength - currentLength;
    $('.message-count').text(sum);


    if(sum <= 10){
        $('.message-count').css({
            color: 'red'
        });
    } 

    if(currentLength > 0){
        $("button").removeAttr('disabled');
    }

    if(currentLength === 0){
    $('.actions').on('click', () => {
    $('button').hide();
    $('.message-count').hide();
    $('.input-button').show();
    $('textarea').removeClass('expanded');
    $('.tweet').show();
});
    }

    


});


// if (!$('textarea').val().length)
// {
//     $('#composeInput').on('click', () => {
//         $('button').show();
//         $('.message-count').show();
//         $('#img').hide();
//         $('#composeInput').addClass('expanded');
//     })
    
// } 


$('.actions').on('click', () => {
    // $('#composeInput').removeClass('expanded');
    // $('.actions').hide();
    // $('.input-button').show();

    // $('button').show();
    // $('.message-count').show();
    $('.input-button').hide();
    $('textarea').removeClass('expanded');
    $('.actions').hide();
});


$("#composeInput").focusout(() => {
    if ($("#composeInput").val().length <= 0) {
      $(".actions").hide();
      $("#composeInput").removeClass("expanded");
      $(".input-button").show();
    }
  });


$('.post-tweet').on('click', () => {
    var $tweet = $('textarea').val();
       var $nTweet = '<div class="tweet">'+
       '<div class="profile">'+
         '<img class="img-tweet-profile" src="img/damenleeturks.jpg" />'+
       '</div>'+
       '<div class="message">'+
         '<div class="posted-by">'+
           '<span class="display-name">Jeff</span>'+
           '<span class="handle">@jeffguy</span>'+
         '</div>'+
         '<div class="content">'+
           '<p>'+ $tweet +'</p>'+
         '</div>'+
         '<div class="tweet-actions">'+
           '<i class="far fa-comment"></i>'+
           '<i class="fas fa-retweet"></i>'+
           '<i class="far fa-heart"></i>'+
           '<i class="far fa-envelope"></i>'+
         '</div>'+
       '</div>'+
     '</div>';

       $('.tweets').prepend($nTweet);
       $('textarea').removeClass('expanded');
       $('textarea').val('');
       $('.message-count').text(280);
       $('.post-tweet').prop('disabled', true);
       $('button').hide();
$('.message-count').hide();
$('.actions').show();

       
})




















