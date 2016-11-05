//头部移动端菜单点击
$(".min_logo").click(function(){
	$(".topMenu_other").slideDown();
	$(".menu_close").click(function(){
		$(".topMenu_other").slideUp();
	});
});
//隐藏分类
$(".home_classify_button").mouseenter(function(){
	$(".head_select_box").show();
});
$(".head_select_box").mouseleave(function(){
	$(".head_select_box").hide();
});
$(".home_classify_button").click(function(){
	$(".head_select_box").show();
});
$(".logo_search_box").click(function(){
	$(".head_select_box").hide();
});
$(".top_wrap").click(function(){
	$(".head_select_box").hide();
});
//遍历
$(".head_select_menu ul li").mouseenter(function(){
	var index = $(this).index();
	$(".select_about").hide();
	$(".select_about").eq(index).show();
});
$(".select_about span").click(function(){
	$(".head_select_box").hide();
});

//轮播图图片
AddImg("joinUs.html","../img/1473385158758.jpg",".img1");
AddImg("joinUs.html","../img/1473674276387.jpg",".img2");
AddImg("joinUs.html","../img/1474092774053.jpg",".img3");
AddImg("joinUs.html","../img/1475025093576.jpg",".img4");
AddImg("joinUs.html","../img/1477477384415.jpg",".img5");

//下拉框调用
//var menuKindNum = 9;
//var kind= ["餐饮","服饰","娱乐","家具","零售","日化","建材","酒店","旅游"];
//for(var i = 0; i < menuKindNum; i++){
//	addMenuBox(kind[i]);
//}
//下拉框函数
//function addMenuBox(kind){
//	var aLi = document.createElement("li");
//	aLi.innerHTML = kind;
//	
//	var aSpan = document.createElement("span");
//	aSpan.innerHTML = ">";
//	
//	aLi.appendChild(aSpan);
//	console.log(aLi);
//	$(".head_select_menu ul").append(aLi);
//}



//子菜单调用
//餐饮
var son1 = ["火锅","自助餐","小吃快餐","日韩料理","烧烤烤肉","东北菜"];
for(var j = 0; j < son1.length; j++){
	menuSon("seller.html",son1[j],".menu_son1");
}
//服饰
var son2 = ["男装","凉鞋拖鞋","潮流女包","精品男包","功能箱包","其他服装","女装"];
for(var j = 0; j < son2.length; j++){
	menuSon("seller.html",son2[j],".menu_son2");
}
//娱乐
var son3 = ["桌游/电玩","运动健身","足疗按摩","洗浴汗蒸","温泉","DIY手工","密室逃脱"];
for(var j = 0; j < son3.length; j++){
	menuSon("seller.html",son3[j],".menu_son3");
}
//家具
var son4 = ["成套家具","床类","柜类","床垫","沙发","桌类","椅凳","架箱类"];
for(var j = 0; j < son4.length; j++){
	menuSon("seller.html",son4[j],".menu_son4");
}
//零售
var son5 = ["超市","水果生鲜","日用品","百货","配件","其他产品"];
for(var j = 0; j < son5.length; j++){
	menuSon("seller.html",son5[j],".menu_son5");
}
//日化
var son6 = ["面部护理","洗发护发","身体护理","口腔护理","女性护理","香水彩妆"];
for(var j = 0; j < son6.length; j++){
	menuSon("seller.html",son6[j],".menu_son6");
}
//建材
var son7 = ["基础建材","卫浴洁具","厨卫电器","卫浴五全","地板地暖","灯具开关"];
for(var j = 0; j < son7.length; j++){
	menuSon("seller.html",son7[j],".menu_son7");
}
//酒店
var son8 = ["经济型酒店","豪华酒店","主题酒店","度假酒店","公寓型酒店","青年旅社"];
for(var j = 0; j < son8.length; j++){
	menuSon("seller.html",son8[j],".menu_son8");
}
//旅游
var son9 = ["温泉","景点","主题公园","水上公园","动植物园","海洋馆","展览馆","游船"];
for(var j = 0; j < son9.length; j++){
	menuSon("seller.html",son9[j],".menu_son9");
}

//搜索下热门推荐
menuSon("one.html","烤肉",".logo_search_box4");
menuSon("one.html","麻辣香锅",".logo_search_box4");
menuSon("one.html","美发",".logo_search_box4");


//span/a函数
//<span><a href="seller.html">火锅</a></span>
function menuSon(aUrl,kindSonName,className){
	var aSpan = document.createElement("span");
	var aA = document.createElement("a");
	aA.href = aUrl;
	aA.innerHTML = kindSonName;
	aSpan.appendChild(aA);
	$(className).append(aSpan);
}

//<ul>
//	<li>餐饮<span>></span></li>
//	<li>服饰<span>></span></li>
//	<li>娱乐<span>></span></li>
//	<li>家具<span>></span></li>
//	<li>零售<span>></span></li>
//	<li>日化<span>></span></li>
//	<li>建材<span>></span></li>
//	<li>酒店<span>></span></li>
//	<li>旅游<span>></span></li>
//</ul>


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

//添加图片
//"a链接" "img链接" ".classname"
//AddImg("seller.html","../img/1474421802356.jpg",".canyin_img");
function AddImg(AUrl,ImgUrl,ParName){
	var EleA = document.createElement("a");
	EleA.href = AUrl;
	var EleImg = document.createElement("img");
	EleImg.src = ImgUrl;
	EleA.appendChild(EleImg)
	$(ParName).append(EleA);
}

//商家预览块函数
//addBoxBig("../img/jiancai1.png","commodity_about.html","标题","maomoa","3922120","中北大学",".canyinhot1");
function addBoxBig(ImgUrl,AImgUrl,title,name,phone,add,boxName){
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
	Div.setAttribute("class","home_small_box");
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