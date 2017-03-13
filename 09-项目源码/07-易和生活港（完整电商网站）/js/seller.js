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


var jingpinNum = 10;
for(var i = 0; i < jingpinNum; i++){
	addBoxBig1("../img/jiancai1.png","commodity_about.html","毛毛的精品商家","毛毛","3922120","山西省太原市中北大学",".merchants_wrap");
}

function addBoxBig1(ImgUrl,AImgUrl,title,name,phone,add,boxName){
	var aImg = document.createElement("img");
	aImg.src = ImgUrl;
	var aA = document.createElement("a");
	aA.href = AImgUrl;
	aA.appendChild(aImg);
	var aDiv = document.createElement("div");
	aDiv.setAttribute("class","small_box_wrap");
	aDiv.appendChild(aA);
	var aSpan = document.createElement("span");
	aDiv.appendChild(aSpan)
	aSpan.innerHTML = title;
	
	var Div = document.createElement("div");
	Div.setAttribute("class","merchant_box");
	Div.appendChild(aDiv);
	//添加名字
	var bImg = document.createElement("img");
	bImg.src = "../img/person.png";
	var bDiv = document.createElement("div");
	bDiv.setAttribute("class","samll_msg");
	bDiv.appendChild(bImg);
	bDiv.innerHTML += name;
	Div.appendChild(bDiv);
	//添加电话
	var cImg = document.createElement("img");
	cImg.src = "../img/phoe.png";
	var cDiv = document.createElement("div");
	cDiv.setAttribute("class","samll_msg");
	cDiv.appendChild(bImg);
	cDiv.innerHTML += phone;
	Div.appendChild(cDiv);
	
	//添加地址
	var dImg = document.createElement("img");
	dImg.src = "../img/add.png";
	var dDiv = document.createElement("div");
	dDiv.setAttribute("class","samll_msg");
	dDiv.appendChild(bImg);
	dDiv.innerHTML += add;
	Div.appendChild(dDiv);
	
	//添加到
	$(boxName).append(Div);
}



