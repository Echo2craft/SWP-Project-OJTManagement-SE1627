/* JS On Page Load */
onload = () => {
    /* JS for Detail Button */
    document.querySelectorAll('[id="toggleon"]').forEach((e) => {
        e.addEventListener('click', function () {
            var blur = document.querySelector('[id="blur"]');
            blur.classList.toggle('active');
            var popup = document.querySelector('[id="popup"]');
            // let clonedetail = e.parentNode.parentNode.cloneNode(true);
            // let clonebottomdiv = e.parentNode.cloneNode(true);
            let cloneinternboard = e.parentNode.parentNode.parentNode.parentNode.cloneNode(true);
            let cloneimg = cloneinternboard.children[0];
            let clonedetail = cloneinternboard.children[1];
            let clonebottomdiv = clonedetail.children[4].children[0];
            let clonetogglebuttons = clonedetail.children[4].children[1];

            clonedetail.removeChild(cloneinternboard.children[1].children[4]);
            clonedetail.appendChild(clonebottomdiv);
            clonedetail.insertBefore(cloneimg, clonedetail.children[0]);
            
            popup.children[0].children[1].replaceWith(clonetogglebuttons);
            popup.children[0].children[1].removeChild(clonetogglebuttons.lastElementChild);
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
    /* End of JS Detail Button */
};
/* End of JS On Page Load */
