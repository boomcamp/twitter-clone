    
    var tweetnew = document.querySelector(".post-tweet");
    var addsTweet = document.querySelector(".tweets");
    var messageCounter = document.querySelector(".message-count");
    var actionBtns = document.querySelector(".actions");
    var inputContent = document.getElementById("composeInput");
    var btn = document.querySelector(".input-button");
   
      
        actionBtns.style.display = "none";
        inputContent.addEventListener("focus", function(event){
        actionBtns.style.display = "";
        inputContent.classList.add('expanded');
        btn.style.display = 'none';
        tweetnew.disabled =true;
          
      });

        inputContent.addEventListener("blur", function() {
        var inputLength = inputContent.value.length;
        btn.style.display = '';
        actionBtns.style.display ="none";
        inputContent.classList.remove("expanded");
        if (inputLength > 0) {
          inputContent.classList.add('expanded');
          actionBtns.style.display = "";
        } 
     
        });

          inputContent.addEventListener("keyup", function() {
          
          inputContent.classList.add('expanded');
          var inputLength = inputContent.value.length;
          var maxlength = inputContent.maxLength;
          var newMessageCounter = maxlength - inputLength;
          messageCounter.innerHTML = newMessageCounter;
          
          if (inputLength > 0){
            tweetnew.disabled = false;
           }
            else{
              
              tweetnew.disabled = true;
            }
         
          if(newMessageCounter <= 10){

            messageCounter.style.color="red";
           }
          else{
            messageCounter.style.color="#13B5F0";
          }
           
        });

        tweetnew.addEventListener("click", function() {
          var tweet = document.createElement("div");
          tweet.innerHTML += `<div class="tweet">
            <div class="profile">
              <img class="img-tweet-profile" src="img/Fi_Summer16_ReLIFEss3.jpg"/>
            <div class="message">
                <div class="posted-by" style ="margin-left:25%;margin-top:-25%">
                  <span class="display-name">delfz</span
                  ><span class="handle">@delfz</span>
                </div>
                  <div class="content" >
                    <p style ="padding-left:26%">${inputContent.value}</p>
                  </div>
                    <div class="tweet-actions">
                      <i class="far fa-comment"></i>
                      <i class="fas fa-retweet"></i>
                      <i class="far fa-heart"></i>
                      <i class="far fa-envelope"></i>
                    </div>
            </div>
          </div>`;
            addsTweet.prepend(tweet);
            messageCounter.innerHTML = 280;
            actionBtns.style.display = "none";
            inputContent.value = "";
            btn.style.display = '';
            tweetnew.disabled =false;
            inputContent.classList.remove("expanded");

          });
