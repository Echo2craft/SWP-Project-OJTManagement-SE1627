var counter = 1;
function sendid(clicked_id){
    if(document.getElementById(clicked_id).id.startsWith('radio'))
    return counter = String(clicked_id).slice(5);
}
setInterval(function(){
    document.getElementById('radio' + counter).checked=true;
    if(document.hasFocus()){
        counter++;
    }
    if(counter > 4){ counter = 1;};
},5000);