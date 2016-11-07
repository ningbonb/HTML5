
//鼠标移入
$(function(){
	var headNavList = $("#headNav li span");

	//鼠标点击
	headNavList.click(function(){
		headNavList.each(function(){
			$(this).prop("class","");
		});
		$(this).prop("class","navBorderOne");
	});
	
	//点击出现小屏幕导航
	$(".navbtn").click(function(){
		$("nav").slideToggle("slow");
	});
	
	//footer分享按钮
	$("#email").hover(function(){
		$(this).attr("src","img/emailcolor.png")
		},
		function(){
			$(this).attr("src","img/email.png");
	});
	
	$("#twitter").hover(function(){
		$(this).attr("src","img/twittercolor.png")
		},
		function(){
			$(this).attr("src","img/twitter.png");
	});
	
	$("#youtube").hover(function(){
		$(this).attr("src","img/youtubecolor.png")
		},
		function(){
			$(this).attr("src","img/youtube.png");
	});
	
	$("#linkedln").hover(function(){
		$(this).attr("src","img/linkdlncolor.png")
		},
		function(){
			$(this).attr("src","img/linkedln.png");
	});
	
	$("#facebook").hover(function(){
		$(this).attr("src","img/facebookcolor.png")
		},
		function(){
			$(this).attr("src","img/facebook.png");
	});
	
	
	//主页content hover时间
	$(".homeContentBox2").hover(function(){
		$("#homeimg2").attr("src","img/home2.jpg");
	},function(){
		$("#homeimg2").attr("src","img/home2gray.jpg");
	});
	
	$(".homeContentBox1").hover(function(){
		$("#homeimg1").attr("src","img/home1.jpg");
	},function(){
		$("#homeimg1").attr("src","img/home1gray.jpg");
	});
	
	$(".homeContentBox3").hover(function(){
		$("#homeimg3").attr("src","img/home3.jpg");
	},function(){
		$("#homeimg3").attr("src","img/home3gray.jpg");
	});
	
});


