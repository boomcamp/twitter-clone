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
        document.getElementById('composeInput').value = '';

        $('.tweet').innerHTML = `
        <div class="tweet">
        <div class="profile">
          <img class="img-tweet-profile" src="img/damenleeturks.jpg" />
        </div>
        <div class="message">
          <div class="posted-by">
            <span class="display-name">Jeff</span
            ><span class="handle">@jeffguy</span>
          </div>
          <div class="content">
            <p>${post}</p>
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

        $('.tweets').clone().$('.tweet').innerHTML.prependTo('.tweets');

  });




});
