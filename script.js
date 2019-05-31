var composeInput = document.getElementById('composeInput');
var actionButtons = document.querySelector('.actions');
var messegeCount = document.querySelector('.message-count');
var toggleButton = document.querySelector('.btn-toggle');
var tweetButton = document.querySelector('.post-tweet');

actionButtons.style.display = 'none';

composeInput.addEventListener('focus', function(event){
    composeInput.style.height = '100px';
    actionButtons.style.display = 'flex';
    document.querySelector('.input-button').style.display = 'none';
})

composeInput.addEventListener('blur', function(){
    composeInput.style.height = '34px';
    actionButtons.style.display = 'none';
    document.querySelector('.input-button').style.display = 'flex';
    
})

composeInput.addEventListener('keyup', function(){
    var button = document.querySelector('.post-tweet');
    var inputLength = composeInput.value.length;
    var maxlength = composeInput.maxLength;
    var messegeCount = document.querySelector('.message-count');
    if(inputLength > 0 ){
        button.disabled = false;
        let totalInput = maxlength - inputLength;
        messegeCount.innerHTML = totalInput;
    }
    else{
        button.disabled = true;
    }

})


// toggleButton.addEventListener('click', function(event){

//     document.querySelector('.tweets').style.backgroundColor = '#2f3235';
//     document.querySelector('.tweets').style.color = 'white';
//     document.querySelector('.compose').style.backgroundColor = '#2f3235';

// })

$(document).ready(function(){

    $('.btn-toggle').on('click', () => {
        $(".compose").css("background-color", "#515760");
        $(".tweets").css("background-color", "#515760");
    })
    
    $('.post-tweet').on('mousedown', () => {


        var tweet = $('<div class="tweet">'+
          '<div class="profile">'+
            '<img class="img-tweet-profile" src="img/bryan.jpg" />'+
          '</div>'+
          '<div class="message">'+
            '<div class="posted-by">'+
              '<span class="display-name">Bryan</span>'+
              '<span class="handle">@bryalpwents</span>'+
            '</div>'+
            '<div class="content">'+
              '<p>'+$("#composeInput").val()+'</p>'+
            '</div>'+
            '<div class="tweet-actions">'+
              '<i class="far fa-comment"></i>'+
              '<i class="fas fa-retweet"></i>'+
              '<i class="far fa-heart"></i>'+
              '<i class="far fa-envelope"></i>'+
            '</div>'+
          '</div>'+
        '</div>');
        
        $('.tweets').prepend(tweet);
        $('#composeInput').val('');
      });

})