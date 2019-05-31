
let tweets = [];
let names  = ["ninja", "chair", "pancake", "statue", "unicorn", "rainbows", "laser", "senor", "bunny", "captain", "nibblets", "cupcake", "carrot", "gnomes", "glitter", "potato", "salad", "toejam", "curtains", "beets", "toilet", "exorcism", "stick figures", "mermaid eggs", "sea barnacles", "dragons", "jellybeans", "snakes", "dolls", "bushes", "cookies", "apples", "ice cream", "ukulele", "kazoo", "banjo", "opera singer", "circus", "trampoline", "carousel", "carnival", "locomotive", "hot air balloon", "praying mantis", "animator", "artisan", "artist", "colorist", "inker", "coppersmith", "director", "designer", "flatter", "stylist", "leadman", "limner", "make-up artist", "model", "musician", "penciller", "producer", "scenographer", "set decorator", "silversmith", "teacher", "auto mechanic", "beader", "bobbin boy", "clerk of the chapel", "filling station attendant", "foreman", "maintenance engineering", "mechanic", "miller", "moldmaker", "panel beater", "patternmaker", "plant operator", "plumber", "sawfiler", "shop foreman", "soaper", "stationary engineer", "wheelwright", "woodworkers"];
$(document).ready(function(){
let name;

    btnHide();
    // functions
    function twitter(message){
        let obj = Object.create({
            message,
            time: new Date()
        })
        tweets.push(obj);
        
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

    function getEmail(){
       
        return `@${name.replace(' ','')}`; 
    }

    function getTime(key){
        let date = key.time;
        console.log(new Date().getTime() - date.getTime());
        return `${Math.floor((new Date().getTime() - date.getTime())/1000)} seconds`;
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

    // function hideInputButton(){
    //     $('.post-tweet').css({'display':'none'});
    // }

    function refreshData(){
        let newHTML = "";
        tweets.map(key=>{
           console.log(key);


             newHTML += ' <div class="tweet"> ' +
           ' <div class="profile"> ' +
           ' <img class="img-tweet-profile" src="img/funwatercat.jpg" />'+
           '</div>'+
            '<div class="message">'+
            '<div class="posted-by">'+
            '<span class="display-name">'+getName()+'</span'+
               ' ><span class="handle">'+getEmail()+'</span>'+
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
        inputExpand();
        // hideInputButton();
        btnShow();
    })

    $('#composeInput').on('input',function(){
        let textCount = $('#composeInput').attr('maxlength');
        textCount-=$('#composeInput').val().length;
        $('.message-count').text(textCount);
        textCount-=$('#composeInput').val().length > 0 ?  $('.post-tweet').removeAttr('disabled') :  $('.post-tweet').attr("disabled","disabled");
       
    });

    $('#composeInput').on('focusout',function(){
        $(this).val().length > 0 ?   inputExpand() :   inputDexpand();
    })

    $('.post-tweet').on('click',function(){

        // set html output
       let tweet = $("#composeInput").val();
       twitter(tweet);
       clearInput();
       btnDisable();
       inputDexpand();
       refreshData();
    });

    
    setInterval(update,1000);

    function update(){
        
    }

    


    // message counts
   
})