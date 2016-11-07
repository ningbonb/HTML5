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

var tjNum = 13;
for(var i = 0; i < tjNum; i++){
	addBox_tj("one.html","../img/commodity1.png","自家礼包送亲人，送朋友的不二选择，自家礼包打着销售","11.8","20.0",".commodity_box_wrap");
}

//轮播图添加数据

addBox_tj("one.html","../img/commodity1.png","自家礼包送亲人，送朋友的不二选择，自家礼包打着销售","11.8","20.0",".swiper-slide2");


//今日特价盒子
function addBox_tj(Aurl,ImgUrl,part,prize1,prize2,className){
	var Div = document.createElement("div");
	Div.setAttribute("class","commodity_box_one");
	var aA = document.createElement("a");
	aA.href = Aurl;
	var aImg = document.createElement("img");
	aImg.src = ImgUrl;
	aA.appendChild(aImg);
	Div.appendChild(aA);
	
	var aP = document.createElement("p");
	var bA = document.createElement("a");
	bA.href = Aurl;
	bA.innerHTML = part;
	aP.appendChild(bA);
	Div.appendChild(aP);
	
	var aDiv = document.createElement("div");
	aDiv.setAttribute("class","commodity_price");
	aDiv.innerHTML = "￥"+prize1;
	var aDel = document.createElement("del");
	aDel.innerHTML = "￥"+prize2;
	aDiv.appendChild(aDel);
	Div.appendChild(aDiv);
	$(className).append(Div);
}