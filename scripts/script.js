
let tweets = [];
let names  = ["ninja", "chair", "pancake", "statue", "unicorn", "rainbows", "laser", "senor", "bunny", "captain", "nibblets", "cupcake", "carrot", "gnomes", "glitter", "potato", "salad", "toejam", "curtains", "beets", "toilet", "exorcism", "stick figures", "mermaid eggs", "sea barnacles", "dragons", "jellybeans", "snakes", "dolls", "bushes", "cookies", "apples", "ice cream", "ukulele", "kazoo", "banjo", "opera singer", "circus", "trampoline", "carousel", "carnival", "locomotive", "hot air balloon", "praying mantis", "animator", "artisan", "artist", "colorist", "inker", "coppersmith", "director", "designer", "flatter", "stylist", "leadman", "limner", "make-up artist", "model", "musician", "penciller", "producer", "scenographer", "set decorator", "silversmith", "teacher", "auto mechanic", "beader", "bobbin boy", "clerk of the chapel", "filling station attendant", "foreman", "maintenance engineering", "mechanic", "miller", "moldmaker", "panel beater", "patternmaker", "plant operator", "plumber", "sawfiler", "shop foreman", "soaper", "stationary engineer", "wheelwright", "woodworkers"];
$(document).ready(function(){
let activeIndex = 0;
let activeUrl = "img/damenleeturks.jpg";
let name;

    btnHide();
    // functions
    function twitter(message){
        let obj = Object.create({
            avatar : activeUrl,
            name: getName(),
            mail: getEmail(),
            message,
            time: new Date()
        })
        tweets.unshift(obj);
        
    }
    
    function getName(){
        let nameCode = Math.floor(Math.random()*names.length);
         name = names[nameCode];
        first = name.charAt(0).toUpperCase();
        
        return `${first} ${name}`;
    }

    function btnDisable(){
        $('.post-tweet').attr('disabled','disabled');
    }

    function hideInputButton(){
        $('.input-button').css({'display':'block'});
    }

    function getEmail(){
       
        return `@${name.replace(' ','')}`; 
    }

    function getTime(key){
        let date = key.time;
        let time;
        let suffix = "seconds";
        time = Math.floor((new Date().getTime() - date.getTime())/1000);
        if(time>60){
            time = Math.floor(time/60);
            suffix = "min";

             if(time > 60){
                 time =  Math.floor(time/60);
                 suffix = "hour";
             }
        }
     
        return `${time} ${suffix}`;
    }

    function btnHide(){
        $('.actions').css({'display':'none'});
    }

    function btnShow(){
        $('.actions').css({'display':'flex'});
    }

    function inputExpand(){
        $('#composeInput').addClass(' expanded');
    }
    // document.querySelector('composeInput').classList.add('expanded');
    function inputDexpand(){
        $('#composeInput').removeClass(' expanded');
    }

    function returnCount(){
        let textCount = $('#composeInput').attr('maxlength');
        textCount-=$('#composeInput').val().length;
        $('.message-count').text(textCount);
         return textCount;
    }

    function clearInput(){
        $('#composeInput').val('');
    }

    

    function refreshData(){
        let newHTML = "";
        tweets = tweets.sort((a,b)=>{return a-b});
       
        tweets.map(key=>{
           


             newHTML += ' <div class="tweet"> ' +
           ' <div class="profile"> ' +
           ' <img class="img-tweet-profile" src="'+key.avatar+'" />'+
           '</div>'+
            '<div class="message">'+
            '<div class="posted-by">'+
            '<span class="display-name">'+key.name+'</span'+
               ' ><span class="handle">'+key.mail+'</span>'+
               ' <span class="timestamp">'+`${getTime(key)} ago`+'</span>'+
              '</div>'+
              '<div class="content">'+
                '<p>'+key.message+'</p>'+
             ' </div>'+
              
              '<div class="tweet-actions">'+
                '<i class="far fa-comment"></i>'+
                '<i class="fas fa-retweet"></i>'+
                '<i class="far fa-heart"></i>'+
                '<i class="far fa-envelope"></i>'+
              '</div>'+
              
            '</div></div>';
            
            
            
           
        });

        $('.tweets').html(newHTML);
    }



   

    $('#composeInput').on('focus',function(){
       
    })

    
    $('#composeInput').on('input focus',function(){
        let textCount = $('#composeInput').attr('maxlength');
        textCount-=$('#composeInput').val().length;
        $('.message-count').text(textCount);
        inputExpand();
        $('.input-button').css({'display':'none'});
        btnShow();
        textCount-=$('#composeInput').val().length > 0 ?  $('.post-tweet').removeAttr('disabled') :  $('.post-tweet').attr("disabled","disabled");
       
    });

    $('#composeInput').on('input blur',function(){
        if($(this).val().length > 0) return;
        else {
            inputDexpand();
            $('.input-button').css({'display':'block'});
            btnHide();
        }
    })

    $('.post-tweet').on('click',function(){

        // set html output
       let tweet = $("#composeInput").val();
       twitter(tweet);
       clearInput();
       btnDisable();
       
       btnHide();
       $('.input-button').css({'display':'block'});
       inputDexpand();
       refreshData();
       
    });

    
    setInterval(update,10000);

    function update(){
        
    }


    $('.mode').on('click',function(){
       let color = this.dataset.color;
       let fcolor;
        color === "#000000" ? fcolor = "#FFFFFF" : fcolor = "#000000";
        let f2color;
        if(color==="#000000"){
            f2color = "#000000";
            $(this).text("Dark");
        }
        else {
            f2color = "#FFFFFF";
            $(this).text("Light");
        }
        $(this).css('background',fcolor);
        $(document.documentElement).css('--bg',color);
       $(document.documentElement).css('--fcolor',fcolor);
       $(document.documentElement).css('--cfcolor',f2color);
        color === "#000000" ? $(this).attr("data-color","#FFFFFF") : $(this).attr("data-color","#000000");
    })


    $('button #image').on('click',function(){
        console.log("Invoked");
    })

    $('.img-profile').on('click',function(){
        
        let srcMain = "img";
        let suffix = "jpg";
        // `${srcMain}/${imgArrays[activeIndex]}.jpg`
        let imgArrays = ["img/alagoon.jpg","img/damenleeturks.jpg","img/funwatercat.jpg","img/jennyshen.jpg","img/vklimenko.jpg"];
        $('.img-profile').attr('src',`${imgArrays[activeIndex]}`);
        activeUrl = imgArrays[activeIndex];
       if(activeIndex===imgArrays.length-1){
        activeIndex=0;
       }
       else {
           activeIndex++;
       }
        
    })

    


    // message counts
   
})