$(function(){
	//回到顶部
	$("#returnTop").on("click",function(){
		$("body").animate({scrollTop: 0},"slow");
	});
	
	//大图点击播放
	$(".videobtn").on("click",function(){
		$(".fontslider").css("display","none");
		$(".videobtn").css("display","none");
		$(".videoWrap video").trigger('play');
//		$(".videoWrap video").hover(function(){
//			$(".videobtnpause").css("display","block");
//		},function(){
//			$(".videobtnpause").css("display","none");
//		});
	});
	$(".videoWrap video").on("click",function(){
		$(".videoWrap video").trigger('pause');
		$(".videobtn").css("display","block");
	})
	
	
	//小图点击播放
	$(".boxvideobtn").on("click",function(){
		$(this).css("display","none");
		$(this).parent().children()[0].play();
		$(this).parent().children()[1].style.display = "none";
	});
	$(".boxVideo video").on("click",function(){
		$(this).parent().children()[0].pause();
		$(this).parent().children()[2].style.display = "block";
	})
});
