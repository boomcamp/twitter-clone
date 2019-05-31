
const actionDiv = document.querySelector('div[data-testid="tweet-actions"]');
const inputBtn = document.querySelector('div[data-testid="input-button"]');
const inputText = document.querySelector('textarea[data-testid="tweet-input"]');
const tweetBtn = document.querySelector('button[data-testid="post-tweet"]');
const tweetCounter = document.querySelector('span[data-testid="message-count"]');
const tweetContainer = document.querySelector('div[data-testid="tweets"]');
const composeContainer = document.querySelector('.compose');
const BlackBtn = document.querySelector('#BlackMode');
const normalBtn = document.querySelector('#normalMode');
const blackInput = document.getElementById('blackInput');
const normalInput = document.getElementById('normalInput');
var counter;
var timer;
//add event listener to the input textarea
inputText.addEventListener('focus', toggleFocus);
inputText.addEventListener('blur', toggleBlur);
inputText.addEventListener('keyup', toggleBtn);

//add event listener to the submit button
tweetBtn.addEventListener('click', submitBtn);

//add event listener to the dark mode button
BlackBtn.addEventListener('click', BlackMode);

//add event listener to the normal mode button
normalBtn.addEventListener('click', normaMode);

actionDiv.style.display = "none"; //initialized the actions button to be hidden
normalBtn.style.display = "none";

//toggles if input textarea is focus
function toggleFocus() {
    if (inputText.value != "") {
        tweetBtn.disabled = false;
    } else {
        tweetBtn.disabled = true;
    }
    actionDiv.style.display = "";
    inputBtn.style.display = "none";
    inputText.classList.add("expanded");
}
//toggles if input textarea is unfocused
function toggleBlur() {
    if (inputText.value) return;
    actionDiv.style.display = "none";
    inputBtn.style.display = "";
    inputText.classList.remove("expanded");

}
//toggles if typing detected
function toggleBtn() {
    if (inputText.value != "") {
        tweetBtn.disabled = false;
    } else {
        tweetBtn.disabled = true;
    }
    let maxInput = 269;
    tweetCounter.textContent = maxInput - inputText.value.length;
    if (tweetCounter.textContent <= 10) {
        tweetCounter.style.color = "red";
    } else {
        tweetCounter.style.color = "#13b5f0";
    }
}

var interval =  setInterval(time, 1000);
function time(){
    const now = new Date();
    return now.getSeconds();
}

//function for submitting tweet
function submitBtn() {
    var newTweet = `
    <div class="tweet">
        <div class="profile">
            <img class="img-tweet-profile" src="img/damenleeturks.jpg" />
        </div>
        <div class="message">
            <div class="posted-by">
                <span class="display-name">Jeff</span
                ><span class="handle">@jeffguy</span>
                <span class="handle" id="timestamp" data-timeId="${counter}">1s ago</span>
            </div>
            <div class="content">
             <p> ${inputText.value} </p>
            </div>
            <div class="tweet-actions">
                <i class="far fa-comment"></i>
                <i class="fas fa-retweet"></i>
                <i class="far fa-heart"></i>
                <i class="far fa-envelope"></i>
            </div>
        </div>
    </div>`;
    $('.tweets').prepend(newTweet);
    inputText.value = '';
    actionDiv.style.display = "none";
    inputBtn.style.display = "";
    inputText.classList.remove("expanded");
    
    //for time stamp
    counter = tweetContainer.childElementCount;
    if(counter>1){
        for(var x=1;x<counter;x++){
            timer = document.querySelector(`span[data-timeId="${x}"]`);
            timer.innerHTML = time() + 's ago';
        }
    }
}
//toggle Dark Mode
function BlackMode(){
    inputText.style.background = "rgb(60, 60, 60)";
    inputText.style.border = "1px solid rgb(10, 111, 149)";
    tweetContainer.style.background = "rgb(60, 60, 60)";
    composeContainer.style.background = "rgb(5, 45, 60)";
    composeContainer.style.border = "1px solid rgb(10, 111, 149)";
    tweetContainer.style.border = "1px solid rgb(10, 111, 149)";
    tweetContainer.style.color= "white";
    BlackBtn.style.display = 'none';
    normalBtn.style.display = '';
    normalInput.checked=true;
    
}
//toggle Normal Mode
function normaMode(){
    inputText.style.background = "white";
    inputText.style.border = "none";
    tweetContainer.style.background = "white";
    composeContainer.style.background = "#E7F7FD";
    composeContainer.style.border = "none";
    tweetContainer.style.border = "none";
    tweetContainer.style.color= "black";
    BlackBtn.style.display = '';
    normalBtn.style.display = 'none';
    blackInput.checked=false;
}






