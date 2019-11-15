/**
 * Given to me by Eventyret_Mentor
 * Hiding the logo on scroll 
 */
$(window).scroll(function() {
    if ($(this).scrollTop()>120){
        $('.navbar-brand').hide(1000);
     }
    else{
      $('.navbar-brand').show(1000);
     }
 });    