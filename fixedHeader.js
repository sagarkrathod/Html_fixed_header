$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > $(".NavPositionChanger").offset().top){
            $("nav").removeClass().addClass('navFixed')
        }
        else if($(this).scrollTop() < $(".NavPositionChanger").offset().top){
            $("nav").removeClass().addClass('navNotFixed');
        }
    })
})