const textHeight = 34;
const messBox = parseInt($('.message-count').text());
$(document).ready(function() {
    $('.actions').css("display","none");

    
    $('#composeInput').focus(function() {
        let yow = (parseInt(textHeight)*2);
        var tbox = $('#composeInput').val();
        $('.actions').css("display","flex");
        $('.input-button').css("display","none");
        if(tbox != '') {
            $('.post-tweet').attr("disabled", false);
        } else {
            $('.post-tweet').attr("disabled", true);
            $('#composeInput').addClass("expanded");
            console.log(yow);
        } 
    });
    
    $('#composeInput').blur(function() {
        var tbox = $('#composeInput').val();
        let yow = (parseInt(textHeight));
    
        if(tbox != '') {
            $('.actions').css("display","flex");
            $('.post-tweet').attr("disabled", false);
        } else {
            $('.actions').css("display","none");
            $('#composeInput').removeClass("expanded"); 
            $('.input-button').css("display","block");
            $('.post-tweet').attr("disabled", true);
        }
    });

    $('#composeInput').keyup(function() {
        var tbox = $('#composeInput').val();
        var len = parseInt($('message-count').text());
        if(tbox == '') {
            $('.post-tweet').attr("disabled", true);
            $('.message-count').text(messBox).toString();
            $('.message-count').css("color", "#13B5F0");
        } else {
            $('.message-count').text(messBox-parseInt(tbox.length).toString());
            var len = parseInt($('.message-count').text());
            if(len <= 10) {
                $('.message-count').addClass("danger");
            } else if (len > 10) {
                $('.message-count').removeClass("danger");
            }
            console.log($('.message-count').text());
            $('.post-tweet').attr("disabled", false);
        }
        
    });

    $('.post-tweet').click(function() {
        let yow = (parseInt(textHeight));
        
        $('.tweets').prepend(`<div class="tweet">`+
        `<div class="profile">`+
        `<img class="img-tweet-profile" src="https://source.unsplash.com/random/800x600" />`+
        `</div>`+
        `<div class="message">`+
        `<div class="posted-by">`+
        `<span class="display-name">Jeff</span><span class="handle">@jeffguy</span>`+
        `</div>`+
        `<div class="content"><p>${$('#composeInput').val()}</p></div>`+
        `<div class="tweet-actions"><i class="far fa-comment"></i><i class="fas fa-retweet"></i><i class="far fa-heart"></i><i class="far fa-envelope"></i></div>`+
        `</div>`+
        `</div>`
        );

        $('#composeInput').val("");
        $('.message-count').text(messBox);
        $('.actions').css("display","none");
        $('#composeInput').removeClass("expanded");
        $('.input-button').css("display","block");
        $('.post-tweet').attr("disabled", true);
    });
});