
var action = document.querySelector('div[data-testid="tweet-actions"]');
var textarea = document.querySelector('#composeInput');
var inputbtn = document.querySelector('div[data-testid="input-button"]');
var tweetbtn = document.querySelector('button[data-testid="post-tweet"]');
var tweetcount = document.querySelector('span[data-testid="message-count"]');

textarea.addEventListener('focus', textInput);
textarea.addEventListener('blur', showtextInput);
textarea.addEventListener('keyup', showbtn);

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
    if(textarea.value) return;
    action.style.display = 'none';
    inputbtn.style.display = '';
    textarea.classList.remove('expanded');
}
/*End Blur TextArea*/
 

function showbtn() {
    let maxinput = 269;
    if(textarea.value != "") {
        tweetbtn.disabled = false;
    } else {
        tweetbtn.disabled = true;
    } tweetcount.content = maxvalue - textarea.length {
        
    }
}