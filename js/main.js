
$(function () {
    $('.slider-kfc').slick({
        prevArrow: '<img src="img/left.svg" class="left">',
        nextArrow: '<img src="img/right.svg" class="right">',
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
});
const toper = document.getElementById("cs");
toper.addEventListener(
    "click",
    function () {
        window.scrollTo(0, 0)
    }
)
window.addEventListener(
    "scroll",
    function () {
        if (window.scrollY > 1000) {
            document.getElementById("cs").setAttribute("class", "active")
        }
        else {
            document.getElementById("cs").classList.remove("active")
        }
    })