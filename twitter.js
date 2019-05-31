const tweets=$('.tweets');
const actions=$('.actions');
const button=$('.post-tweet');
const inputButton=$('.input-button');

tweets.hide();
actions.hide();

const counter=$('.meassage-count');
$('#composeInput').focus(function(){
    $(this).addClass('expanded');
    tweets.show();
    actions.show();
    inputButton.hide();
})
.blur(function(){
    if($(this).val().length===0){
        $(this).removeClass('expanded');
        actions.hide();
    }
})
.keyup(function(a){
    });
$('#composeInput').on('input',function (a) {
        var currentLength = $(this).val().length;
        var maxlength = $(this).attr('maxlength');
        const counter = $('.message-count');
        if(currentLength > 0) {
            if(currentLength >= maxlength-10) {
                 counter.addClass('danger');
                } else {
                     counter.removeClass('danger'); 
                    }
            $('.post-tweet').prop('disabled', false);
             }else {
            $('.post-tweet').prop('disabled', true);
             }
             counter.html(maxlength - $(this).val().length);
});

$('.post-tweet').click(function() {
    $('#composeInput').removeClass('expanded');
         $('.actions').hide();
         $('.tweets').show();

         var tweet = $('<div class="tweet">'+
           '<div class="profile">'+
             '<img class="img-tweet-profile" src="img/damenleeturks.jpg" />'+
           '</div>'+
           '<div class="message">'+
             '<div class="posted-by">'+
               '<span class="display-name">Jeff</span>'+
               '<span class="handle">@jeffguy</span>'+
               '<span class="timeago"></span>'+
             '</div>'+
             '<div class="content">'+
               '<p>'+$("#composeInput").val()+'</p>'+
             '</div>'+
             '<div class="tweet-actions">'+
               '<i class="far fa-comment"></i>'+
               '<i class="fas fa-retweet"></i>'+
               '<i class="far fa-heart"></i>'+
               '<i class="far fa-envelope"></i>'+
             '</div>'+
           '</div>'+
         '</div>');

         $('.tweets').prepend(tweet);
         $('#composeInput').val('');

    
  })