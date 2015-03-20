jQuery(document).ready(function() {
   jQuery('.img_section').hover(function() {
        jQuery(this).find('.caption').addClass('active');
        jQuery(this).siblings().addClass('hidden');
    }, function() {
        jQuery(this).find('.caption').removeClass("active");
        jQuery(this).siblings().removeClass("hidden");
    });
    jQuery('.tabs_content ul.tabs li').on('click', function (e) { 
        e.preventDefault();
        var tab = jQuery(this).closest('.tabs_content'),
            index = jQuery(this).closest('li').index();
        tab.find('ul.tabs > li').removeClass('active');
        jQuery(this).closest('li').addClass('active');
        tab.find('.tabs_container').find('div.tab').not('div.tab:eq(' + index + ')').slideUp();
        tab.find('.tabs_container').find('div.tab:eq(' + index + ')').slideDown();
    });
});

window.onload = function(){

};