$(document).ready(function() {
    $('.actions').hide();

    function toHide() {
        $('#composeInput').css('height', '34px');
        $('.actions').hide();
        $('.input-button').show();
    }
    $('#composeInput').focusout(function() {



        if ($('#composeInput').val() != '') {
            $('#composeInput').css('height', function(indx) {
                return indx = 34 * 2;
            });
            $('.actions').show();
            $('.input-button').hide();
        } else {
            toHide();
        }

    });

    $('#composeInput').focusin(function() {
        $('#composeInput').css('height', function(indx) {
            return indx = 34 * 2;
        });
        $('.actions').show();
        $('.input-button').hide();
    });

    $('#composeInput').keyup(function() {
        var regEx = /^\s+$/
        var maxlen = 280;
        var inputValue = $(this).val();
        var len = inputValue.length;
        var remainLen = maxlen - len;
        if (remainLen < 11) {
            $('.message-count').css('color', 'red');
        } else {
            $('.message-count').css('color', '#13B5F0');
        }
        $('.message-count').text(remainLen);

        if ((inputValue == '') || (inputValue.match(regEx))) {
            $('.post-tweet').prop('disabled', true);
        } else {
            $('.post-tweet').prop('disabled', false);
        }
    });

    function startTime(i) {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        //m = checkTime(m);
        //s = checkTime(s);

        var t = setTimeout(startTime, 500);
    }

    function checkTime(i) {
        var x;
        if (i == 60) {
            x = x++;

        }
        if (x != null) {
            $('.timeShow').html(' ' + s);
        } else {
            return i + ' second(s) ago'
        }

    }


    $('.post-tweet').click(function() {
        startTime();

        $('.tweets').prepend(
            '<div class="tweet">' +
            '<div class="profile">' +
            '<img class="img-tweet-profile" src="img/damenleeturks.jpg">' +
            '</div>' +
            '<div class="message">' +
            '<div class="posted-by">' +
            '<span class="display-name">Jeff</span>' +
            '<span class="handle">@jeffguy' +
            '<span class="timeShow"> </span>' +
            '</span>' +
            '</div>' +
            '<div class="content">' +
            '<p>' +
            $('#composeInput').val() +
            '</p>' +
            '</div>' +
            '<div class="tweet-actions"></div>' +
            '</div>' +
            '</div>'
        );

        $('#composeInput').val('');
        toHide();
    });







});