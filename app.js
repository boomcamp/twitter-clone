
var action = document.querySelector('div[data-testid="tweet-actions"]');
var textarea = document.querySelector('#composeInput');
var inputbtn = document.querySelector('div[data-testid="input-button"]');
var tweetbtn = document.querySelector('button[data-testid="post-tweet"]');
var tweetcount = document.querySelector('span[data-testid="message-count"]');
var tweets = document.querySelector('div[data-testid="tweets"]');

textarea.addEventListener('focus', textInput);
textarea.addEventListener('blur', showtextInput);
textarea.addEventListener('keyup', showbtn);
tweetbtn.addEventListener('click', addtweetbtn);

action.style.display = 'none';

/*Toggle TextArea*/

function textInput() {
   action.style.display = '';
   inputbtn.style.display = 'none';
   textarea.classList.add('expanded');
}
/*End Toggle TextArea*/


/*Blur TextArea*/

function showtextInput() {
    let maxinput = 269;
    if(textarea.value) return;
    action.style.display = 'none';
    inputbtn.style.display = '';
    textarea.classList.remove('expanded');
}
/*End Blur TextArea*/
 

/* Toggle tweet button && character counter */

function showbtn() {
    let maxinput = 269;
    if(textarea.value != "") {
        tweetbtn.disabled = false;
    } else {
        tweetbtn.disabled = true;
    } 
    
    tweetcount.textContent = maxinput - textarea.value.length;
       if(tweetcount.textContent <= 10) {
            tweetcount.style.color = 'red'
        } else {
            tweetcount.style.color = '#13B5F0'
        }
    }
/* End toggle tweet button && character counter */

function addtweetbtn() {

var newtweet =
        `<div class="tweet">
            <div class="profile">
            <img class="img-tweet-profile" src="img/damenleeturks.jpg" />
            </div>
            <div class="message">
            <div class="posted-by">
                <span class="display-name">Jeff</span
                ><span class="handle">@jeffguy 1s ago</span>
            </div>
            <div class="content">
                <p>${textarea.value}</p>
            </div>
            <div class="tweet-actions">
                <i class="far fa-comment"></i>
                <i class="fas fa-retweet"></i>
                <i class="far fa-heart"></i>
                <i class="far fa-envelope"></i>
            </div>
            </div>
        </div>`;
    $('.tweets').prepend(newtweet);

    textarea.value = "";
    action.style.display = "none";
    inputbtn.style.display = "";
    textarea.classList.remove('expanded');
}