$(document).ready(() => {
   
        $('.actions').hide();
    
        $('#composeInput').on('focus', () => {
        $('.actions').show();
        $('.input-button').hide();
        $('textarea').addClass('expanded');       
        });

        $('#composeInput').on('keyup', () => {
            $('.post-tweet').removeAttr('disabled'); 

        });


        $('#composeInput').on('keyup', () => {
           var post = $(event.currentTarget).val();
           var remaining = 280 - post.length;
 
           $(".message-count").html(remaining);

            if(remaining <= 10){
                $('.message-count').addClass('danger');       
            }
            else{
                $('.message-count').removeClass('danger');
            }

        });


        $('#composeInput').on('focusout', event => {
            var post = $(event.currentTarget).val();
        
            if (post == 0) {
            $('.actions').hide();
            $('textarea').removeClass('expanded');  
            $('.input-button').show(); 
            }
     
        });




        $('.post-tweet').on('click', () => {

          var tweet = document.getElementById("composeInput").value;
          let clone = $('.tweet:first').clone();
          $("p", clone).text(tweet);
          $('.tweets').prepend(clone);
     
     
          $('#composeInput').removeClass('expanded');
          document.getElementById('composeInput').value = '';
          $('.actions').hide();
     
     
        })
      







         

});






