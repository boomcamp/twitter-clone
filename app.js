
const action = document.querySelector('div[data-testid="tweet-actions"]');
const textArea = document.querySelector('#composeInput');

action.style.display = 'none';

textArea.addEventListener('focus', textInput);
textArea.addEventListener('blur', showtextInput);

/*Toggle TextArea*/

function textInput() {
   action.style.display = '';
   textArea.style.height = "68px";
}
/*End Toggle TextArea*/

/*Blur TextArea*/

function showtextInput() {
    action.style.display = 'none';
    textArea.style.height = "34px";
}

/*End Blur TextArea*/