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
    console.log(elementId);
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

    //$('.logo').removeClass('nav-active');
    
    // if($("#nav-toggle").hasClass('toggle-active')){
    //     $('#nav-toggle').toggleClass('toggle-active');
    //     $("#nav").toggleClass('nav-a-active');
    // }
});
