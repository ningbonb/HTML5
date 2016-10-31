//轮播图初始化
var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    autoplay : 5000,
    
    // 如果需要分页器
    pagination: '.swiper-pagination',
    
    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    
}) 
//遍历
$(".home_box_font ul li").mouseenter(function(){
	var index = $(this).index();
	$(this).parent().parent().next().children().next().hide();
	$(this).parent().parent().next().children().next().eq(index).show();
});