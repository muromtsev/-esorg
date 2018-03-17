$(document).ready(function(){
   var btn = $('.hb-btn');
    var menu = $('.header-menu');
    
    btn.click(function(){
       btn.toggleClass('hb-btn_active');
        menu.toggleClass('header-menu_active');
    });
    
    
});