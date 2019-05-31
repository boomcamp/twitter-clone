const composeInput = document.getElementById('composeInput');
const inActBtn = document.getElementsByClassName('actions');
const inBtn = document.getElementsByClassName('input-button');
const twitBtn = document.getElementsByClassName('post-tweet');
const msgCount = document.getElementsByClassName('message-count');
const twit = document.getElementsByClassName('tweet');
const twits = document.getElementsByClassName('tweets');


inActBtn[0].style.display = 'none';

composeInput.addEventListener('blur', (event) => {
    inBtn[0].style.display = 'inline-block';
    composeInput.classList.remove("expanded");
    if(composeInput.value){
        inActBtn[0].style.display = 'flex';
    }else{
        inActBtn[0].style.display = 'none';
    }
});

composeInput.addEventListener('focus', (event) => {
    inActBtn[0].style.display = 'flex';
});

inBtn[0].addEventListener('click', (event) => {
    inBtn[0].style.display = 'none';
    inActBtn[0].style.display = 'flex';
    composeInput.setAttribute("class", "expanded");
    composeInput.focus();
});

composeInput.addEventListener("input", function(event) {
    if(composeInput.value){
        twitBtn[0].removeAttribute('disabled');
        msgCount[0].innerHTML = 280 - composeInput.value.length;
        if(msgCount[0].innerHTML<11)
            msgCount[0].classList.add("danger");
        else   
            msgCount[0].classList.remove("danger");
    }else{
        twitBtn[0].setAttribute("disabled", "disabled");
    }
});

function submitPost(e){
    inActBtn[0].style.display = 'none';
    let newTwit = twit[0];
    let strHTML = newTwit.outerHTML
        .replace(/(<p>).+(<\/p>)/gm,`$1${composeInput.value}$2`);
    twits[0].insertAdjacentHTML('afterbegin',strHTML);
    composeInput.value = "";
}

twitBtn[0].addEventListener('click', submitPost);