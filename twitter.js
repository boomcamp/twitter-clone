var text= document.querySelector('#composeInput')
var dark= document.querySelector('.dark')

$(document).ready( function() {
  $('.actions').hide();
  $('#composeInput').on('focus', function() {
      $('#composeInput').addClass('expanded');
      $('.input-button').hide();
      $('.actions').show(600);
  })
  $('#composeInput').on('input', function(event) {
      
      var post = $(event.currentTarget).val();
      var remaining = 280 - post.length;
      if(remaining <= 10) {
          $('.message-count').addClass('danger')
      } else {
          $('.message-count').removeClass('danger')
      }
      $('.message-count').html(remaining);
     if( text.value.length === 0){
         $('.post-tweet').prop('disabled', true)
     }else{
      $('.post-tweet').prop('disabled', false)
     }
  });
  
  $('#composeInput').on('focusout', function(event) {
     var checkLength = $(event.currentTarget).val();
     if(checkLength == 0) {
          $('.actions').hide();
          $('#composeInput').removeClass('expanded');
          $('.input-button').show();
     } else {
          $('.actions').show();
     }
  });

  $('.post-tweet').on('click', function() {
    $(".input-button").show();
    let item =`
    <div class="tweet">
    <div class="profile">
      <img class="img-tweet-profile" src="img/funwatercat.jpg" />
    </div>
    <div class="message">
      <div class="posted-by">
        <span class="display-name">vandudd</span
        ><span class="handle">@vanessadulva</span>
      </div>
      <div class="content">
        <p>${text.value}</p>
      </div>
      <div class="tweet-actions">
        <i class="far fa-comment"></i>
        <i class="fas fa-retweet"></i>
        <i class="far fa-heart"></i>
        <i class="far fa-envelope"></i>
      </div>
    </div>
  </div>
    `;
    $(".tweets").prepend(item);
    $('.input-button').show();
    $(".actions").hide();
    $('#composeInput').removeClass('expanded');
    $('#composeInput').val('');

  
    });
    $('.dark').on('click', function(){
 
  }); 
     
});




