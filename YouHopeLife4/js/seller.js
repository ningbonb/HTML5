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

//分类鼠标经过隐藏菜单
$(".seller_silder_menu").mouseenter(function(){
	$(".seller_silder_menu_about").hide();
	$(".seller_silder_menu_about").eq($(this).index()).show();
});
$(".seller_silder_menu_about").mouseleave(function(){
	$(this).hide();
});
$(".seller_slider").mouseleave(function(){
	$(".seller_silder_menu_about").hide();
});
