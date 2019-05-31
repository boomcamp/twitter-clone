$('.actions').hide();

// when input is focus
document.getElementById('composeInput').addEventListener('focus', function(){
    $('.actions').show();
    $('.input-button').hide();
})

// when user starts to type in the input
document.getElementById('composeInput').addEventListener('keyup', function(){
    var postTweet = Array.from(document.getElementsByClassName('post-tweet'));
    postTweet.forEach(tweet => tweet.removeAttribute("disabled")); 

    // disabled tweet button if input is empty
    if(document.getElementById('composeInput').value == ''){
        document.querySelector('.post-tweet').disabled = true;
    }
    
    // decrement
    var message =  document.querySelector('.message-count');
    var inputVal = document.getElementById('composeInput');
    var maxchar = 280;
    var currlength = maxchar - inputVal.value.length;

    // if 10 or less make it red
    if(currlength <= 10){
        message.style.color = 'red';
    }
    else{
        message.style.color = '#13B5F0';
    }

    message.innerHTML = currlength;
})

// when input is not focus

document.getElementById('composeInput').addEventListener('focusout', function(){
    var checkInput = $('#composeInput').val().length;
    if(checkInput !== 0){
        $('.actions').show();
    }
    else{
        $('.actions').hide();
        $('.input-button').show();
    }
})


var postArray = [];
// duplicate the tweets div
document.querySelector('.post-tweet').addEventListener('click', function(){
    $('.actions').hide();

   
    postArray.push($('#composeInput').val());
    document.getElementById('composeInput').value = '';
    $('.input-button').show();
    var tweets = document.querySelector('.tweet');
    var clntweets = tweets.cloneNode(true);
    // var p = document.createElement('p');
    // p.innerHTML = post;
    document.querySelector('.tweets').appendChild(clntweets);
    var contentArray = Array.from(document.getElementsByClassName('content'));
    var displayArray = Array.from(document.getElementsByClassName('display-name'));
    var handleArray = Array.from(document.getElementsByClassName('handle'));
    var imgArray = Array.from(document.getElementsByClassName('img-tweet-profile'));

    

    for(let x=0; x<=contentArray.length; x++){
        contentArray[x+1].classList.add('text-padding');
        contentArray[x+1].innerHTML = postArray[x];
        displayArray[x+1].innerHTML = 'Jeff';
        handleArray[x+1].innerHTML = '@jeffguy';
        imgArray[x+1].src = 'img/damenleeturks.jpg';

    }

    // var contents = Array.from(document.getElementsByClassName('content'));
    // for(let z=0; z<contents.length; z++){
    //     contents[z+1].classList.add('text-padding');
    // }
    
})

// dark mode feature
document.getElementById('dm').addEventListener('click', function(){
    var body = document.getElementsByTagName('body')[0];
    document.querySelector('.tweets').classList.toggle('dark-mode');
    document.querySelector('.compose').classList.toggle('dark-mode');
    modeFunct();
})

function modeFunct() {
    var x = document.getElementById("dm");
    if (x.innerHTML === "Dark Mode") {
      x.innerHTML = "Original Mode";
    } else {
      x.innerHTML = "Dark Mode";
    }
  }