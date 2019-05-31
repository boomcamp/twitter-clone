$(document).ready(function() {

    $('.night').on('click', function(){
        $('.compose').toggleClass('dark');
        $('.tweets').toggleClass('dark-tweets');
        $('#composeInput').toggleClass('dark-input');
    })

    $('#composeInput').on('click', function(){
        $('.actions').css('display', 'flex');
        $('.compose .input-container textarea').animate({height:'68px'}, 200);
        $('.input-button').hide();
    })

    $('#composeInput').on("keyup", function(){
        if( $('#composeInput').val().length > 0){
            $('.post-tweet').prop("disabled", false);
        }
        else{
            $('.post-tweet').prop("disabled", true);
        }
        var count = document.getElementById("count");
        count.innerHTML = 280 - this.value.split('').length;
        if (count.innerHTML > 10)
            $('#count').css('color', '#13B5F0');
        else
            $('#count').css('color', 'red');
    });

    function hideElem(){
        $('.compose .input-container textarea').animate({height:'34px'}, 0);
        $('.input-button').show(100);
        $('.actions').css('display', 'none');
    }   

    $("body").click(
        function(e){
            if(e.target.id !== "composeInput" && $('#composeInput').val().length === 0){
                hideElem();
            }
        }
    );

    $('.post-tweet').on('click', function(){
        $('.tweets').prepend(`
        <div class="tweet">
        <div class="profile">
          <img class="img-tweet-profile" src="img/damenleeturks.jpg">
        </div>
        <div class="message">
          <div class="posted-by">
            <span class="display-name">Jeff</span
            ><span class="handle">@jeffguy</span
            ><span class="handle">&bull; just now</span>
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
      </div>
        `);
        hideElem();
        $('#composeInput').val('')
        count.innerHTML = 280;
        $('.post-tweet').prop("disabled", true);
    })

})
