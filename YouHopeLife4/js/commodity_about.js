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

var swiper = new Swiper('.swiper-container2', {
        pagination: '.swiper-pagination',
        slidesPerView: 4,
        paginationClickable: true,
        autoplay : 5000,
        loop: true,
        spaceBetween: 30
        
         //nextButton: '.swiper-button-next',
   		 //prevButton: '.swiper-button-prev',
    });