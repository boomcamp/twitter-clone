const compose = document.getElementsByClassName("compose")[0];
const actions = document.getElementsByClassName("actions")[0];
const composeInput = document.getElementById("composeInput");
const tweetBtn = document.getElementsByClassName("post-tweet")[0];
const msgCount = document.getElementsByClassName("message-count")[0];
const tweet = document.getElementsByClassName("tweet")[0];
const tweets = document.getElementsByClassName("tweets")[0];
const inputBtn = document.getElementsByClassName("input-button")[0];
const actionBtn = document.getElementsByClassName("action-buttons")[0];
const dark = document.getElementsByClassName("dark-mode")[0];
const light = document.getElementsByClassName("light-mode")[0];

let clicked = false;
actions.style.display = "none";
light.style.display = "none";

composeInput.addEventListener("blur", function(event) {
  if (clicked && composeInput.value.length == 0) {
    composeInput.classList.remove("expanded");
    actions.style.display = "none";
    inputBtn.style.display = "";
    clicked = false;
  }
  event.stopPropagation();
});

composeInput.addEventListener("focus", function(event) {
  if (!clicked) {
    actions.style.display = "";
    inputBtn.style.display = "none";
    actionBtn.style.display = "";
    composeInput.classList.add("expanded");
    inputBtn.style.display = "none";
    clicked = true;
  }
  event.stopPropagation();
});

composeInput.addEventListener("input", function() {
  tweetBtn.disabled = false;
  msgCount.innerHTML = 280 - composeInput.value.length;
  if (composeInput.value.length == 0) tweetBtn.disabled = true;

  parseInt(msgCount.innerHTML) <= 10
    ? (msgCount.style.color = "red")
    : (msgCount.style.color = "#13B5F0");
});

tweetBtn.addEventListener("click", function(event) {
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
        <p>${composeInput.value}</p>
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
  msgCount.innerHTML = 280;
  composeInput.classList.remove("expanded");
  actions.style.display = "none";
  inputBtn.style.display = "";
  tweetBtn.disabled = true;
  clicked = false;
});
dark.addEventListener("click", function(event) {
  tweet.classList.add("dark-tweets");
  compose.classList.add("dark-compose");
  composeInput.classList.add("dark-input");
  dark.style.display = "none";
  light.style.display = "";
});
light.addEventListener("click", function(event) {
  tweet.classList.remove("dark-tweets");
  compose.classList.remove("dark-compose");
  composeInput.classList.remove("dark-input");
  dark.style.display = "";
  light.style.display = "none";
});