//1
var sKind1_1 = ["1手机商家","电脑及配件","厨房电器件","智能生活","个护保健","显示器","油烟机"];
for(var i = 0; i < sKind1_1.length; i++){
	addSellerSon(sKind1_1[i],"seller.html",".seller1_1");
}
var sKind1_2 = ["1手机商家","电脑及配件","厨房电器件","智能生活","个护保健","显示器","油烟机"];
for(var i = 0; i < sKind1_2.length; i++){
	addSellerSon(sKind1_2[i],"seller.html",".seller1_2");
}
var sKind1_3 = ["1手机商家","电脑及配件","厨房电器件","智能生活","个护保健","显示器","油烟机"];
for(var i = 0; i < sKind1_3.length; i++){
	addSellerSon(sKind1_3[i],"seller.html",".seller1_3");
}
//2
var sKind2_1 = ["21手机商家","电脑及配件","厨房电器件","智能生活","个护保健","显示器","油烟机"];
for(var i = 0; i < sKind2_1.length; i++){
	addSellerSon(sKind2_1[i],"seller.html",".seller2_1");
}
var sKind2_2 = ["22手机商家","电脑及配件","厨房电器件","智能生活","个护保健","显示器","油烟机"];
for(var i = 0; i < sKind2_2.length; i++){
	addSellerSon(sKind2_2[i],"seller.html",".seller2_2");
}
var sKind2_3 = ["23手机商家","电脑及配件","厨房电器件","智能生活","个护保健","显示器","油烟机"];
for(var i = 0; i < sKind2_3.length; i++){
	addSellerSon(sKind2_3[i],"seller.html",".seller2_3");
}
//3
var sKind3_1 = ["31手机商家","电脑及配件","厨房电器件","智能生活","个护保健","显示器","油烟机"];
for(var i = 0; i < sKind3_1.length; i++){
	addSellerSon(sKind3_1[i],"seller.html",".seller3_1");
}
var sKind3_2 = ["32手机商家","电脑及配件","厨房电器件","智能生活","个护保健","显示器","油烟机"];
for(var i = 0; i < sKind3_2.length; i++){
	addSellerSon(sKind3_2[i],"seller.html",".seller3_2");
}
var sKind3_3 = ["33手机商家","电脑及配件","厨房电器件","智能生活","个护保健","显示器","油烟机"];
for(var i = 0; i < sKind3_3.length; i++){
	addSellerSon(sKind3_3[i],"seller.html",".seller3_3");
}
//4
var sKind4_1 = ["41手机商家","电脑及配件","厨房电器件","智能生活","个护保健","显示器","油烟机"];
for(var i = 0; i < sKind4_1.length; i++){
	addSellerSon(sKind4_1[i],"seller.html",".seller4_1");
}
var sKind4_2 = ["42手机商家","电脑及配件","厨房电器件","智能生活","个护保健","显示器","油烟机"];
for(var i = 0; i < sKind4_2.length; i++){
	addSellerSon(sKind4_2[i],"seller.html",".seller4_2");
}
var sKind4_3 = ["43手机商家","电脑及配件","厨房电器件","智能生活","个护保健","显示器","油烟机"];
for(var i = 0; i < sKind4_3.length; i++){
	addSellerSon(sKind4_3[i],"seller.html",".seller4_3");
}
//5
var sKind5_1 = ["51手机商家","电脑及配件","厨房电器件","智能生活","个护保健","显示器","油烟机"];
for(var i = 0; i < sKind5_1.length; i++){
	addSellerSon(sKind5_1[i],"seller.html",".seller5_1");
}
var sKind5_2 = ["52手机商家","电脑及配件","厨房电器件","智能生活","个护保健","显示器","油烟机"];
for(var i = 0; i < sKind5_2.length; i++){
	addSellerSon(sKind5_2[i],"seller.html",".seller5_2");
}
var sKind5_3 = ["53手机商家","电脑及配件","厨房电器件","智能生活","个护保健","显示器","油烟机"];
for(var i = 0; i < sKind5_3.length; i++){
	addSellerSon(sKind5_3[i],"seller.html",".seller5_3");
}
//6
var sKind6_1 = ["61手机商家","电脑及配件","厨房电器件","智能生活","个护保健","显示器","油烟机"];
for(var i = 0; i < sKind6_1.length; i++){
	addSellerSon(sKind6_1[i],"seller.html",".seller6_1");
}
var sKind6_2 = ["62手机商家","电脑及配件","厨房电器件","智能生活","个护保健","显示器","油烟机"];
for(var i = 0; i < sKind6_2.length; i++){
	addSellerSon(sKind6_2[i],"seller.html",".seller6_2");
}
var sKind6_3 = ["63手机商家","电脑及配件","厨房电器件","智能生活","个护保健","显示器","油烟机"];
for(var i = 0; i < sKind6_3.length; i++){
	addSellerSon(sKind6_3[i],"seller.html",".seller6_3");
}
//7
var sKind7_1 = ["71手机商家","电脑及配件","厨房电器件","智能生活","个护保健","显示器","油烟机"];
for(var i = 0; i < sKind7_1.length; i++){
	addSellerSon(sKind7_1[i],"seller.html",".seller7_1");
}
var sKind7_2 = ["721手机商家","电脑及配件","厨房电器件","智能生活","个护保健","显示器","油烟机"];
for(var i = 0; i < sKind7_2.length; i++){
	addSellerSon(sKind7_2[i],"seller.html",".seller7_2");
}
var sKind7_3 = ["731手机商家","电脑及配件","厨房电器件","智能生活","个护保健","显示器","油烟机"];
for(var i = 0; i < sKind7_3.length; i++){
	addSellerSon(sKind7_3[i],"seller.html",".seller7_3");
}
//8
var sKind8_1 = ["81手机商家","电脑及配件","厨房电器件","智能生活","个护保健","显示器","油烟机"];
for(var i = 0; i < sKind8_1.length; i++){
	addSellerSon(sKind8_1[i],"seller.html",".seller8_1");
}
var sKind8_2 = ["82手机商家","电脑及配件","厨房电器件","智能生活","个护保健","显示器","油烟机"];
for(var i = 0; i < sKind8_2.length; i++){
	addSellerSon(sKind8_2[i],"seller.html",".seller8_2");
}
var sKind8_3 = ["83手机商家","电脑及配件","厨房电器件","智能生活","个护保健","显示器","油烟机"];
for(var i = 0; i < sKind8_3.length; i++){
	addSellerSon(sKind8_3[i],"seller.html",".seller8_3");
}
//9
var sKind9_1 = ["91手机商家","电脑及配件","厨房电器件","智能生活","个护保健","显示器","油烟机"];
for(var i = 0; i < sKind9_1.length; i++){
	addSellerSon(sKind9_1[i],"seller.html",".seller9_1");
}
var sKind9_2 = ["92手机商家","电脑及配件","厨房电器件","智能生活","个护保健","显示器","油烟机"];
for(var i = 0; i < sKind9_2.length; i++){
	addSellerSon(sKind9_2[i],"seller.html",".seller9_2");
}
var sKind9_3 = ["93手机商家","电脑及配件","厨房电器件","智能生活","个护保健","显示器","油烟机"];
for(var i = 0; i < sKind9_3.length; i++){
	addSellerSon(sKind9_3[i],"seller.html",".seller9_3");
}


function addSellerSon(sellerSonName,aUrl,className){
	var aA = document.createElement("a");
	aA.innerHTML = sellerSonName;
	aA.href = aUrl;
	
	$(className).append(aA);
}
