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





/** 
var tweetsPost = [];

function tweets(tweet) {
    this.tweet = tweet;
    
  }


  function addTweet(tweet){
      tweet = "hi";
      if(tweet){
        const newTweet = new tweets(tweet);
        tweetsPost.push(newTweet);
        document.getElementById('composeInput').value = '';
    
        const tweetsElem = document.createElement('div');
        tweetsElem.id = 'item';
    
        const item = document.getElementById('tweets').appendChild(tweetsElem);
        item.innerHTML = `
            <a class="list-group-item">
              ${newTweet.tweet}
            </a>
          `;

      }

      document.getElementById('post-tweet').addEventListener('click', function(event) { event.preventDefault();
        const tweet = document.getElementById('composeInput').value.trim();
        addTweet(tweet);
      });

      console.log(newTweet.tweet);

  }

  








        
var tweeter = [];

        $('.post-tweet').on('click', event => {
        var $input = document.getElementById("composeInput").value;
        tweeter.push($input);
        
        //var post = $(event.currentTarget).val();
        var $con = $('.content').text($input);

        var tweets = document.querySelector('.tweet');
        
        var clntweets = tweets.cloneNode(true);
        document.querySelector('.tweets').appendChild(clntweets);

       



     //  document.getElementsByClassName('tweet').appendChild();
      //  var $tweet = $('.tweet').cloneNode();
     
       // console.log($tweet);
  
     //   $('.tweets').append($tweet);


  







      //    var input = document.getElementById("composeInput").value;
        //  console.log(input);
  //  $(input).clone(true).appendTo("tweet");

          //   var post = $(event.currentTarget).val();
     
         // var input = document.getElementById("composeInput").value;

        //  $(post).clone().appendTo("tweets");
   
      });

  
*/



