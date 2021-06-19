$(function(){
/*fixed header*/
let header = $("#header");
let intro = $("#intro");

let introHeigth = intro.innerHeight();
let scrollPos = $(window).scrollTop();


$(window).on("scroll load resize", function(){
    introHeigth = intro.innerHeight();
    scrollPos = $(this).scrollTop();

    if( scrollPos > introHeigth) {
        header.addClass("fixed");
    } else {
        header.removeClass("fixed");
    }
});




/*scroll*/

$("[data-scroll]").on("click", function(event){
    event.preventDefault();

    let blockID = $(this).data('scroll');
    let blockOffset = $(blockID).offset().top;
    $("#nav").removeClass("show");
    $("html, body").animate({
       scrollTop:  blockOffset -60
    }, 1000);
});


    /*nav*/

    $("#burger").on("click", function(event){
        event.preventDefault();
        $("#nav").toggleClass("show");
    });


    /*slider*/

    let slider = $("#reviewsSlider");
        slider.slick({
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
          arrows:false,
            dots:true
});


});
