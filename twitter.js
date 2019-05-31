
const actionDiv = document.querySelector('div[data-testid="tweet-actions"]');
actionDiv.style.display = "none";
const inputBtn = document.querySelector('div[data-testid="input-button"]');
const inputText = document.querySelector('textarea[data-testid="tweet-input"]');


function toggleFocus(){
    actionDiv.style.display = "";
    inputBtn.style.display = "none";
    inputText.style.height = "70px";
}
function toggleBlur(){
    actionDiv.style.display = "none";
    inputBtn.style.display = "";
    inputText.style.height = "34px";
}
const tweetInput = document.querySelector('#composeInput');
tweetInput.addEventListener('focus',toggleFocus);
tweetInput.addEventListener('blur',toggleBlur);



