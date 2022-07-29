/* Announce counter var for Slider */
var counter = 1;
var current_page = 1;
var records_per_page = 6;
// function sendid(clicked_id){
//     if(document.getElementById(clicked_id).id.startsWith('radio'))
//     return counter = String(clicked_id).slice(5);
// }

/* JS On Page Load */
onload = () => {
    var text = document.getElementById('course');
    //console.log(tagMore);
    /* JS for Tag names: add Tag names to SearchBox upon click */
    const PLname = document.querySelectorAll('[id^="tagPL"]');
    // console.log(radiobox);
    PLname.forEach(PLtagname => {
        // console.log(typeof(parseInt(radio.id.slice(5))));
        PLtagname.addEventListener('click', function () {
            if (text.value.length > 0) {
                text.value += ' ' + PLtagname.innerText;
            } else {
                text.value = PLtagname.innerText;
            }
        });
        let tagMore = document.createElement("li");
        tagMore.innerText = "...";
        tagMore.id = "tagMore";
        let e = PLtagname.parentNode;
        if (e.childNodes.length > 10) {
            e.appendChild(tagMore);
        }
    })
    const PLrequirements = document.querySelectorAll('.internrequirements');
    PLrequirements.forEach(PLRequires => {
        let diaMore = document.createElement("li");
        diaMore.innerText = "...";
        diaMore.id = "diaMore";
        if (PLRequires.childNodes.length > 14) {
            PLRequires.appendChild(diaMore);
        }
    })
    /* End of JS Tag names */

    /* JS for Slider source: https://www.youtube.com/watch?v=0wvrlOyGlq0*/
    const radiobox = document.querySelectorAll('[id^="radio"]');
    // console.log(radiobox);
    radiobox.forEach(radio => {
        // console.log(typeof(parseInt(radio.id.slice(5))));
        radio.addEventListener('click', function () {
            return counter = parseInt(radio.id.slice(5));
        });
    })
    /* End of JS Slider */
    /* JS for Slider name: add slider tag names to SearchBox upon click */
    document.getElementById('sponsortags1').addEventListener('click', function () {
        if (text.value.length > 0) {
            text.value += ' 2022';
        } else {
            text.value = '2022';
        }
    });
    document.getElementById('sponsortags2').addEventListener('click', function () {
        if (text.value.length > 0) {
            text.value += ' Microsoft';
        } else {
            text.value = 'Microsoft';
        }
    });
    document.getElementById('sponsortags3').addEventListener('click', function () {
        if (text.value.length > 0) {
            text.value += ' Tesla 2022';
        } else {
            text.value = 'Tesla 2022';
        }
    });
    document.getElementById('sponsortags4').addEventListener('click', function () {
        if (text.value.length > 0) {
            text.value += ' Nestle 2022';
        } else {
            text.value = 'Nestle 2022';
        }
    });
    /* End of JS Slider tag names */

    /* JS for Detail Button */
    // document.getElementById('internfulldetail').addEventListener('click',function(){
    //     window.location =''; //'/LoginPage/LoginPage.html';
    // });
    document.querySelectorAll('[id="toggleon"]').forEach((e) => {
        e.addEventListener('click', function () {
            var blur = document.querySelector('[id="blur"]');
            blur.classList.toggle('active');
            var popup = document.querySelector('[id="popup"]');
            // let clonedetail = e.parentNode.parentNode.cloneNode(true);
            // let clonebottomdiv = e.parentNode.cloneNode(true);
            let cloneinternboard = e.parentNode.parentNode.parentNode.cloneNode(true);
            let cloneimg = cloneinternboard.children[0];
            let clonedetail = cloneinternboard.children[1];
            let clonebottomdiv = clonedetail.children[4].children[0];
            clonedetail.removeChild(cloneinternboard.children[1].children[4]);
            clonedetail.appendChild(clonebottomdiv);
            clonedetail.insertBefore(cloneimg, clonedetail.children[0]);

            popup.insertBefore(clonedetail, popup.children[0]);
            popup.classList.toggle('active');
        });
    })
    document.querySelector('[id="toggleoff"]').addEventListener('click', function () {
        var blur = document.querySelector('[id="blur"]');
        blur.classList.toggle('active');
        var popup = document.querySelector('[id="popup"]');
        setTimeout(function () {
            popup.removeChild(popup.children[0]);
        }, 400)
        popup.classList.toggle('active');
    })
    // document.querySelector('[id=toggleoff]').addEventListener('click',function(){
    //     var blur = document.querySelector('[id="blur"]');
    //     blur.classList.toggle('active');   
    //     var popup = document.querySelector('[id="popup"]');
    //     popup.removeChild(popup.childNodes);
    //     popup.appendChild();
    //     popup.classList.toggle('active');
    // });
    /* End of JS Detail Button */
};
/* End of JS On Page Load */

/* JS for Automatic Left to Right Slider after 5s delay*/
setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    if (document.hasFocus()) {
        counter++;
    }
    if (counter > 4) {
        counter = 1;
    };
}, 5000);
/* End of JS Slider */