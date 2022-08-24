	function CountBox() {
		dateNow = new Date();
		amount = ((23 - dateNow.getHours())*60*60 + (59 - dateNow.getMinutes())*60 + (60 - dateNow.getSeconds()))*1000;
		delete dateNow;
		if (amount < 0) {
			out = "<div class='countbox-hours'><span></span>0<div class='countbox-hours-text'></div></div>" + "<div class='countbox-mins'><span></span>0<div class='countbox-mins-text'></div></div>" + "<div class='countbox-secs'><span></span>0<div class='countbox-secs-text'></div></div>";
			var list = document.getElementsByClassName("countbox");
			for (var i = 0; i < list.length; i++) {
				list[i].innerHTML = out;
			}
			setTimeout("CountBox()", 10000)
		} else {
			days = 0;
			hours = 0;
			mins = 0;
			secs = 0;
			out = "";
			amount = Math.floor(amount / 1e3);
			days = Math.floor(amount / 86400);
			amount = amount % 86400;
			hours = Math.floor(amount / 3600);
			amount = amount % 3600;
			mins = Math.floor(amount / 60);
			amount = amount % 60;
			secs = Math.floor(amount);
			hours = (hours < 10) ? "0"+hours :hours;
			mins = (mins < 10) ? "0"+mins :mins;
			secs = (secs < 10) ? "0"+secs:secs;
			out = "<div class='countbox-hours'><span></span>" + hours + "<div class='countbox-hours-text'></div></div>" + "<div class='countbox-mins'><span></span>" + mins + "<div class='countbox-mins-text'></div></div>" + "<div class='countbox-secs'><span></span>" + secs + "<div class='countbox-secs-text'></div></div>";
			var list = document.getElementsByClassName("countbox");
			for (var i = 0; i < list.length; i++) {
				list[i].innerHTML = out;
			}
			setTimeout("CountBox()", 1e3)
		}
	}
	window.onload = function () {
		CountBox()
	}
	
	        $(function(){ // плавный скролл
                $("a[href^='#']").click(function(){
                        var _href = $(this).attr("href");
						var offset = $(_href).offset();
						if(offset != undefined)
						{
							$("html, body").animate({scrollTop: offset.top+"px"});
							return false;
						}
                        else return true;
                });
        });


$(document).ready(function () {
$('.img_box').slick({
	dots: false,
	infinite: true,
	speed: 300,
	slidesToShow: 1,
	arrows: true
})

$('.slider-rev').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrows: true
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
          adaptiveHeight: true
        }
      }
    ]
  });
});