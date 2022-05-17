////////////////////////////////появление/////////////////////////////////
$('.logo').fadeOut(0).delay(2000).fadeIn(400);
$('.studiotext').fadeOut(0).delay(1500).fadeIn(400);
$('.downbtn').fadeOut(0).delay(2500).fadeIn(400);





$(".pinselheader").fadeToggle(0) 
$(".pinselheader").fadeToggle(1100) 
$(".trianglelheader").fadeToggle(0)
$(".trianglelheader").fadeToggle(1300)
$(".triangleline").fadeToggle(0)
$(".triangleline").fadeToggle(1300)





var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}


var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

if(isSafari)
    body.addClass('safari');



///////////////////////////////////плавный скролл///////////////////////////////////



$(document).ready(function(){
    $("body").on("click","a", function (event) {
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});





///////////////////////////////движение за мышью//////////////////////////////////////////
jQuery(document).ready(function(e){
   var left = 0,
   top = 0,
   element = jQuery('.services'),
   offset =  { left: element.offset().left, top: element.offset().top };
   element.bind('mousemove', function(e){
      left = (e.pageX-offset.left);
      top = (e.pageY-offset.top);
      jQuery(this).css({
          backgroundPosition: '-'+(0.01*left)+'px'
          
      });
    });
});

//////////////////////////////services hover effect////////////////////////////////
$('.apulse').on('mouseover', function() {
    $('.pulse').css('display','none');
});
$('.apulse').on('mouseout', function() {
    $('.pulse').css('display','block');
});
$('.apulse').on('mouseover', function() {
    $('.pulsetwo').css('display','block');
});
$('.apulse').on('mouseout', function() {
    $('.pulsetwo').css('display','none');
});



$('.im').on('mouseover', function() {
    $('.store').css('display','block');
    $('.store').css('opacity','1');
    $(".store").fadeToggle(0) 
    $(".store").fadeToggle(100)
});

$('.vs').on('mouseover', function() {
    $('.verstka').css('display','block');
    $('.verstka').css('opacity','1');
    $(".verstka").fadeToggle(0) 
    $(".verstka").fadeToggle(100)
});

$('.lp').on('mouseover', function() {
    $('.lendinf').css('display','block');
    $('.lendinf').css('opacity','1');
    $(".lendinf").fadeToggle(0) 
    $(".lendinf").fadeToggle(100)
});

$('.brend').on('mouseover', function() {
    $('.firmstyle').css('display','block');
    $('.firmstyle').css('opacity','1');
    $(".firmstyle").fadeToggle(0) 
    $(".firmstyle").fadeToggle(100) 
    
});

$('.des').on('mouseover', function() {
    $('.designpng').css('display','block');
    $('.designpng').css('opacity','1');
    $(".designpng").fadeToggle(0) 
    $(".designpng").fadeToggle(100) 
});

$('.del').on('mouseover', function() {
    $('.devlogo').css('display','block');
    $('.devlogo').css('opacity','1');
    $(".devlogo").fadeToggle(0) 
    $(".devlogo").fadeToggle(100) 
});

$('.smm').on('mouseover', function() {
    $('.smmpng').css('display','block');
    $('.smmpng').css('opacity','1');
    $(".smmpng").fadeToggle(0) 
    $(".smmpng").fadeToggle(500) });

$('.seo').on('mouseover', function() {
    $('.seopng').css('display','block');
    $('.seopng').css('opacity','1');
    $(".seopng").fadeToggle(0) 
    $(".seopng").fadeToggle(100) 
});

$('.vved').on('mouseover', function() {
    $('.inputservpng').css('display','block');
    $('.inputservpng').css('opacity','1');
    $(".inputservpng").fadeToggle(0) 
    $(".inputservpng").fadeToggle(100) 
});

////////////////////////offmouse///////////////////////////

$('.im').on('mouseout', function() {
    $('.store').css('display','none');
});

$('.vs').on('mouseout', function() {
    $('.verstka').css('display','none');
});

$('.lp').on('mouseout', function() {
    $('.lendinf').css('display','none');
});

$('.brend').on('mouseout', function() {
    $('.firmstyle').css('display','none');
});

$('.des').on('mouseout', function() {
    $('.designpng').css('display','none');
});

$('.del').on('mouseout', function() {
    $('.devlogo').css('display','none');
});

$('.smm').on('mouseout', function() {
    $('.smmpng').css('display','none');
});

$('.seo').on('mouseout', function() {
    $('.seopng').css('display','none');
});

$('.vved').on('mouseout', function() {
    $('.inputservpng').css('display','none');
});



///////////////////////// CALLBACK //////////////////////////////////////

(function ($) {

    $.infieldLabel = function (el, options) {
        var base = this;
        base.$el = $(el);
        base.el = el;
        base.$el.data("infieldLabel", base);
        base.$input = null;

        base.init = function () {
            base.options = $.extend({}, $.infieldLabel.defaultOptions, options);

            base.setup();
        };

        base.setup = function () {
            base.$input = base.$el.find("input[type=text], input[type=password]");
            base.blur();
            base.bind();
        };
        base.bind = function () {
            base.$input.on("focus.infield", function () {
                base.$el.removeClass(base.options.hideClass)
                    .addClass(base.options.focusClass);
            }).on("blur.infield change.infield", function () {
                base.blur();
            });
        };
        base.blur = function () {
            if (base.$input.val() !== "") {
                base.$el.removeClass(base.options.focusClass)
                    .addClass(base.options.hideClass);

            } else {
                base.$el.removeClass(base.options.focusClass + " " + base.options.hideClass);
            }
        };
        base.init();
    };

    $.infieldLabel.defaultOptions = {
        focusClass: "placeholder-focus",
        hideClass: "placeholder-hide"
    };

    $.fn.infieldLabel = function (options) {
        this.each(function () {
            (new $.infieldLabel(this, options));
        });
    };

})(jQuery);

$('.infield-label').infieldLabel();





function bumbl1(){
document.getElementById("statuyaMan").style.display="none";
document.getElementById("statuyaLineBlock").style.display="block";
}
// Функция которая запрещает скачивать картинки с сайта
var img = document.getElementsByTagName('img');for(var i in img){img[i].oncontextmenu = function() { return false;  }}

var olo = 100;
// function  plus() {
// olo+10;
// }

// setTimeout(plus(), 1000);

// function pfoneBlock(){
//     document.getElementById("pfoneBlockForm").style.display="block";
// }

// setInterval(IncreaseHeight(),2000);

// function pfoneBlockOff(){
//     document.getElementById("pfoneBlockForm").style.display="block";
// }

function myMove(){
        var elem = document.getElementById('pfoneBlockForm');
        var pos = -100;
        var id = setInterval(frame,0.3);
        function frame(){
            if(pos == 0){
                clearInterval(id);
            } 
            else {
                pos ++;
                elem.style.top = pos + "%";
                
            }
        }
    }
    function myMov2(){
        var elem = document.getElementById('pfoneBlockForm');
        var pos = 0;
        var id = setInterval(frame,0.3);
        function frame(){
            if(pos == -105){
                clearInterval(id);
            } 
            else {
                pos --;
                elem.style.top = pos + "%";
                
            }
        }
  
    }


function inputText(){
      var inputText = document.getElementById('inputText');
      inputText.style.fontSize =  1.6+ "vw"; 
    }
    function inputText2(){
      var inputText2 = document.getElementById('inputText2');
      inputText2.style.fontSize =  1.6+ "vw"; 
    }
  
  




    
// кнопки в блоке  О СТУДИИ

// var palm = document.getElementById("palm");
// var mz = document.getElementById("mz");
// var man = document.getElementById("man");

// var  summary = document.getElementById("summary");


// // При нажатии на ПЕРВУЮ кнопку
//  var mzOpacity = 0;
//  var manOpacity = 0;
//  var palmOpacity = 9;


// PushButtons1.onclick = function sous(){
//    // palmImg.style.display = "none";
//    // manImg.style.display = "block";
//    // mzImg.style.display = "none";


// pos1 = 12;
// pos2 = 35;
//     var id5 = setInterval(frame6,100);
//         function frame6(){
//         if(pos1 == 1 || pos2 == 23){
//              clearInterval(id5); 
//              palm.style.display = "none";
//              mz.style.display = "none";
//             } 
 


// if (pos1 <= 1 || pos2 <= 23){


//         var id3 = setInterval(frame2,100);
//         function frame2(){
//         if(mzOpacity == 0 || palmOpacity == 0 ){
//              clearInterval(id3); 
//             } 

//     if(mzOpacity == 0 || palmOpacity == 0){
//   var id = setInterval(frame,250);
//                 function frame(){
//             if(manOpacity == 9 ){
//                 clearInterval(id);
//                manImg.style.opacity =1;
//             }
//             else {
//                 manOpacity ++;
//                manImg.style.opacity = 0+"." + manOpacity;
               
//                }
//              }

//          }



        
//        if(mzOpacity != 0 ){
//          mzOpacity --;
//          mzImg.style.opacity = 0+"." + mzOpacity;
//        }
//         if( palmOpacity != 0){
//          palmOpacity --;
//          palmImg.style.opacity = 0+"." + palmOpacity;
//         }

//         else{
//             mzOpacity --;
//             palmOpacity --;
//             mzImg.style.opacity = 0+"." + mzOpacity;
//             palmImg.style.opacity = 0+"." + palmOpacity;
             
//          }
             
           
          
//           } 
//        }

// }




// else{
//               pos1 --;
//               pos2 --;
//             palm.style.gridArea = 5 +"/"+   pos1  +"/"+  65  +"/"+ pos2;

//             }




// // При нажатии на вторую кнопку
// PushButtons2.onclick = function sous2(){

//    palmImg.style.display = "none";
//    manImg.style.display = "none";
//    mzImg.style.display = "block";

//         var id2 = setInterval(frame1,100);
//         function frame1(){
//         if(palmOpacity == 0 || manOpacity == 0 ){
//             clearInterval(id2); 
//             } 

//          if(palmOpacity == 0 || manOpacity == 0 ){

//     var id = setInterval(frame4,100);
//                 function frame4(){
//             if(mzOpacity == 9 ){
//                 clearInterval(id);
//                mzImg.style.opacity =1;
//             }
//             else {
//                 mzOpacity ++;
//                mzImg.style.opacity = 0+"." + mzOpacity;
               
//                }
//              }

//          }
        
//        //  if(manOpacity  != 0 ){
//        //    manOpacity --;
//        //    manImg.style.opacity = 0+"." + manOpacity;
//        // }
//        //  if(palmOpacity != 0){
//        //   palmOpacity --;
//        //   palmImg.style.opacity = 0+"." + palmOpacity;
//        //  }



// // PushButtons3.onclick = function sous3(){
// // palm.style.width= 0 +"%";   
// // mz.style.width= 0 +"%";
// // man.style.width= 100 +"%";
// // }


// PushButtons3.onclick = function sous3(){
//    mzImg.style.display = "none";
//    manImg.style.display = "none";
//    palmImg.style.display = "block";
//         var id3 = setInterval(frame2,100);
//         function frame2(){
//         if(manOpacity == 0 || mzOpacity == 0){
//              clearInterval(id3); 
//             } 

//     if(manOpacity == 0 || mzOpacity == 0){
//   var id = setInterval(frame,100);
//                 function frame(){
//             if(palmOpacity == 9 ){
//                 clearInterval(id);
//                palmImg.style.opacity =1;
//             }
//             else {
//                 palmOpacity ++;
//                palmImg.style.opacity = 0+"." + palmOpacity;
               
//                }
//              }

//          }
             
//         if(manOpacity  != 0 ){
//           manOpacity --;
//           manImg.style.opacity = 0+"." + manOpacity;
//        }
//         if(mzOpacity != 0){
//            mzOpacity --;
//           mzImg.style.opacity = 0+"." + mzOpacity;
//         }


//             // else {
//             // manOpacity --;
//             // mzOpacity --;
//             // manImg.style.opacity = 0+"." + manOpacity;
//             // mzImg.style.opacity = 0+"." + mzOpacity;
               
//             // }  
//           } 
//        }
