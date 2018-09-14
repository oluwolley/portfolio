    $(function(){
        $('.about-me').waypoint(function(direction){
            if(direction == "down"){
                
                $('nav ul').addClass('sticky');
            }else{
                $('nav ul').removeClass('sticky');
            }

        });


        $('.arrow').addClass('animated infinite pulse');
        $('#head-p').addClass('animated infinite pulse');
       
        $('.nav-bar').click(function(){
    var nav = $('.main-nav');
    var icon = $('.nav-bar i');
    
    nav.slideToggle(200);
    if (icon.hasClass('fa-bars'))
{
    icon.addClass('fa-times');
    icon.removeClass('fa-bars');

}else{
     icon.addClass('fa-bars');
    icon.removeClass('fa-times');
    
}})
        $('.about').click(function(){
    $('html, body').animate({scrollTop: $('.about-me').offset().top}, 1000);    
    });
      $('.arrow-down').click(function(){
    $('html, body').animate({scrollTop: $('.about-me').offset().top}, 1000);    
    });

    $('.mywork').click(function(){
    $('html, body').animate({scrollTop: $('.my-work').offset().top}, 1000);    
    });
    
    $(function(){
    $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});
    
});


      
            

        
    });

    




