var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    slidesPerView: 3,
    paginationClickable: true,
    spaceBetween: 10
});

$("#post_all").mouseenter(function(){
	$(".part_menu1").show();
});
$(".part_menu1").mouseleave(function(){
	$(".part_menu1").hide();
});
