$(document).ready(function(){

   $('.actions').css('display','none');

   $('#composeInput').on('focus',function(e){
        $('.actions').show();
        $('#composeInput').addClass('expanded');
        $('.input-button').css('display','none');
   });

   $('#composeInput').on('keyup',function(e){
        $('.message-count').text(280- e.target.value.length);
            
        $('.message-count').html() < 10? $('.message-count').addClass('danger'): $('.message-count').removeClass('danger');

        if($('#composeInput').val().length > 0){
            $('.post-tweet').removeAttr('disabled');
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

   function isdarkba(){

        if(clicktogle){
            $('.compose').css('background-color', '#2b2b2b');
            $('.message-count').css('color', 'white');
            $('.fas').css('color', '#2b2b2b');
            $('.action-buttons .fas').css('color', 'white');
            $('.fa-retweet').css('color', 'white');
            $('#composeInput').css('border-color', '#2b2b2b');
            $('.tweet').css({color:'white', backgroundColor:'rgb(35, 35, 35)'});
            $('.darkknight').css({color:'white', backgroundColor:'#2b2b2b'});

            $('.darkknight').html('Light Mode');

            clicktogle = false;
        }else{
            $('.compose').css('background-color', '#E7F7FD');
            $('.message-count').css('color', '#13B5F0');
            $('.fas').css('color', '#13B5F0');
            $('.action-buttons .fas').css('color', '#13B5F0');
            $('.fa-retweet').css('color', 'black');
            $('#composeInput').css('border-color', '#C4ECFB');
            $('.tweet').css({color:'black', backgroundColor:'white'});
            $('.darkknight').css({color:'black', backgroundColor:'#E7F7FD'});

            $('.darkknight').html('Dark Mode');

            clicktogle = true;
        }
   }

    $('.darkknight').on('click',isdarkba);


    $('.post-tweet').on('click',function(e){

        let newimage = imagenow;
        let idstamp = Math.floor(Math.random() * 69).toString();

        $('.tweets').prepend(
            `<div class="tweet">
                <div class="profile">
                    <img class="img-tweet-profile" src="img/damenleeturks.jpg" />
                </div>
                <div class="message">
                    <div class="posted-by">
                        <span class="display-name">Jeff</span><span class="handle">@jeffguy</span>
                        <span class="handle" id="${idstamp}"></span>
                    </div>
                    <div class="content">
                        <p>${$('#composeInput').val()}</p>
                        <image src= '${imagenow}'style='height:200px'>
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

        //resetting
        $('#composeInput').val('');
        $('.actions').hide();
        $('#composeInput').removeClass('expanded');
        $('.input-button').show();
        $('.post-tweet').prop('disabled', true);
        $('#displ').attr('src','');
        $('.rmvfile').hide();

        imagenow = '';

        if(!clicktogle){
            clicktogle = !clicktogle
            isdarkba();
        }

        console.log($(`#${idstamp}`).html());

        setTimeout(function(){
            $(`#${idstamp}`).html('a second ago');
        },1000); 

        setTimeout(function(){
            $(`#${idstamp}`).html('a minute ago');
        },60000);
    
        setTimeout(function(){
            $('#'+idstamp).html('an hour ago');
        },3600000);
    });

    //for image
    var imagenow = '';
    
    $('.inpimg').on('change',function(e){

        let freader = new FileReader();

        freader.readAsDataURL(e.target.files[0]);

        freader.onloadend = function () {
            $('#displ').attr('src', freader.result);
            imagenow = freader.result;
        } 
        
        $('.rmvfile').show();
    });

    $('.rmvfile').on('click',function(){
        imagenow = '';
        $('#displ').attr('src','');
        $('.rmvfile').hide();
    });

});