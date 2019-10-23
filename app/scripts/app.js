const Actions = document.querySelector('.actions');
const input = document.getElementById('composeInput');
const postbtn = document.querySelector('.post-tweet');
const imgprof = document.querySelector('.img-profile');
const message = document.querySelector('.message-count');
const tweets = document.querySelector('.tweets');
const inputbtn = document.querySelector('.input-button');

Actions.style.display = 'none';

input.addEventListener('focus', function(){
    input.classList.add("expanded");
    Actions.style.display ='';
    inputbtn.style.display='none';
  
})

input.addEventListener('blur' ,function(){
    if(input.value.length == 0){
    input.classList.remove("expanded");
    Actions.style.display ='none';
    inputbtn.style.display='';
    }
})

input.addEventListener('keyup',function(){
  
  if(input.value.length > 0){
    postbtn.disabled =  false;
    let total =  input.maxLength - input.value.length;
    message.innerHTML = total;
  if(total <=  10){
  message.classList.add("danger");
  }else{
  message.classList.remove("danger");

}
}
    else{
    postbtn.disabled =  true;
    message.classList.remove("danger");
    message.innerHTML = 280;
        
    }
   
})

    
postbtn.addEventListener("click", function() {
    var tweet = document.createElement("div");
    tweet.innerHTML += ` <div class="tweets" >
    <div class="tweet">
    <div class="profile">
    <img class="img-tweet-profile" src="img/damenleeturks.jpg " />
    </div>
    <div class="message">
    <div class="posted-by">
    <span class="display-name">Jaymard</span
    ><span class="handle">@jaymardmenor</span>
    <span class="handles">&bull; JustNow</span>
    </div>
    <div class="content">
    <p>${input.value}</p>
    </div>
    <div class="tweet-actions">
    <i class="far fa-comment"></i>
    <i class="fas fa-retweet"></i>
    <i class="far fa-heart"></i>
    <i class="far fa-envelope"></i>
</div>
</div>
</div>
</div>`;
    tweets.prepend(tweet); 
    message.innerHTML = 0;
    Actions.style.display = "none";   
    input.classList.remove('expanded');
    input.value = "";
    message.innerHTML = 280;
    inputbtn.style.display='';
  }); 
  let darkcheck =document.getElementById("darkCheck");
    darkcheck.addEventListener('change',function(){
    let darkthemeEnabled =document.body.classList.toggle('dark-theme');
    localStorage.setItem('dark-theme-enabled',darkthemeEnabled);
  });
if(JSON.parse(localStorage.getItem('dark-theme-enabled'))){
    document.body.classList.add('dark-theme');

}



 