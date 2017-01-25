$(document).ready(function(){
  infoBoxes();
  infoBoxes2();
});

/* Debounce function for window resize                                  */
/* As a responsive site might depend on resizing, the debounce function */
/* throtles functions firing on every pixel width change to a specified */
/* microsecond delay, vastly inproving performance                      */
var resizeinfoBoxes = debounce(function() {
  //Place all functions here that are dependant on screen width
  //basket();
  infoBoxes();
  infoBoxes2();
},250); //fire every 250 milliseconds
window.addEventListener('resize', resizeinfoBoxes);

/* Removes right margin of nth element */
function noRightMargin(n) {
  $(".info-box").removeClass('noRightMargin');
  $(".info-box").each( function (index) {
    index += 1;
    if(index % n == 0) {
      $(this).addClass("noRightMargin");
    }
  });
}

function infoBoxes() {
  if($('.info-box').length) {
    var ww = $(window).width();
    var boxes = 0;
    var allboxes = $('.info-box').length;
    //$('.info-box').addClass('show');
    $('.info-box').show();
    $('.info-box').removeClass('maybeShow');    
    if (ww >= 1200) {
      boxes = Math.min(15,(Math.floor(allboxes/5)*5));
      noRightMargin(5);  //5 boxes wide    
    } else if (ww >= 1000) {
      boxes = Math.min(8,(Math.floor(allboxes/4)*4));
      noRightMargin(4);  //4 boxes wide
    } else if (ww >= 750) {
      boxes = Math.min(6,(Math.floor(allboxes/3)*3));
      noRightMargin(3);  //3 boxes wide     
    } else if (ww >= 550) {
      boxes = Math.min(6,(Math.floor(allboxes/3)*3));
      noRightMargin(2);  //2 boxes wide    
    } else if (ww >= 400) {
      boxes = Math.min(4,(Math.floor(allboxes/2)*2));
      noRightMargin(2);  //2 boxes wide
    } else {
      boxes = Math.min(4,(Math.floor(allboxes/2)*2));
      noRightMargin(2);  //2 boxes      
    }
    $('.info-box').slice(boxes,allboxes).hide().addClass('maybeShow');
    $('#moreless').remove(); 
  }
}

function infoBoxes2() {
  if($('.info-box').length) {
    $('.info-box:last').after('<a id="moreless" href="#">show more</a>');
    $('#moreless').click(function() {
      $(this).toggleClass(function() {
        $('.maybeShow').slideToggle();
        return "less";
      });
      if ($(this).hasClass('less')) {
        $(this).text('show less');
      } else {
        $(this).text('show more');
      }
      return false;
    });   
  }
}


