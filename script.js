var actionButtons = document.querySelector('.actions');
var inputContainer = document.getElementById('composeInput')
var inputButton = document.querySelector('.input-button')
var tweetButton = document.querySelector('.post-tweet')
var tweetImage = document.querySelector('.fa-image')
var addTweet = document.querySelector('.tweets')
var messageCount = document.querySelector('.message-count')
var tweetAction = document.querySelector('.tweet-actions')
var tweetText = document.querySelector('.tweetText');

actionButtons.style.display = 'none';

inputContainer.addEventListener('focus', function(event){
    inputContainer.style.display = '100px';
    inputContainer.style.height = '100px';
    actionButtons.style.display = '';
    inputButton.style.display = 'none';
    inputContainer.className += 'expanded';
})

inputContainer.addEventListener('blur', function(){
    var inputLength = inputContainer.value.length

    inputContainer.style.height = '34px';
    actionButtons.style.display = 'none';

    if(inputLength > 0){
        inputContainer.style.height = '100px';
        actionButtons.style.display = '';
    }
    else{
        inputContainer.style.height = '34px';
    }
})

inputContainer.addEventListener('input', function(){ 
    if(inputContainer.length === 0){
      tweetButton.disabled = true;
    }else{
      tweetButton.disabled = false;
      inputContainer.className += 'expanded';
      var textLength = 280;
      messageCount.innerHTML = textLength - inputContainer.value.length;
       if(messageCount.innerHTML <= 10){
           messageCount.classList.add('danger');
       }else{
           messageCount.classList.remove('danger');
       }
    }
})

tweetButton.addEventListener('click', function(){
    var tweet = document.createElement('div');
    tweet.innerHTML += `<div class="tweet">
    <div class="profile">
      <img class="img-tweet-profile" src="https://ca.slack-edge.com/T0QG5E3SL-UNQ5D2BDE-6b0a4b9e83a1-48" />
    </div>
    <div class="message">
      <div class="posted-by">
        <span class="display-name">Mark Jowen Medes</span
        ><span class="handle">@mark.medes</span>
        <span class="handle" style="float:right">1min ago</span>
      </div>
      <div class="content">
        <p>${inputContainer.value}</p>
      </div>
      <div class="tweet-actions">
        <i class="far fa-comment"></i>
        <i class="fas fa-retweet"></i>
        <i class="far fa-heart"></i>
        <i class="far fa-envelope"></i>
      </div>
    </div>
  </div>`

    addTweet.prepend(tweet)
    
    messageCount.innerHTML = 280;
    actionButtons.style.display = 'none';
    inputContainer.style.height = '34px';
    inputContainer.value = '';
    inputButton.style.display = '';
    
})

