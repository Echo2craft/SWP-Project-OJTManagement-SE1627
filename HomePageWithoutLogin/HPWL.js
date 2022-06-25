var counter = 1;
// function sendid(clicked_id){
//     if(document.getElementById(clicked_id).id.startsWith('radio'))
//     return counter = String(clicked_id).slice(5);
// }
onload = events => {
    var text = document.getElementById('course');
    document.getElementById('radio1').addEventListener('click', function(){
        return counter = 1;
    });
    document.getElementById('radio2').addEventListener('click', function(){
        return counter = 2;
    });
    document.getElementById('radio3').addEventListener('click', function(){
        return counter = 3;
    });
    document.getElementById('radio4').addEventListener('click', function(){
        return counter = 4;
    });
    document.getElementById('tags1').addEventListener('click',function(){
        if(text.value.length > 0){
            text.value += ' 2022';
        }else{
            text.value = '2022';
        }
    });
    document.getElementById('tags2').addEventListener('click',function(){
        if(text.value.length > 0){
            text.value += ' Microsoft';
        }else{
            text.value = 'Microsoft';
        }
    });
    document.getElementById('tags3').addEventListener('click',function(){
        if(text.value.length > 0){
            text.value += ' Tesla 2022';
        }else{
            text.value = 'Tesla 2022';
        }
    });
    document.getElementById('tags4').addEventListener('click',function(){
        if(text.value.length > 0){
            text.value += ' Nestle 2022';
        }else{
            text.value = 'Nestle 2022';
        }
    });
    document.getElementById('reset').addEventListener('click',function(){
        text.value = '';
    });
};
setInterval(function(){
    document.getElementById('radio' + counter).checked=true;
    if(document.hasFocus()){
        counter++;
    }
    if(counter > 4){ counter = 1;};
},5000);