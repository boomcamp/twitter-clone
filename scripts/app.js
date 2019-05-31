
var composeInput = document.querySelector('#composeInput');
var actions = document.querySelector('.actions');
var postBtn = document.querySelector('.post-tweet');
var imgProfile = document.querySelector('.img-profile');

actions.style.display = 'none';



composeInput.addEventListener('focus' , showComposer);

composeInput.addEventListener('keyup' , tweetCompose);


var postedTweetsArr = [];
function postedTweets(imgSrc , displayName , handle , tweet , date){
    this.imgSrc = imgSrc;
    this.displayName = displayName;
    this.handle = handle;
    this.tweet = tweet;
    this.date = date;
}



postBtn.addEventListener('click' , addTweet);





function showComposer(event){
    composeInput.style.height = '70px';
    actions.style.display = 'flex';

}

function hideComposer(){
    composeInput.style.height = '34px';
    actions.style.display = 'none';
}

function tweetCompose(event){
    
    var composedLength = composeInput.value.length;
    var msgCount = document.querySelector('.message-count');
    var maxLength = composeInput.maxLength;
    if( composedLength > 0){
        postBtn.disabled = false;
        let totalLength = maxLength - composedLength;
        msgCount.innerHTML = totalLength;
        if(composedLength > maxLength-10){
            msgCount.classList.add('red');
        }
        else{
            msgCount.classList.remove('red');
        }
    }
    else{
        postBtn.disabled = true;
        msgCount.innerHTML = maxLength;
    }
}

function addTweet(){
    let imgSrc = imgProfile.src;
    let tweet = composeInput.value;
    let date = new Date();
    let newTweet = new postedTweets(imgSrc , 'Jeff' , '@jeffguy' , tweet , date);

    postedTweetsArr.push(newTweet);

    showTweets();
}

function showTweets(){
    
    postedTweetsArr.forEach(element => {
        console.log('asdas');
    });


}
