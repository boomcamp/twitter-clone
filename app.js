const compose = document.getElementsByClassName("compose")[0];
const actions = document.getElementsByClassName("actions")[0];
const composeInput = document.getElementById("composeInput");
const post = document.getElementsByClassName("post-tweet")[0];
const textcount = document.getElementsByClassName("message-count")[0];
const tweet = document.getElementsByClassName("tweet")[0];
const tweets = document.getElementsByClassName("tweets")[0];
const inputBtn = document.getElementsByClassName("input-button")[0];
const actionBtn = document.getElementsByClassName("action-buttons")[0];

let clicked = false;
actions.style.display = "none";

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
    document.getElementsByClassName("input-button")[0].style.display = "none";
    clicked = true;
  }
  event.stopPropagation();
});

composeInput.addEventListener("input", function() {
  post.disabled = false;
  textcount.innerHTML = 280 - composeInput.value.length;
  if (composeInput.value.length == 0) post.disabled = true;

  if (parseInt(textcount.innerHTML) < 11) {
    textcount.style.color = "red";
  } else {
    textcount.style.color = "#13B5F0";
  }
});

post.addEventListener("click", function(event) {
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
  textcount.innerHTML = 280;
  composeInput.classList.remove("expanded");
  actions.style.display = "none";
  inputBtn.style.display = "";
  clicked = false;
  post.disabled = true;
});
