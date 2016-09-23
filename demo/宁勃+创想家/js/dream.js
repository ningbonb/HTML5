//Swiper初始化
var mySwiper = new Swiper('.swiper-container', {
	//方向垂直
	direction: 'vertical',
	height : window.innerHeight,
	width : window.innerWidth,
	
	onInit: function(swiper) { //Swiper2.x的初始化是onFirstInit
		swiperAnimateCache(swiper); //隐藏动画元素 
		swiperAnimate(swiper); //初始化完成开始动画
	},
	onSlideChangeEnd: function(swiper) {
		//swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
		//alert("换页");
		console.log(swiper.previousIndex);
		switch (swiper.previousIndex){
			//第二个页面
			case 0:
				//Dare to Dream
				$(".font3").css("animationPlayState","running");
				//创想改变世界
				$(".font4").css("animationPlayState","running");
				break;
			//第三个页面
			case 1:
				$(".colorbg").css("animationPlayState","running");
				$(".groupblue").css("animationPlayState","running");
				$(".groupyellow").css("animationPlayState","running");
				$(".grouppink").css("animationPlayState","running");
				$(".grouppurper").css("animationPlayState","running");
				$(".groupgreen").css("animationPlayState","running");
				$(".groupfontgreen").css("animationPlayState","running");
				$(".groupred").css("animationPlayState","running");
				$(".groupbottom").css("animationPlayState","running");
				break;
			//第四个页面
			case 2:
				$(".person1").css("animationPlayState","running");
				$(".person2").css("animationPlayState","running");
				$(".person3").css("animationPlayState","running");
				$(".person4").css("animationPlayState","running");
				$(".person5").css("animationPlayState","running");
				$(".person6").css("animationPlayState","running");
				$(".person7").css("animationPlayState","running");
				$(".person8").css("animationPlayState","running");
				$(".font5").css("animationPlayState","running");
				$(".font6").css("animationPlayState","running");
				$(".balckcenter").css("animationPlayState","running");
				$(".line li").css("animationPlayState","running");
				break;
			default:
				break;
		}
	}
})

$(function(){
	//点击头像出现轮播图
	var clickIndex=0;
	$(".personclick").each(function(){
		$(this).on("click",function(){
			clickIndex = $(this).index() - 2;
			$(".personclick").css("display","none");
			$(".personWrap").css("display","block");
			$(".personA").css("display","none");
			$(".personA:nth-child("+ clickIndex +")").css("display","block");
			console.log($(this).index() - 2);
		});
	});

	//下一张
	$(".presonnext").on("click",function(){
		clickIndex++;
		if(clickIndex > 8)clickIndex=1;
		$(".personA").css("display","none");
		$(".personA:nth-child("+ clickIndex +")").css("display","block");
		console.log(clickIndex);
	});
	//上一张
	$(".presonpre").on("click",function(){
		clickIndex--;
		if(clickIndex < 1)clickIndex=8;
		$(".personA").css("display","none");
		$(".personA:nth-child("+ clickIndex +")").css("display","block");
		console.log(clickIndex);
	});
	//关闭轮播图
	$(".personclose").on("click",function(){
		$(".personclick").css("display","block");
		$(".personWrap").css("display","none");
	});
	
	//背景音乐关闭
	$(".musicon").on("click",function(){
		var audioEle = $("audio")[0];
		audioEle.pause();
		$(".musicon").css("display","none");
		$(".musicoff").css("display","block");
	});
	//背景音乐开启
	$(".musicoff").on("click",function(){
		var audioEle = $("audio")[0];
		audioEle.play();
		$(".musicon").css("display","block");
		$(".musicoff").css("display","none");
	});
});

//停止动画
//$(".slide1").stop();
