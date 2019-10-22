const compose = document.getElementsByClassName("compose")[0];
const actions = document.getElementsByClassName("actions")[0];
const composeInput = document.getElementById("composeInput");
const postTweet = document.getElementsByClassName("post-tweet")[0];
const messageCount = document.getElementsByClassName("message-count")[0];
const tweet = document.getElementsByClassName("tweet")[0];
const tweets = document.getElementsByClassName("tweets")[0];
const inputButton = document.getElementsByClassName("input-button")[0];
const actionButton = document.getElementsByClassName("action-buttons")[0];

let clicked = false;
actions.style.display = "none";

$(document).ready(function() {
  $(".night").on("click", function() {
    $(".compose").toggleClass("dark");
    $(".tweets").toggleClass("dark-tweets");
    $("#composeInput").toggleClass("dark-input");
  });
});

composeInput.addEventListener("blur", function(event) {
  if (clicked && composeInput.value.length == 0) {
    composeInput.classList.remove("expanded");
    actions.style.display = "none";
    inputButton.style.display = "";
    clicked = false;
  }
  event.stopPropagation();
});

composeInput.addEventListener("blur", function(event) {
  if (clicked && composeInput.value.length == 0) {
    composeInput.classList.remove("expanded");
    actions.style.display = "none";
    inputButton.style.display = "";
    clicked = false;
  }
  event.stopPropagation();
});

composeInput.addEventListener("focus", function(event) {
  if (!clicked) {
    actions.style.display = "";
    inputButton.style.display = "none";
    actionButton.style.display = "";
    composeInput.classList.add("expanded");
    document.getElementsByClassName("input-button")[0].style.display = "none";
    clicked = true;
  }
  event.stopPropagation();
});

composeInput.addEventListener("input", function() {
  postTweet.disabled = false;
  messageCount.innerHTML = 280 - composeInput.value.length;
  composeInput.value.length == 0 ? (postTweet.disabled = true) : "";

  parseInt(messageCount.innerHTML) < 11
    ? (messageCount.style.color = "red")
    : (messageCount.style.color = "#13B5F0");
});

postTweet.addEventListener("click", function(event) {
  var div = document.createElement("div");
  div.innerHTML += `<div class="tweet">
    <div class="profile">
      <img class="img-tweet-profile" src="img/damenleeturks.jpg" />
    </div>
    <div class="message">
      <div class="posted-by">
        <span class="display-name">Jeff</span
        ><span class="handle">@jeffguy</span>
      </div>
      <div class="content">
        <p>${composeInput.value} </p>
      </div>
      <div class="tweet-actions">
        <i class="far fa-comment"></i>
        <i class="fas fa-retweet"></i>
        <i class="far fa-heart"></i>
        <i class="far fa-envelope"></i>
      </div>
    </div>
  </div>`;

  tweets.insertBefore(div, tweet);
  composeInput.value = "";
  messageCount.innerHTML = 280;
  composeInput.classList.remove("expanded");
  actions.style.display = "none";
  inputButton.style.display = "";
  clicked = false;
  postTweet.disabled = true;
});
