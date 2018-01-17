jQuery(document).ready(function(){
    
    new WOW().init();

   //scroll
    jQuery("#about").click(function(){
        jQuery('html, body').animate({
          scrollTop: jQuery("#abouts").offset().top
          }, 2000);
          return false;
    })
    jQuery("#portfolio").click(function(){
        jQuery('html, body').animate({
          scrollTop: jQuery("#portfolios").offset().top
          }, 2000);
          return false;
    })
    jQuery("#contact").click(function(){
        jQuery('html, body').animate({
          scrollTop: jQuery("#contacts").offset().top
          }, 2000);
          return false;
    })

   //skills
    function progressShow(){
        jQuery(".pi1").animate({'width' : '90%'}, 2000);
        jQuery(".pi2").animate({'width' : '80%'}, 2000);
        jQuery(".pi3").animate({'width' : '70%'}, 2000);
        jQuery(".pi4").animate({'width' : '60%'}, 2000);
    }
    jQuery(".skills").click(function(){
            progressShow();
            jQuery(".progress-inner p").show();
     })

    //responsive menu btn
     jQuery(".menu-btn i").click(function(){
      jQuery(".menu-area").slideToggle();
     })
     jQuery(window).resize(function(){
      var screenSize=jQuery(window).width();
      if (screenSize > 768) {
        jQuery(".menu-area").removeAttr("style");
      }
     })
	
    //up button
    jQuery(window).scroll(function(){
      var distance = jQuery(window).scrollTop(); 

      if (distance > 198) {
        jQuery(".up-btn").fadeIn();
      }
      else{
        jQuery(".up-btn").fadeOut();
      }
    });
    jQuery(".up-btn").click(function(){
      jQuery("html").animate({'scrollTop' : 0},2000)
    })
   
});