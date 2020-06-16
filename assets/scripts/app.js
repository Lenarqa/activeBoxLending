var header = $('#header');
var introHeight = $('#intro-content').innerHeight();
var scrollOffset = $(window).scrollTop();

$(window).on('scroll', function(){
    console.log(introHeight)
    scrollOffset = $(this).scrollTop();
    CheckScroll(scrollOffset);//intro 
});

function CheckScroll(scrollOffset){ 
    
    if(scrollOffset >= introHeight - $('#header').innerHeight()){
        header.addClass('header-fixed');
    }else{
        header.removeClass('header-fixed');
    }
}

// nav show-close
$('#nav-btn').on('click', function(){
    $(this).toggleClass(' toggle-active');
    $("#nav").toggleClass('nav-active');
});


//smooth scroll
$('[data-scroll]').on('click', function(event){
    event.preventDefault();

    var elementOffset;
    var $this = $(this); 
    var elementId = $this.data("scroll");
    if(elementId ==='#features'){
        elementOffset = $(elementId).offset().top
    }
    if(elementId === "#intro-content"){
        elementOffset = 0;
    }else{
        elementOffset = $(elementId).offset().top - $('#header').innerHeight();
    }
    
    $('#nav div').removeClass('nav-item-active');
    $this.addClass('nav-item-active');
    
    $('html, body').animate({
        scrollTop: elementOffset
    }, 500);

    // if($("#nav-btn").hasClass('nav-toggle-active')){
    //     $('#nav-btn').toggleClass('nav-toggle-active');
    //     // $("#nav div").toggleClass('nav-item-active');
    // }
});

$(".nav-item").on('click', function(event){
    event.preventDefault();

    $('#nav-btn').toggleClass('toggle-active');
    $('#nav').toggleClass('nav-active');
})

$('.single-item').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000
});
