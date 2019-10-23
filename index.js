let text = document.querySelector("#composeInput");
let textLength = text.getAttribute("maxlength");
let count = document.querySelector(".message-count");

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;

$(document).ready(function(){
    $(".actions").css("display","none");
    $("#composeInput").on("focusin",function(){
        $(".input-button").hide();
        $(".actions").show(1000);  
        $(this).addClass("expanded");
    })  
    $("#composeInput").on("focusout",function(){
        if(this.value.length === 0){
            $(".input-button").show();
            $(".actions").hide();
            $(this).removeClass("expanded");   
        }else{
            $(".post-tweet").prop('disabled', false);
        }  
    })
    $("#composeInput").on("input",function(){
        count.innerHTML = textLength - this.value.length;
        if(this.value.length === 0){
            $(".post-tweet").prop('disabled', true);
        }else{
            $(".post-tweet").prop('disabled', false);
        }
        if(count.innerHTML <= 10){
            count.classList.add('danger');
        }else{
            count.classList.remove('danger');
        }
    })
    $(".post-tweet").on("click",function(){
        let item = `
        <div class="tweet">
            <div class="profile">
                <img class="img-tweet-profile" src="img/alagoon.jpg" />
            </div>
            <div class="message">
                <div class="posted-by">
                    <span class="display-name">Joven</span>
                    <span class="handle">@bandagosa&nbsp;${dateTime}</span>
                </div>
                <div class="content">
                    <p>${text.value}</p>
                </div>
                <div class="tweet-actions">
                    <i class="far fa-comment"></i>
                    <i class="fas fa-retweet"></i>
                    <i class="far fa-heart"></i>
                    <i class="far fa-envelope"></i>
                </div>
            </div>
        </div>
            `;

        $(".tweets").prepend(item);
        $(".input-button").show();
        $(".actions").hide();
        $("#composeInput").removeClass("expanded");  
        $("#composeInput").val("");
        $(".post-tweet").prop('disabled', true);
    })
    $(".darkMode").on("click",function(){
        $(".compose").css("background-color","#282824");
        $(".tweets").css("background-color","#282824");
        $(".tweets").css("color","#fff");
        $(".handle").css("color","lightgray");
        $(".darkMode").hide();
        $(".lightMode").show();
    })
    $(".lightMode").on("click",function(){
        $(".compose").css("background-color","#E7F7FD");
        $(".tweets").css("background-color","#fff");
        $(".tweets").css("color","#000");
        $(".handle").css("color","lightgray");
        $(".darkMode").show();
        $(".lightMode").hide();
    })
})