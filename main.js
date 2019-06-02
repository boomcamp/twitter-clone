$(document).ready(() => {

    $('.actions').hide();

    $('#composeInput').on('focus', () => {
        $('.actions').show();
        $('.input-button').hide();
        $('textarea').addClass('expanded');
    });
    
    $('#composeInput').on('focusout', event => {
        var postvalue = $(event.currentTarget).val();
        console.log(postvalue);

        if(postvalue.length !== 0){
            $('.actions').show();
        }else{
            $('.actions').hide();
            $('textarea').removeClass('expanded');
            $('.input-button').show();
        }
        
    });
   

 //count
    $('#composeInput').on('keyup', event => {
        const post = $(event.currentTarget).val();
        const remaining = 280 - post.length;
        $('.message-count').html(remaining); 
        if (remaining !== 280){
            $('.post-tweet').removeAttr('disabled');
        }
        
        if(remaining <= 10){
            $('.message-count').addClass('danger');
        }else{
            $('.message-count').removeClass('danger');
        }
    });

    $('.post-tweet').on('click', event => {
        $('.input-button').show();
        var post = $(event.currentTarget).val();
        if(post.length == 0){
            $('.message-count').html(280);
        }

        $('textarea').removeClass('expanded');
         $('.actions').hide();
    })

    
    $('.post-tweet').on('click', () => {
        
        var child = $('.tweet:first').clone();
        child.prependTo('.tweets');
        $('.img-tweet-profile:first').attr('src','img/damenleeturks.jpg');
        $('.display-name:first').html('Jeff');
        $('.handle:first').html('@jeffguy');
        $('p:first').html($('#composeInput').val());

        document.getElementById('composeInput').value = '';
    });
    
    $('.toggle-btn').on('click', () => {
        $('.toggle-btn').hide();
        $('.toggle').show();
        $('.toggle').css('display', 'inline-block');
        $('.tweets').css('background-color', '#202020');
        $('.display-name').css('color','white');
        $('.content').css('color', 'white');
        $('.compose').css('background-color', '#202020');
        $('textarea').css('background-color', '#202020');
        $('textarea').css('color', 'white');
    });

    $('.toggle').on('click', () => {
        $('.toggle').hide();
        $('.toggle-btn').show();
        $('.toggle').css('display', 'none');
        $('.tweets').css('background-color', 'white');
        $('.display-name').css('color','black');
        $('.content').css('color', 'black');
        $('.compose').css('background-color', 'white');
        $('textarea').css('background-color', 'white');
        $('textarea').css('color', 'black');
    });
   
    
});
