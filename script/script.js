//TOGGLE SHOW/HIDE ACTION WHEN THERE'S AN INPUT
$(document).ready(function() {
    $('div[class="actions"]').hide();
    $('textarea[id="composeInput"]').on('focus keyup', function(){
        $('div[class="actions"]').show();
        $('div[class="input-button"]').hide();
    //input focus with tweet content
        $('textarea[id="composeInput"]').on('input', function(){
            var composelength = $(this).val().length;
            var limit = $(this).attr("maxlength");
            var total = limit - composelength;
            if(composelength > 0){
             $('button[class="post-tweet"]').removeAttr("disabled");
             $(this).addClass('expanded');
             }else{
             $('button[class="post-tweet"]').attr("disabled", true);
             $('div[class="actions"]').hide();
            }
            //update the length of the text inputed 
            $('span[data-testid="message-count"]').html(total);
            //change the color of the message count if the length  is less than 10
            if(total <= 10){
              $('.message-count').css("color","red");
            }else{
              $('.message-count').css("color","#13B5F0");
            }      
         });
    });
    //if the length input is none 
    $('textarea[id="composeInput"]').focusout( function(){
        if($('#composeInput').val().length === 0){
          $(this).removeClass('expanded');
          $('div[class="actions"]').hide();
          $('div[class="input-button"]').show();
        }
    });
    //prepend inserted tweet on the assigned div
    $('button[class="post-tweet"]').on('click', function(){
        var nwcomposetweet = $('textarea[id="composeInput"]').val();
        $('div[class="tweets"]').prepend(`
        <div class="tweet">
          <div class="profile">
            <img class="img-tweet-profile" src="img/funwatercat.jpg">
          </div>
          <div class="message">
            <div class="posted-by">
              <span class="display-name">Michael</span><span class="handle">@sometwitterguy</span>
            </div>
            <div class="content">
              <p>${nwcomposetweet}</p>
            </div>
            <div class="tweet-actions">
              <i class="far fa-comment"></i>
              <i class="fas fa-retweet"></i>
              <i class="far fa-heart"></i>
              <i class="far fa-envelope"></i>
            </div>
          </div>
        </div>
        `);//prependend
        //change to its initial state
        $('div[class="actions"]').hide();
        $('textarea[id="composeInput"]').removeClass('expanded');
        $('div[class="input-button"]').show();
    });
//close
});