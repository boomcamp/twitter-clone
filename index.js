const textInput = document.querySelector('#composeInput');
const tweetContent = document.querySelector('.tweetContent');
const postBtn = document.querySelector('.post-tweet');
const hiddenDiv = document.querySelector('.actions');
const messageCount = document.querySelector('.message-count');
var textarea = document.querySelector('textarea');
postBtn.addEventListener('click', function(e){
    const tweets = document.querySelector('.tweets');
    var div = document.createElement("div");
    // var compose = document.querySelector(".compose");
    tweets.prepend(div);
    // console.log(document.querySelector('main'))
    div.innerHTML = `
    <div class="tweet">
      <div class="profile">
        <img class="img-tweet-profile" src="img/damenleeturks.jpg" />
      </div>
      <div class="message">
        <div class="posted-by">
          <span class="display-name">Jeff</span>
          <span class="handle">@jeffguy</span>
          <span class="timestamp">1 second ago</span>
        </div>
        <div class="content">
          <p>${textInput.value}</p>
        </div>
        <div class="tweet-actions">
          <i class="far fa-comment"></i>
          <i class="fas fa-retweet"></i>
          <i class="far fa-heart"></i>
          <i class="far fa-envelope"></i>
        </div>
      </div>
    </div>`
  textInput.value = null;
  postBtn.disabled = true;
  messageCount.textContent ='280';
  $('.actions').hide();
  $('.input-button').show();
  textInput.style.height = "34px"
});
$('.actions').hide();
textInput.addEventListener('focus', function(e){
    $('.actions').show();
    postBtn.disabled = true;
    $('.input-button').hide();
    textarea.setAttribute('class', 'expanded')
});
textInput.addEventListener('keyup', function(e){
    postBtn.disabled = false;
    textarea.setAttribute('class', 'expanded')
    var len = 280 - textInput.value.length;
    messageCount.textContent = len;
    if (len <= 10){
        messageCount.style.color = "red";
    } else messageCount.style.color = "#13b5f0";
});
textInput.addEventListener('blur', function(e){
    if (!textInput.value.length){
        $('.actions').hide();
        $('.input-button').show();
        textarea.setAttribute('class', '')
    }
});