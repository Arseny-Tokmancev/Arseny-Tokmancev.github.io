$(document).ready(function() {
  
  $(".top-links-show").click(function(){
    $(this).next()
    .css({ 
      top: $(this).height()
    })
    .slideToggle()
  });
  $(".show-menu-buttons").click(function(){
    $(this).next().slideToggle()
  });

	//Таймер обратного отсчета
	//Документация: http://keith-wood.name/countdown.html
	//<div class="countdown" date-time="2015-01-07"></div>
	var austDay = new Date($(".countdown").attr("date-time"));
	$(".countdown").countdown({until: austDay, format: 'yowdHMS'});

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();

	//Навигация по Landing Page
	//$(".top_mnu") - это верхняя панель со ссылками.
	//Ссылки вида <a href="#contacts">Контакты</a>
	$(".top_mnu").navigation();

	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {offset: 100});

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$("a.scroll").click(function() {
		$.scrollTo($(".div"), 800, {
			offset: -90
		});
	});

	//Каруселька
	//Документация: https://github.com/ganlanyuan/tiny-slider/

	var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 5,
      resistance: false,
      autoHeight: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: true,
      },
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true
      },
	  breakpoints: {
	    // when window width is >= 480px
	    480: {
	      slidesPerView: 2
	    },
	    // when window width is >= 640px
	    768: {
	      slidesPerView: 3,
	    }
	  }
    });

	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#callback").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("#callback").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
});