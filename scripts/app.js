


const tweetActions = document.querySelector("div[data-testid='tweet-actions']");
const composeTweet = document.querySelector("textarea[data-testid='tweet-input']");
const inputBtn = document.querySelector("div[data-testid='input-button']");
const postBtn = document.querySelector('.post-tweet');
const imgProfile = document.querySelector('.img-profile');


tweetActions.style.display = 'none';

composeTweet.addEventListener('focus' , focusTweetCompose);
composeTweet.addEventListener('keyup' , tweetCompose);
postBtn.disabled = true;

// postBtn.addEventListener('mousedown' , addTweet);



composeTweet.addEventListener('blur' , normalState);

function focusTweetCompose(){
    tweetActions.style.display = 'flex';
    composeTweet.classList.add('expanded');
    inputBtn.style.display = 'none';
}

function normalState(){

    composeTweet.classList.remove('expanded');
    inputBtn.style.display = 'flex';
    composeTweet.value = null;
    tweetActions.style.display = 'none';
}




function tweetCompose(){
    var composedLength = composeTweet.value.length;
    var msgCount = document.querySelector('.message-count');
    var maxLength = composeTweet.maxLength;

    if( composedLength > 0){
        postBtn.disabled = false;
        let totalLength = maxLength - composedLength;
        msgCount.innerHTML = totalLength;
        if(composedLength > maxLength-10){
            msgCount.classList.add('danger');
        }
        else{
            msgCount.classList.remove('danger');
        }
    }
    else{
        postBtn.disabled = true;
        msgCount.innerHTML = maxLength;
    }
    
}




$(document).ready(function(){

    $('.post-tweet').on('mousedown', () => {
          
      
          var newTweet = $('<div class="tweet">'+
            '<div class="profile">'+
              '<img class="img-tweet-profile" src="img/damenleeturks.jpg" />'+
            '</div>'+
            '<div class="message">'+
              '<div class="posted-by">'+
                '<span class="display-name">Jeff</span>'+
                '<span class="handle">@jeffguy</span>'+
                '<span class="timeago"></span>'+
              '</div>'+
              '<div class="content">'+
                '<p>'+$("#composeInput").val()+'</p>'+
              '</div>'+
              '<div class="tweet-actions">'+
                '<i class="far fa-comment"></i>'+
                '<i class="fas fa-retweet"></i>'+
                '<i class="far fa-heart"></i>'+
                '<i class="far fa-envelope"></i>'+
              '</div>'+
            '</div>'+
          '</div>');
          
          $('.tweets').prepend(newTweet);
      
    });
});