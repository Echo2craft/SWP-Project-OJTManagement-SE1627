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
            let cloneinternboard = e.parentNode.parentNode.cloneNode(true);
            let cloneimg = cloneinternboard.children[3];
            console.log(cloneimg);

            cloneinternboard.children[2].removeChild(cloneinternboard.children[2].children[1]);
            cloneinternboard.insertBefore(cloneimg, cloneinternboard.children[0]);
            console.log(cloneinternboard);
            
            //clonedetail.appendChild(clonebottomdiv);

            popup.insertBefore(cloneinternboard, popup.children[0]);
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