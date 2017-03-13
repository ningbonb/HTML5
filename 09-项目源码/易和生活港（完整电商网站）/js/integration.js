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


var jfNum = 10;
for(var i = 0; i < jfNum; i++){
	addJfBox("one.html","../img/commodity1.png","自家礼包送亲人，送朋友的不二选择，自家礼包打着销售","50","20.0",".commodity_box_wrap");
}


//积分盒子
function addJfBox(Aurl,ImgUrl,part,inte,prize,className){
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
	aDiv.innerHTML = "积分:"+ inte;
	var aSpan = document.createElement("span");
	aSpan.setAttribute("class","commodity_price_right");
	aSpan.innerHTML = "价值：￥" + prize;
	aDiv.appendChild(aSpan);
	Div.appendChild(aDiv);
	
	var bDiv = document.createElement("div");
	bDiv.setAttribute("class","commodity_box_one_button");
	var cA = document.createElement("a");
	cA.href = "###";
	var bImg = document.createElement("img");
	bImg.src = "../img/button1.png";
	cA.appendChild(bImg);
	bDiv.appendChild(cA);
	Div.appendChild(bDiv);
	
	$(className).append(Div);
}


//			<div class="commodity_box_wrap">
//				<div class="commodity_box_one">
//					<a href="one.html">
//						<img src="../img/commodity1.png" alt="" />
//					</a>
//					<p><a href="one.html">自家礼包送亲人，送朋友的不二选择，自家礼包打着销售</a></p>
//					<div class="commodity_price">
//						积分：50<span class="commodity_price_right">价值：￥20.0</span>
//					</div>
//					<div class="commodity_box_one_button">
//						<a href="###">
//							<img src="../img/button1.png" alt="" />
//						</a>
//					</div>
//				</div>


//打开添加地址
$(".commodity_box_one_button a").click(function(){
	$(".integra_add_wrap").show();
	$(".intergra_button a").click(function(){
		$(".integra_add_wrap").hide();
	});
});