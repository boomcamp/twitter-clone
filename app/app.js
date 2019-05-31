// $('#composeInput').siblings().hide()
$(document).ready(function(){
// $('.input-button').show()
$('.actions').hide()

$('#composeInput').focus('click', () =>{
    
    $('.actions').show()
    $('.input-button').hide();  
    $('#composeInput').addClass('expanded')
   
})

$('#composeInput').on('input', () =>{
    // event.preventDefault();  
    
    var maxlength = $('#composeInput').attr("maxlength");
    var text_length = $('#composeInput').val().length;
    var text_remaining = maxlength - text_length;
    $('.message-count').html(text_remaining); 

    if(text_remaining<=10){
        $('.message-count').addClass('danger')
    }else{
        $('.message-count').removeClass('danger')
    }
    if($('#composeInput').val().length>=0){
        $('.post-tweet').removeAttr('disabled')
    }
})

$('#composeInput').focusout(()=>{
    if($('#composeInput').val().length<=0){
        $('.actions').hide()
        $('#composeInput').removeClass('expanded')
        $('.input-button').show();  
    }
})

$('.post-tweet').on('click', ()=>{
    var user ={
        name: 'Jeff',
        handle: '@jeffguy',
        image: $('.img-profile').attr('src'),
        tweet: $('#composeInput').val()
    }
    // $('.newtweet')
    var addtweet =  `
        <div class="tweet">
        <div class="profile">
          <img class="img-tweet-profile" src="${user.image}" />
        </div>
        <div class="message">
          <div class="posted-by">
            <span class="display-name">${user.name}</span
            ><span class="handle">${user.handle}</span>
          </div>
          <div class="content">
            <p>${user.tweet}</p>
          </div>
          <div class="tweet-actions">
            <i class="far fa-comment"></i>
            <i class="fas fa-retweet"></i>
            <i class="far fa-heart"></i>
            <i class="far fa-envelope"></i>
          </div>
        </div>
      </div>`
    $('.tweets').prepend(addtweet);
    // $('#composeInput').val('');
    // $('.input-button').hide();
    $('.message-count').text(280); 
    $('#composeInput').siblings().hide()
    $('.input-button').show();  
    $('#composeInput').removeClass('expanded')
    $('#composeInput').val('')
    $('.post-tweet').attr('disabled', true)

})
})



