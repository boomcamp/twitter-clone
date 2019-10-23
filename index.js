const textInput = document.querySelector('#composeInput');
const compose = document.querySelector('.compose');
const tweetContent = document.querySelector('.tweetContent');
const postBtn = document.querySelector('.post-tweet');
const hiddenDiv = document.querySelector('.actions');
const messageCount = document.querySelector('.message-count');
var textarea = document.querySelector('textarea');
postBtn.addEventListener('click', function (e) {
  const tweets = document.querySelector('.tweets');
  var div = document.createElement("div");
  tweets.prepend(div);
  div.innerHTML = `
    <div class="tweet">
      <div class="profile">
        <img class="img-tweet-profile" src="img/damenleeturks.jpg" />
      </div>
      <div class="message">
        <div class="posted-by">
          <span class="display-name">Jeff</span>
          <span class="handle">@jeffguy</span>
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
  messageCount.textContent = '280';
  $('.actions').hide();
  $('.input-button').show();
  textInput.style.height = "34px"

  if (night.checked){
    $('.display-name').css("color", 'white');
    $('.tweet-actions i').css("color", 'white');
    $('p').css("color", 'white');
  }
});
$('.actions').hide();

textInput.addEventListener('focus', function (e) {
  $('.actions').show()
  $('.input-button').hide();
  $('textarea').addClass("expanded");
  $('textarea').on('keypress input', function () {
    checker($('textarea'));
    if ($('textarea').val() !== "") {
      $('.post-tweet').attr('disabled', false);
    } else {
      $('.post-tweet').attr('disabled', true);
    }
  });
});

var maxCount = $('#composeInput').attr("maxlength");

function checker(e) {
  if (e.val().length > maxCount) {
    e.val(e.val().substring(0, maxCount));
  } else {
    var remaining = maxCount - e.val().length;
    $('.message-count').text(remaining);
    if (remaining < 11) {
      $('.message-count').addClass("danger");
    } else {
      $('.message-count').removeClass("danger");
    }
  }
}

textInput.addEventListener('blur', function (e) {
  if (!textInput.value.length) {
    $('.actions').hide();
    $('.input-button').show();
    textarea.setAttribute('class', '')
  }
});

const night = document.querySelector('.night');
night.addEventListener('change', function (e) {
  if (night.checked){
    $('.compose').css("background-color", 'black');
    $('p').css("color", 'white');
    $('.display-name').css("color", 'white');
    $('.tweets').css("background-color", 'black');
    $('.nightMode').css("background-color", 'black');
    $('.tweet-actions i').css("color", 'white');
    $('.dark').css("color", 'white');
  }else {
    $('.compose').css("background-color", '#E7F7FD');
    $('p').css("color", 'black');
    $('.display-name').css("color", 'black');
    $('.tweets').css("background-color", 'white');
    $('.tweet-actions i').css("color", 'black');
    $('.nightMode').css("background-color", '#E7F7FD');
    $('.dark').css("color", 'black');
  }
  });