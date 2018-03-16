$(document).ready(function(){
   var btn = $('.hb-btn');
    var sidebar = $('.content-sidebar');
    
    btn.click(function(){
       btn.toggleClass('hb-btn_active');
        sidebar.toggleClass('content-sidebar_active');
    });
    
    
});