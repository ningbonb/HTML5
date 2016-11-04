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

//精选商家
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