$(document).ready(function() {
    $('.actions').hide();


    $('#composeInput').focusout(function() {



        if ($('#composeInput').val() != '') {
            $('#composeInput').css('height', function(indx) {
                return indx = 34 * 2;
            });
            $('.actions').show();
            $('.input-button').hide();
        } else {
            $('#composeInput').css('height', '34px');
            $('.actions').hide();
            $('.input-button').show();
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

    $('.post-tweet').click(function() {
        $('.tweets').append(
            '<div class="tweet">' +
            '<div class="profile">' +
            '<img class="img-tweet-profile" src="img/damenleeturks.jpg">' +
            '</div>' +
            '<div class="message">' +
            '<div class="posted-by">' +
            '<span class="display-name">Jeff</span>' +
            '<span class="handle">@jeffguy</span>' +
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

    });







});