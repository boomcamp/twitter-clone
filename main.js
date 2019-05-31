$(document).ready(() => {
    $('.actions').hide();
    // $('.tweets').hide();

    // $('.compose').on('mouseenter', () => {
    //     $('.actions').hide();
    //     $('.tweets').hide();
    //     // $('')
    //     // $('.class').hide();
    // });
//click into the input
    $('#composeInput').on('click', () => {
        $('#composeInput').animate({height: '200%'});
        $('.input-button').hide();
        $('.actions').show();
    }).on('mouseleave', () => {     //click out of the input
        var char = $('#composeInput').val().length;
        if(char == 0){
            $('.actions').hide();
            // $('.tweets').hide();
        }
        else{
            $('.actions').show();
            // $('.tweets').show();
        }
        // $('#composeInput').animate({height: '100%'});
    }).keyup(function() {           //entering texts
        // var char = $(this).attr('value');
        // var char = $(this.currentTarget).val();
        // var len = $(this).val().length;
        var len = $(this).val().length;
        var maxChar = 280; 
        var charLen = maxChar - len;

        if(len !== 0){
            $('.post-tweet').prop('disabled', false);
        }
        else{
            $('.post-tweet').prop('disabled', true);
        }
        //////////////
        if (len >= 270) {
            $('.message-count').text(charLen);
            $('.message-count').css({color: "red"});
        } 
        else {
            $('.message-count').text(charLen);
            $('.message-count').css({color: "#13B5F0"});
        }
    });

    $('.post-tweet').on('click', () => {
        // var len = $(this).val().length;
        $('.actions').hide();
        // $('.tweets').show();    

        var textCont = $('#composeInput').val(); 

        $('.tweet:first').clone().prependTo('.tweets');
        $('.tweet:first .img-tweet-profile').text('/img/damenleeturks.jpg');
        $('.tweet:first .display-name').text('Elijah');
        $('.tweet:first .handle').text('@sometwitterguy');
        $('.tweet:first p').text(textCont);

        $('#composeInput').val(' ');
        // var par = $(this).val().length;
        // var par = 280;
    })

    
});