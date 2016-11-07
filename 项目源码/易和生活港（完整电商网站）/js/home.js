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

//商家/商品
$(".logo_search_box2").click(function(){
	$(".logo_search_box1").css({
		"background":"#fff",
		"color":"black"
	});
	$(this).css({
		"background":"#008CE1",
		"color":"#fff"
	});
	$(".logo_search_button a").attr("href","searched_commodity.html");
});
$(".logo_search_box1").click(function(){
	$(".logo_search_box2").css({
		"background":"#fff",
		"color":"black"
	});
	$(this).css({
		"background":"#008CE1",
		"color":"#fff"
	});
	$(".logo_search_button a").attr("href","searched_merchant.html");
});


//动态添加四个推荐店铺
var homeHotNum = 4;
var homeHotImgs = ["../img/homeHot1.png","../img/homeHot2.png","../img/homeHot3.png","../img/homeHot4.png"];
if(homeHotNum >=4) homeHotNum = 4;
for(var i = 0; i < homeHotNum; i++){
	var homeHotA = document.createElement("a");
	homeHotA.href = "commodity_about.html";
	var homeHotImg = document.createElement("img");
	homeHotImg.src = homeHotImgs[i];
	homeHotA.appendChild(homeHotImg);
	$(".home_mian_hot").append(homeHotA);
}

//精选商家大图
AddImg("merchants.html","../img/homeBig1.png",".home_shop_img_big");

//精选商家小图
var homeShopImgSmallNum = 12;
if(homeShopImgSmallNum > 12) homeShopImgSmallNum = 12;
for(var i = 0; i < homeShopImgSmallNum; i++){
	var homeShopSmallA = document.createElement("a");
	homeShopSmallA.src = "commodity_about.html";
	var homeShopSmallImg = document.createElement("img");
	homeShopSmallImg.src = "../img/homeShopS1.png";
	homeShopSmallA.appendChild(homeShopSmallImg)
	$(".home_shop_img_small").append(homeShopSmallA);
}

//餐饮大图
AddImg("seller.html","../img/1474421802356.jpg",".canyin_img");

//餐饮 推荐爆款
var canyinbox1Num = 9;
if(canyinbox1Num > 9) canyinbox1Num = 9;
for(var i = 0; i < canyinbox1Num; i++){
	addBoxBig("../img/jiancai1.png","commodity_about.html","餐饮推荐爆款","毛毛","3922120","山西省太原市中北大学",".canyinhot1");
}
//餐饮 精品新款
var canyinbox2Num = 9;
if(canyinbox2Num > 9) canyinbox2Num = 9;
for(var i = 0; i < canyinbox2Num; i++){
	addBoxBig("../img/jiancai2.png","commodity_about.html","餐饮精品新款","毛毛","3922120","山西省太原市中北大学",".canyinhot2");
}

//餐饮 推荐配件
var canyinbox3Num = 9;
if(canyinbox3Num > 9) canyinbox3Num = 9;
for(var i = 0; i < canyinbox3Num; i++){
	addBoxBig("../img/jiancai3.png","commodity_about.html","餐饮推荐配件","毛毛","3922120","山西省太原市中北大学",".canyinhot3");
}

//广告图1
AddImg("joinUs.html","../img/1473326476727.jpg",".box_ad1");

//服饰大图
AddImg("seller.html","../img/1474421802356.jpg",".fushi_img");

//服饰 推荐爆款
var fushibox1Num = 9;
if(fushibox1Num > 9) fushibox1Num = 9;
for(var i = 0; i < fushibox1Num; i++){
	addBoxBig("../img/jiancai1.png","commodity_about.html","服饰推荐爆款","毛毛","3922120","山西省太原市中北大学",".fushihot1");
}
//服饰 精品新款
var fushibox2Num = 9;
if(fushibox2Num > 9) fushibox2Num = 9;
for(var i = 0; i < fushibox2Num; i++){
	addBoxBig("../img/jiancai2.png","commodity_about.html","服饰精品新款","毛毛","3922120","山西省太原市中北大学",".fushihot2");
}

//服饰 推荐配件
var fushibox3Num = 9;
if(fushibox3Num > 9) fushibox3Num = 9;
for(var i = 0; i < fushibox3Num; i++){
	addBoxBig("../img/jiancai3.png","commodity_about.html","服饰推荐配件","毛毛","3922120","山西省太原市中北大学",".fushihot3");
}

//广告图2
AddImg("joinUs.html","../img/1473326476727.jpg",".box_ad2");