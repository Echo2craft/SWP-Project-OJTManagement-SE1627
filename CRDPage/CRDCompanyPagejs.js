/* JS On Page Load */
onload = () => {

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
            cloneinternboard.removeChild(cloneinternboard.children[3]);

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
    var imageuploader = document.getElementById('imageupload');
    if(imageuploader !=null){
        imageuploader.addEventListener('change', function (event){
            var image = document.getElementById('companylogo');
        image.src = URL.createObjectURL(event.target.files[0]);
        })
    }
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