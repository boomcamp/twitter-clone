
const actionDiv = document.querySelector('div[data-testid="tweet-actions"]');
const inputBtn = document.querySelector('div[data-testid="input-button"]');
const inputText = document.querySelector('textarea[data-testid="tweet-input"]');
const tweetBtn = document.querySelector('button[data-testid="post-tweet"]');
const tweetCounter = document.querySelector('span[data-testid="message-count"');

//add event listener to the input textarea
inputText.addEventListener('focus',toggleFocus);
inputText.addEventListener('blur',toggleBlur);
inputText.addEventListener('keyup',toggleBtn);


actionDiv.style.display = "none"; //initialized the actions button to be hidden

//toggles if input textarea is focus
function toggleFocus(){
    actionDiv.style.display = "";
    inputBtn.style.display = "none";
    inputText.style.height = "70px";
}
//toggles if input textarea is unfocused
function toggleBlur(){
    actionDiv.style.display = "none";
    inputBtn.style.display = "";
    inputText.style.height = "34px";
}
//toggles if typing detected
function toggleBtn(){
    let maxInput = 280;
    if(inputText.value!=""){
        tweetBtn.disabled = false;
    }else{
        tweetBtn.disabled = true;
    }
    tweetCounter.textContent=maxInput-inputText.value.length;
    if(tweetCounter.textContent<=10){
        tweetCounter.style.color = "red";
    }else{
        tweetCounter.style.color = "black";
    }
}





