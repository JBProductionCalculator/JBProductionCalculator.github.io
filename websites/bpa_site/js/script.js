

window.onload = function(){


    
    var next = document.querySelector('.cases__next');
    var prev = document.querySelector('.cases__prev');
    var slides = document.querySelectorAll('.cases__slider');

    
    var i = 0;

    next.onclick = function(){
        slides[i].classList.remove('show');

        i++;
        slides[i].classList.add('show');

    }


    prev.onclick = function(){
      
    }
    
    
    }
    







// СТРАЦА КАРЬЕРА . АКОРДИОН С ДВУМЯ ПРЕДЛОЖЕНИЯМИ РАБОТЫ

var content = document.querySelectorAll(".careers__weNeed__box__content");
var shadow = document.querySelectorAll(".careers__weNeed__box__shadow");

var span = document.querySelectorAll(".careers__weNeed__box__content__arrow span");

var i = 1;
content[0].onclick = function (){
    i++;
    if(i%2 == 0){
        shadow[0].style.display = "block";
        span[0].style.transform = "rotate(135deg)";

        shadow[1].style.display = "none";
    }else{
        shadow[0].style.display = "none";
        span[0].style.transform = "rotate(45deg)";
    }
}


var a = 1;
content[1].onclick = function(){
    a++;
    if(a%2 == 0){
        shadow[1].style.display = "block";
        span[1].style.transform = "rotate(135deg)";

        shadow[0].style.display = "none";
    }else{
        shadow[1].style.display = "none";
        span[1].style.transform = "rotate(45deg)";
    }
}









    //страница карьера. управление высотой header
    // var careersVideo = document.querySelector('.careers__neader__video__one');
    // var header = document.querySelector('.careers__neader');
    // header.style.height =    careersVideo.style.height;

    $(function (){
        var height = $('.careers__neader__video__one').height();
        $('.careers__neader').height(height);




// СТРАНЦА КАРЬЕРА . КВАДРАТНЫЕ ЭЛЕМЕНТЫ В ТРЕТЬЕМ БЛОКЕ
    
    var careersBox = $('.careers__aboutUsContent__box');
    var careersBoxWidth = careersBox.width();
    careersBox.height(careersBoxWidth);

    var windthCareers = $('.careers__aboutUsContent__box').width();


// СТРАНЦА КАРЬЕРА. ОТСТУП НЕАДЕРА ДЛЯ ПЛАНШЕТОВ


     var windowWidth = $(window).width();
     if (windowWidth < 1210) {
        var marginTop = $('.menu').height();
        $('.indent').css("margin-top" , marginTop);
     }
     


          
   });




    





