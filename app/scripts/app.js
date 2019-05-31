var input = document.querySelector('textarea[data-testid="tweet-input"]');
var inputBtn = document.querySelector('div[data-testid="input-button"]');
var mssgCount = document.querySelector(".message-count");
var actionDiv = document.querySelector(".actions");


$(document).ready(function() {
  actionDiv.style.display = 'none';
});

/* DISPLAY INPUT TEXTAREA WHEN FOCUS*/

$("#composeInput").focus(function(){
  actionDiv.style.display = '';
  inputBtn.style.display = 'none';
  $('#composeInput').addClass('active expanded');
});

/* FUNCTION WHEN TEXT AREA IS NOT FOCUS */

$("#composeInput").blur(function(){
  if (input.value == "" || input.value == "\n") {
    actionDiv.style.display = 'none';
    inputBtn.style.display = '';
    var isActive = $('#composeInput').hasClass('active');

    if (!isActive) {
      $('#composeInput').addClass('active expanded');
    } else {
      $('#composeInput').removeClass('active expanded');
    }
  }
});

/* LIMIT LENGTH OF INPUT TWEET */

$('#composeInput').keyup(function () {
  var maxInput = 269;
  if (input.value != "" && input.value != "\n") {
    $('.post-tweet').attr('enabled', 'enabled');
    $('.post-tweet').removeAttr('disabled');
  } else {
    $('.post-tweet').attr('disabled', 'disabled');
  }

  if((maxInput - input.value.length) <= 10) {
    mssgCount.style.color = "red";
  } else {
    mssgCount.style.color = "#13B5F0";
  }
  mssgCount.innerHTML = maxInput - input.value.length;
});

/* POST TWEET */
$('.post-tweet').click(function () {
  var isActive = $('#body').hasClass('dark-mode');

  if (!isActive) {
    var tweet =  
    `<div class="tweet tweet-d">
      <div class="profile">
        <img class="img-tweet-profile" src="img/damenleeturks.jpg" />
      </div>
      <div class="message">
        <div class="posted-by">
          <span class="display-name">Jeff</span>
          <span class="handle">@jeffguy</span>
        </div>
        <div class="content">
          <p>${input.value}</p>
        </div>
        <div class="tweet-actions tweet-actions-d">
          <i class="far fa-comment"></i>
          <i class="fas fa-retweet"></i>
          <i class="far fa-heart"></i>
          <i class="far fa-envelope"></i>
        </div>
      </div>
    </div>`;
  } else {
    var tweet =  
    `<div class="tweet tweet-l">
      <div class="profile">
        <img class="img-tweet-profile" src="img/damenleeturks.jpg" />
      </div>
      <div class="message">
        <div class="posted-by">
          <span class="display-name">Jeff</span>
          <span class="handle">@jeffguy</span>
        </div>
        <div class="content">
          <p>${input.value}</p>
        </div>
        <div class="tweet-actions">
          <i class="far fa-comment"></i>
          <i class="fas fa-retweet"></i>
          <i class="far fa-heart"></i>
          <i class="far fa-envelope"></i>
        </div>
      </div>
    </div>`;
  }

  $(".tweets").prepend(tweet);

  input.value = "";
  input.placeholder = "What's happening?";
  input.style.height = "34px";
  actionDiv.style.display = 'none';
  inputBtn.style.display = '';

  var isActive = $('#composeInput').hasClass('active');
  if (!isActive) {
    $('#composeInput').addClass('active expanded');
  } else {
    $('#composeInput').removeClass('active expanded');
  }
});

function toggleDarkLight() {
  var body = document.getElementById("body");
  var currentClass = body.className;
  body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";

  var isActive = $('#body').hasClass('dark-mode');

  if (!isActive) {composeInput
    $('#tweets').addClass('tweets-d');
    $('#compose').addClass('compose-d');
    $('#compose-switch').addClass('compose-switch-d');
    $('#composeInput').addClass('textarea-d');
    $('.bulb').removeClass('far fa-lightbulb');
    $('.bulb').addClass('fas fa-lightbulb');
    $('.tweet').removeClass('tweet-l');
    $('.tweet').addClass('tweet-d');
  } else {
    $('#tweets').removeClass('tweets-d');
    $('#compose').removeClass('compose-d');
    $('#compose-switch').removeClass('compose-switch-d');
    $('#composeInput').removeClass('textarea-d');
    $('.bulb').removeClass('fas fa-lightbulb');
    $('.bulb').addClass('far fa-lightbulb');
    $('.tweet').removeClass('tweet-d');
    $('.tweet').addClass('tweet-l');
  }
}