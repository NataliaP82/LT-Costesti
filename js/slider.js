
function slider() {
    let inde=0;
    let slides = document.getElementsByClassName('slide');

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[inde].style.display = "block";
    inde++;
    if (inde >= slides.length) {
        inde = 0;
    }
}

slider();
setInterval(slider, 6000); // intervalul de apel 6 sec