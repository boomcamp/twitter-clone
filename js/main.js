$(document).ready(function(){
  $('.actions').hide()
  
  $('#composeInput').focus('click', () =>{
      $('.actions').show()
      $('.input-button').hide();  
      $('#composeInput').addClass('expanded')
  })
  
  $('#composeInput').on('input', () =>{
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
      var person ={
          name: 'Jeff',
          handle: '@jeffguy',
          image: $('.img-profile').attr('src'),
          tweet: $('#composeInput').val()
      }

      var addtweet =  `
          <div class="tweet">
          <div class="profile">
            <img class="img-tweet-profile" src="${person.image}" />
          </div>
          <div class="message">
            <div class="posted-by">
              <span class="display-name">${person.name}</span
              ><span class="handle">${person.handle}</span>
            </div>
            <div class="content">
              <p>${person.tweet}</p>
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
      $('.message-count').text(280); 
      $('#composeInput').siblings().hide()
      $('.input-button').show();  
      $('#composeInput').removeClass('expanded')
      $('#composeInput').val('')
      $('.post-tweet').attr('disabled', true)
  
  })
  })