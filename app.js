var tweetImage = document.querySelector(".fa-image");
var actbtn = document.querySelector(".actions");
var content = document.getElementById("composeInput");
var button = document.querySelector(".input-button");
var twtact = document.querySelector(".tweet-actions");
var newTweet = document.querySelector(".post-tweet");
var addTweet = document.querySelector(".tweets");
var messageCount = document.querySelector(".message-count");
var actionButtons = document.querySelector(".action-buttons");

var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();
today = mm + "/" + dd + "/" + yyyy;

actbtn.style.display = "none";

content.addEventListener("focus", function(event) {
  content.classList.add("expanded");
  actbtn.style.display = "";
  button.style.display = "none";
  var inputLength = content.value.length;

  if (inputLength > 0) {
    newTweet.disabled = false;
  }
});

content.addEventListener("blur", function() {
  var inputLength = content.value.length;
  newTweet.disabled = false;
  actbtn.style.display = "none";
  button.style.display = "block";

  if (inputLength > 0) {
    content.classList.add("expanded");
    actbtn.style.display = "";
  } else {
    content.classList.remove("expanded");
  }
});

content.addEventListener("keyup", function() {
  tweetImage.style.display = "block";

  var inputLength = content.value.length;
  var maxlength = content.maxLength;

  if (inputLength > 0) {
    newTweet.disabled = false;
    let newMessageCount = maxlength - inputLength;
    messageCount.innerHTML = newMessageCount;

    if (maxlength - inputLength <= 10) {
      messageCount.classList.add("danger");
    } else {
      messageCount.classList.remove("danger");
    }
  } else {
    messageCount.innerHTML = 280;
    newTweet.disabled = true;
  }
});

newTweet.addEventListener("click", function() {
  var tweet = document.createElement("div");

  tweet.innerHTML += `<div class="tweet">
    <div class="profile">
      <img class="img-tweet-profile" src="https://ca.slack-edge.com/T0QG5E3SL-UNS14PLF9-6ffaaa7007eb-72" style="float:left;"/>
    <div class="message" style="margin-left:50px;">
      <div class="posted-by" >
        <span class="display-name">Clark</span
        ><span class="handle">@clark</span>
      </div>
      <div class="content">
        <p>${content.value}</p>
      </div> 
      <div class="content">
        <p style="color:lightgray;">a few seconds ago</p>
      </div> 
   
      <div class="tweet-actions" >
        <i class="far fa-comment"></i>
        <i class="fas fa-retweet"></i>
        <i class="far fa-heart"></i>
        <i class="far fa-envelope"></i>
      </div>
    </div>
  </div>`;

  addTweet.prepend(tweet);

  messageCount.innerHTML = 280;
  actbtn.style.display = "none";
  content.classList.remove("expanded");
  content.value = "";
  button.style.display = "";
  newTweet.disabled = true;
});

const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

function switchTheme(e) {
  if (e.target.checked) {
    document.getElementsByClassName("compose")[0].style.backgroundColor =
      "#2b3f5e";
    document.getElementsByClassName("tweets")[0].style.color = "white";
    document.getElementsByClassName("tweets")[0].style.backgroundColor =
      "#83b1c9";
  } else {
    document.getElementsByClassName("compose")[0].style.backgroundColor = "";
    document.getElementsByClassName("tweets")[0].style.color = "";
    document.getElementsByClassName("tweets")[0].style.backgroundColor = "";
  }
}
toggleSwitch.addEventListener("change", switchTheme, false);
