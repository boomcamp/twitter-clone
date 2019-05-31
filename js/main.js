$(document).ready(function(){
    $('.actions').hide();
    $('#composeInput').on('click', function(){
        $('.actions').show();
        $('#composeInput').addClass('expanded').focus();
        $('.input-button').hide();
    });

    $("#composeInput").keyup(function() {
        $(".post-tweet").prop("disabled", !this.value);
    });

    $('#composeInput').on("input", function(){
        var maxlength = 280;
        var currentLength = $(this).val().length;
        if(currentLength >= maxlength - 10){
            $('.message-count').addClass('danger');
            $('.message-count').text(maxlength - currentLength);
        }else{
            $('.message-count').removeClass('danger');
            $('.message-count').text(maxlength - currentLength);
        }
    });

    $('#composeInput').on('blur', function() {
        if(composeInput.value)
        return;
        $('.actions').hide();
        $('#composeInput').removeClass('expanded');
        $('.input-button').show();
    });

    $('.post-tweet').on('click', function(){
        var msg = $('textarea#composeInput').val();
        if(!$('.mode').hasClass('inDarkMode')){
            var tweet = 
            '<div class="tweet">'+
            '<div class="profile">'+
                '<img class="img-tweet-profile" src="img/damenleeturks.jpg" />'+
            '</div>'+
            '<div class="message">'+
                '<div class="posted-by">'+
                '<span class="display-name">Jeff</span>'+
                '<span class="handle">@Jeffguy</span>'+
                '</div>'+
                '<div class="content">'+
                '<p>'+msg+'</p>'+
                '</div>'+
                '<div class="tweet-actions">'+
                '<i class="far fa-comment"></i>'+
                '<i class="fas fa-retweet"></i>'+
                '<i class="far fa-heart"></i>'+
                '<i class="far fa-envelope"></i>'+
                '</div>'+
            '</div>'+
            '</div>';
        }else{
            var tweet = 
            '<div class="tweet dark">'+
            '<div class="profile">'+
                '<img class="img-tweet-profile" src="img/damenleeturks.jpg" />'+
            '</div>'+
            '<div class="message">'+
                '<div class="posted-by">'+
                '<span class="display-name white">Jeff</span'+
                '><span class="handle">@Jeffguy</span>'+
                '</div>'+
                '<div class="content white">'+
                '<p>'+msg+'</p>'+
                '</div>'+
                '<div class="tweet-actions abitwhite">'+
                '<i class="far fa-comment"></i>'+
                '<i class="fas fa-retweet"></i>'+
                '<i class="far fa-heart"></i>'+
                '<i class="far fa-envelope"></i>'+
                '</div>'+
            '</div>'+
            '</div>';
        }
        $('.tweets').prepend(tweet);
        $('.actions').hide();
        $('.input-button').show();
        $('#composeInput').removeClass('expanded').val('');
        $('.message-count').text(280);
        $(".post-tweet").prop("disabled", !this.value);
    });

    $('.mode').on('click', function(){
        if(!$('.mode').hasClass('inDarkMode')){
            $('.mode').addClass('inDarkMode');
            $('.mode').removeClass('off');
            $('.mode').addClass('on');
            $('html').addClass('darker');
            $('body').addClass('darker');
            $('p').addClass('white');
            $('.content').addClass('white');
            $('.tweet-actions').addClass('abitwhite');
            $('.display-name').addClass('white');
            $('.tweet').addClass('dark');
            $('.compose').addClass('abitdark');
            $('textarea').addClass('dm-textarea');
        }else{
            $('.mode').removeClass('inDarkMode');
            $('.mode').removeClass('on');
            $('.mode').addClass('off');
            $('html').removeClass('darker');
            $('body').removeClass('darker');
            $('p').removeClass('white');
            $('.content').removeClass('white');
            $('.tweet-actions').removeClass('abitwhite');
            $('.display-name').removeClass('white');
            $('.tweet').removeClass('dark');
            $('.compose').removeClass('abitdark');
            $('textarea').removeClass('dm-textarea');
        }
    });
});