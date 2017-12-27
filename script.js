//Mobile Menu
jQuery(document).ready(function(){
    jQuery('#burger-menu').click(function(){
        jQuery(this).toggleClass('open');
        jQuery('body').toggleClass('noscroll');
                jQuery('.nav-list').stop(true, true).fadeToggle('slow');
        return false;
    });
});
