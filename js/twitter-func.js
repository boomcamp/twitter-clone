$(document).ready(function(){

   $('.actions').css('display','none');

   $('#composeInput').on('focus',function(e){
        $('.actions').show();
        $('#composeInput').addClass('expanded');
        $('.input-button').css('display','none');

        // $('.post-tweet').attr('disabled');

        // if(e.target.value.length > 0){
        //     $('.post-tweet').removeAttr('disabled');
        // }else{
        //     $('.post-tweet').attr('disabled');
        // }
   });

   $('.message-count').text(280 - $('#composeInput').val().length);


   $('#composeInput').on('keyup',function(e){
       

        var remaining = 280- e.target.value.length;

        $('.message-count').text(remaining);
            
        if($('.message-count').html() < 10){
            $('.message-count').css('color','red');
        }else{
            $('.message-count').css('color','#13B5F0');
        }

        if(e.target.value.length){
            console.log('enabled');
            $('.post-tweet').removeAttr('disabled');
        }else{
            console.log('disabled');
            $('.post-tweet').attr('disabled', true);
        }
   });

   $('#composeInput').on('blur',function(e){

        if(e.target.value.length == 0){
            $('.actions').hide();
            $('#composeInput').removeClass('expanded');
            $('.input-button').show();
            $('.message-count').val(280);
        }
   });

   let clicktogle = true;

    $('.darkknight').on('click',function(){

        if(clicktogle){
            $('.compose').css('background-color', '#2b2b2b');
            $('.message-count').css('color', 'white');
            $('.fas').css('color', '#2b2b2b');
            $('.action-buttons .fas').css('color', 'white');
            $('.fa-retweet').css('color', 'white');
            $('#composeInput').css('border-color', '#2b2b2b');
            $('.tweet').css('background-color', 'rgb(35, 35, 35)');
            $('.tweet').css('color', 'white');
            $('.darkknight').css('background-color', '#2b2b2b');
            $('.darkknight').css('color', 'white');
            $('.darkknight').html('Light Mode');
            

            clicktogle = false;
        }else{
            $('.compose').css('background-color', '#E7F7FD');
            $('.message-count').css('color', '#13B5F0');
            $('.fas').css('color', '#13B5F0');
            $('.action-buttons .fas').css('color', '#13B5F0');
            $('.fa-retweet').css('color', 'black');
            $('#composeInput').css('border-color', '#C4ECFB');
            $('.tweet').css('background-color', 'white');
            $('.tweet').css('color', 'black');
            $('.darkknight').css('background-color', '#E7F7FD');
            $('.darkknight').css('color', 'black');
            $('.darkknight').html('Dark Mode');

            clicktogle = true;
        }
    });

    $('.lighttheme').on('click',function(){

    });

    $('.post-tweet').on('click',function(e){

        var currtime = new Date();


        $('.tweets').prepend(
            `<div class="tweet">
                <div class="profile">
                    <img class="img-tweet-profile" src="img/damenleeturks.jpg" />
                </div>
                <div class="message">
                    <div class="posted-by">
                        <span class="display-name">Jeff</span><span class="handle">@jeffguy</span>
                        <span class="handle" id="timestamp-new"></span>
                    </div>
                    <div class="content">
                        <p>${$('#composeInput').val()}</p>
                    </div>
                     <div class="tweet-actions">
                        <i class="far fa-comment"></i>
                        <i class="fas fa-retweet"></i>
                        <i class="far fa-heart"></i>
                        <i class="far fa-envelope"></i>
                    </div>
                </div>
            </div>`
        );

        $('#composeInput').val('');
        $('.actions').hide();
        $('#composeInput').removeClass('expanded');
        $('.input-button').show();
        $('.post-tweet').prop('disabled', true);
        // $('.message-count').html(280);

        setInterval(function(){
            $('#timestamp-new').html('a second ago');
        },1000);
    
        setInterval(function(){
            $('#timestamp-new').html('an hour ago');
        },3600000);
    });

    
    // $('.fa-image').on('click',function(){
    //     alert('image');
    // });
    
});