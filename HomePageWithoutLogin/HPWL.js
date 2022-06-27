/* Announce counter var for Slider */
var counter = 1;

// function sendid(clicked_id){
//     if(document.getElementById(clicked_id).id.startsWith('radio'))
//     return counter = String(clicked_id).slice(5);
// }

/* JS On Page Load */
onload = events => {

    var text = document.getElementById('course');

    /* JS for Tag names: add Tag names to SearchBox upon click */
    const PLname = document.querySelectorAll('[id^="tagPL"');
    // console.log(radiobox);
    PLname.forEach(PLtagname =>{
        // console.log(typeof(parseInt(radio.id.slice(5))));
        PLtagname.addEventListener('click', function(){
            if(text.value.length > 0){
                text.value += ' ' + PLtagname.id.slice(5);
            }else{
                text.value = PLtagname.id.slice(5);
            }
        });
    })
    /* End of JS Tag names */
    
    /* JS for Slider source: https://www.youtube.com/watch?v=0wvrlOyGlq0*/
    const radiobox = document.querySelectorAll('[id^="radio"]');
    // console.log(radiobox);
    radiobox.forEach(radio =>{
        // console.log(typeof(parseInt(radio.id.slice(5))));
        radio.addEventListener('click', function(){
            return counter = parseInt(radio.id.slice(5));
        });
    })
    /* End of JS Slider */

    /* JS for Slider name: add slider tag names to SearchBox upon click */
    document.getElementById('sponsortags1').addEventListener('click',function(){
        if(text.value.length > 0){
            text.value += ' 2022';
        }else{
            text.value = '2022';
        }
    });
    document.getElementById('sponsortags2').addEventListener('click',function(){
        if(text.value.length > 0){
            text.value += ' Microsoft';
        }else{
            text.value = 'Microsoft';
        }
    });
    document.getElementById('sponsortags3').addEventListener('click',function(){
        if(text.value.length > 0){
            text.value += ' Tesla 2022';
        }else{
            text.value = 'Tesla 2022';
        }
    });
    document.getElementById('sponsortags4').addEventListener('click',function(){
        if(text.value.length > 0){
            text.value += ' Nestle 2022';
        }else{
            text.value = 'Nestle 2022';
        }
    });
    /* End of JS Slider tag names */

    /* JS for Detail Button */
    document.getElementById('internfulldetail').addEventListener('click',function(){
        window.location =''; //'/LoginPage/LoginPage.html';
    });
    /* End of JS Detail Button */
};
/* End of JS On Page Load */

/* JS for Automatic Left to Right Slider after 5s delay*/
setInterval(function(){
    document.getElementById('radio' + counter).checked=true;
    if(document.hasFocus()){
        counter++;
    }
    if(counter > 4){ counter = 1;};
},5000);
/* End of JS Slider */