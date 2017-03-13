var mySwiper = new Swiper('.swiper-container', {
	direction: 'horizontal',
	loop: true,
	autoplay: 4000,
	speed: 800,
	paginationClickable :true,
	// 如果需要分页器
	pagination: '.swiper-pagination',

	// 如果需要前进后退按钮
	//  nextButton: '.swiper-button-next',
	//  prevButton: '.swiper-button-prev',

	// 如果需要滚动条
	//  scrollbar: '.swiper-scrollbar',
})

$(function() {
	var $objbox = $("#masonry");
	var gutter = 25;
	var centerFunc, $top0;
	$objbox.imagesLoaded(function() {
		$objbox.masonry({
			itemSelector: "#masonry > .box",
			gutter: gutter,
			isAnimated: true
		});
		centerFunc = function() {
			$top0 = $objbox.children("[style*='top: 0']");
			$objbox.css("left", ($objbox.width() - ($top0.width() * $top0.length + gutter * ($top0.length - 1))) / 2).parent().css("overflow", "hidden");
		};
		centerFunc();
	});
	var tur = true;
	$(window).resize(function() {
		if(tur) {
			setTimeout(function() {
					tur = true;
					centerFunc();
				},
				1000);
			tur = false;
		}
	});
});