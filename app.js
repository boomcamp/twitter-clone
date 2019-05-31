let boolYah = false;
const messBox = parseInt($('.message-count').text());
function tweet(timeLog,timeNow) {
    this.timeLog = timeLog,
    this.timeNow = timeNow,
    this.addTime = function() {
        this.timeNow += 1;
    }
}

let tweets = [];

$(document).ready(function() {
    $('.actions').css("display","none");

    
    $('#composeInput').focus(function() {
        var tbox = $('#composeInput').val();
        $('.actions').css("display","flex");
        $('.input-button').css("display","none");
        if(tbox != '') {
            $('.post-tweet').attr("disabled", false);
        } else {
            $('.post-tweet').attr("disabled", true);
            $('#composeInput').addClass("expanded");
        } 
    });
    
    $('#composeInput').blur(function() {
        var tbox = $('#composeInput').val();
    
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
        let now = new Date();
        now.setSeconds(now.getSeconds());
        console.log(now);
        tweets.push(tweet(0,0));
        $('.tweets').prepend(`<div class="tweet">`+
        `<div class="profile">`+
        `<img class="img-tweet-profile" src="https://source.unsplash.com/random/800x600" />`+
        `</div>`+
        `<div class="message">`+
        `<div class="posted-by">`+
        `<span class="display-name">Jeff</span><span class="time"></span></span><span class="handle">@jeffguy</span><span class="handle hand" id="hand"></span>`+
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

    $('.switch button').click(function() {
        console.log(boolYah);
        if(boolYah == false) {
            $('main').addClass('nightmode-on');
            $('.switch button').text('Nightmode On');
            boolYah = true;
            event.preventDefault();
        } else if(boolYah == true) {
            $('main').removeClass('nightmode-on');
            $('.switch button').text('Nightmode Off');
            boolYah = false;
            event.preventDefault();
        }
    });

    /*setInterval(function() {
        for(let x of tweets) {
            console.log(x);
        }
    }, 1000);*/

});