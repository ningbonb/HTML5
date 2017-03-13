$(function() {
	//预加载图片
	var loadingImgs = ["img/add.png", "img/addbutton.png", "img/again.png", "img/background.jpg", "img/car.png", "img/close.png", "img/cloud1.png", "img/cloud2.png", "img/font1.png", "img/font2.png", "img/font3.png", "img/gamecar.png", "img/min.png", "img/rule.png", "img/share.png", "img/shareimg.png", "img/start.png", "img/trybutton.png"];
	//记录完成的张数
	var loadingNum = 0;
	//依次创建图片
	for(var i = 0; i < loadingImgs.length; i++) {
		var img = new Image();
		img.src = loadingImgs[i];
		img.onload = function() {
			//张数加1
			loadingNum++;
			//计算百分比
			var precent = Math.floor(loadingNum / loadingImgs.length * 100) + "%";
			//输出百分比
			$("#loading").html(precent);
			//判断加载是否完成
			if(loadingNum == loadingImgs.length) {
				//加载页面隐藏
				$("#loading-wrap").hide();
				//首页出现
				$("#page1").show();
			}
		}
	} //图片创建结束

	//点击开始按钮
	$("#start").click(function() {
		//首页隐藏
		$("#page1").hide();
		//游戏界面出现
		$("#page2").show();
		//游戏说明界面出现
		$("#page3").show();
	});

	//点击关闭按钮
	$(".close").click(function() {
		//游戏界面隐藏
		$("#page3").hide();
	});
	//点击屏幕关闭游戏说明
	$("#page3").click(function() {
		//游戏界面隐藏
		$("#page3").hide();
	});

	//游戏界面
	//汽车拖拽
	var isdrag = false;
	var NowLeft, disX;
	var NowTop, disY;
	var oDiv2 = document.getElementById("gamecar");
	var bug1 = document.getElementById("bug1");
	var bug2 = document.getElementById("bug2");
	var bug3 = document.getElementById("bug3");
	var bug4 = document.getElementById("bug4");
	var page2 = document.getElementById("page2");
	oDiv2.addEventListener('touchstart', thismousedown);
	document.addEventListener('touchend', thismouseup);
	document.addEventListener('touchmove', thismousemove);

	var ismove = false;
	function thismousedown(e) {
		//障碍物移动
		bugMove();
		//碰撞检测
		crashFn();
		isdrag = true;
		NowLeft = oDiv2.offsetLeft;
		NowTop = oDiv2.offsetTop;
		disX = e.touches[0].pageX;
		disY = e.touches[0].pageY;
		e.preventDefault();
	}

	function thismousemove(e) {
		if(isdrag) {
			oDiv2.style.left = NowLeft + e.touches[0].pageX - disX + 'px';
			oDiv2.style.top = NowTop + e.touches[0].pageY - disY + 'px';
			return false;
		}
	}

	function thismouseup() {
		isdrag = false;
		return false;
	};
	
	//碰撞检测定时器
	var timer2;
	function crashFn(){
		timer2 = setInterval(function(){
			//碰撞检测
			if(oDiv2.offsetLeft <= 0 || oDiv2.offsetLeft + oDiv2.offsetWidth >= page2.offsetWidth || oDiv2.offsetTop <= 0 || oDiv2.offsetTop + oDiv2.offsetHeight >= page2.offsetHeight){
				gameover();
			}
			if(crash(oDiv2,bug1)||crash(oDiv2,bug2)||crash(oDiv2,bug3)||crash(oDiv2,bug4)){
				gameover();
			}
		},10);
	}
	
	
	//碰撞函数
	function crash(obj1, obj2) {
		//碰撞检测
		var L1 = obj1.offsetLeft;
		var R1 = L1 + obj1.offsetWidth;
		var T1 = obj1.offsetTop;
		var B1 = T1 + obj1.offsetHeight;

		var L2 = obj2.offsetLeft;
		var R2 = L2 + obj2.offsetWidth;
		var T2 = obj2.offsetTop;
		var B2 = T2 + obj2.offsetHeight;

		//没有碰撞的时候
		if(R1 < L2 || B1 < T2 || L1 > R2 || T1 > B2) {
			//碰不到
			return false;
		} else {
			return true;
		}
	}
	
	//游戏结束
	function gameover(){
		$("#page2").hide();
		$("#page4").show();
		$("#end_min").html(Math.floor(getTime/1000));
		clearInterval(timer);
		clearInterval(timer2);
		$("#bug1").css({
			"top": "22%",
			"left": "55%"
		});
		$("#bug2").css({
			"top": "40%",
			"left": "10%"
		});
		$("#bug3").css({
			"top": "41%",
			"left": "75%"
		});
		$("#bug4").css({
			"top": "61%",
			"left": "31%"
		});
		
		//得分排行
		uploadScore(Math.floor(getTime/1000));
		//查询数据库通过ajax请求
		//查询排行接口，不需参数，查询默认前五个
		var rankUrl = 'http://ningbonuc.applinzi.com/wx_car/php/rank.php';
		$.get(rankUrl,function(data){
			//console.log(data);
			//json解析
			var obj = JSON.parse(data);
			var users = obj["data"];
		});
		///更新分数
		function uploadScore(getTime){
			//1.查询openid
			var openidUrl = "http://ningbonuc.applinzi.com/wx_car/php/get_openid.php";
			$.get(openidUrl,function(data){
				var openid = data;
				//console.log("请求完成");
				//console.log(data);
				//更新分数：两个参数：用户的openid，用户的最新分数
				//http://ningbonuc.applinzi.com/wx_car/php/update_score.php
				var upUrl="http://ningbonuc.applinzi.com/wx_car/php/update_score.php";
				$.ajax({
					url:upUrl,
					data:{
						openid:openid,
						score:getTime
					},
					success:function(data){
						//console.log(data);
						//{"bestScore":"8","code":0}
						//获取最好成绩，可以通过code码判断日志信息
						var bestScore = JSON.parse(data)["bestScore"];
						$("#end_min").html(bestScore);
	
						//查询最好成绩在所有玩家的一个排名
						selectSelfRank(bestScore);
					}
				});
			});
		}//uploadScore结束
		//查询成绩排名
		function selectSelfRank(bestScore){
			var rankUrl = "http://ningbonuc.applinzi.com/wx_car/php/rank_set.php?score="+bestScore;
			$.get(rankUrl,function(data){
				//console.log(data);
				//{"rank":1,"code":0}
				//数据解析
				var randObj = JSON.parse(data);
				var rank = randObj["rank"];
				$("#rank").html(rank);
			});
		}//查询成绩排名结束
		/*
		//网络请求
		//http://ningbonuc.applinzi.com/wx_car/php/getJS_SDK_%20config.php
		var urls = "http://ningbonuc.applinzi.com/wx_car/php/getJS_SDK_%20config.php"
		$.ajax({
			url: urls,
			data: {
				url: window.location.href
			},
			success: function(data) {
				//alert(data);
				var obj = JSON.parse(data);
				//alert(obj);
				cofig(obj);
			}
		});
	
		function cofig(obj) {
			wx.config({
				debug: false,
				appId: obj.appId,
				timestamp: obj.timestamp,
				nonceStr: obj.nonceStr,
				signature: obj.signature,
				jsApiList: [
					// 所有要调用的 API 都要加到这个列表中
					"onMenuShareTimeline",
					"onMenuShareAppMessage",
					"chooseImage",//相册
					"previewImage",//预览图片接口
					"uploadImage",//上传图片
					"downloadImage",//下载
					"startRecord",//开始录音
					"stopRecord",//停止录音
					"playVoice",//播放录音
					"getNetworkType",//获取网络状态，主动调用
				]
			});
			//// config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
			wx.ready(function() {
				// 在这里调用 API
				wx.onMenuShareTimeline({
					title: '这是一个很正经的游戏', // 分享标题
					link: 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxb56f1725c4f779a9&redirect_uri=http://ningbonuc.applinzi.com/wx_car/php/auth.php&response_type=code&scope=snsapi_userinfo&state=canshu#wechat_redirect', // 分享链接
					imgUrl: 'http://ningbonuc.applinzi.com/jssdk/img/1-yasuo.jpg', // 分享图标
					success: function() {
						// 用户确认分享后执行的回调函数
						alert("成功");
					},
					cancel: function() {
						// 用户取消分享后执行的回调函数
						alert("取消");
	
					}
				});
	
				wx.onMenuShareAppMessage({
					title: '考验反应能力的游戏', // 分享标题
					desc: '考验预判和反应力，你能坚持几分钟', // 分享描述
					link: 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxb56f1725c4f779a9&redirect_uri=http://ningbonuc.applinzi.com/wx_car/php/auth.php&response_type=code&scope=snsapi_userinfo&state=canshu#wechat_redirect', // 分享链接
					imgUrl: 'http://ningbonuc.applinzi.com/jssdk/img/1-yasuo.jpg', // 分享图标
					type: '', // 分享类型,music、video或link，不填默认为link
					dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
					success: function() {
						// 用户确认分享后执行的回调函数
					},
					cancel: function() {
						// 用户取消分享后执行的回调函数
					}
				});
				//网络状态
				wx.getNetworkType({
					success: function (res) {
						var networkType = res.networkType; // 返回网络类型2g，3g，4g，wifi
					}
				});
	
			});
		}
		*/
	}
	
	//游戏结束页面
	//分享页面
	$("#share").click(function(){
		$("#page5").show();
	});
	//点击屏幕关闭分享页面出现抽奖
	$("#page5").click(function() {
		//游戏界面隐藏
		$("#page4").hide();
		$("#page5").hide();
		$("#page7").show();
	});
	//重玩一次
	$("#again").click(function(){
		$("#page4").hide();
		$("#page2").show();
		getTime = 0;
		$("#min").html("0");
		$("#sed").html("0");
		$("#gamecar").css({
			"top": "40%",
			"left": "45%"
		});
	});
	
	//关注按钮
	$("#addbutton").click(function(){
		$("#page6").show();
	});
	//点击屏幕关闭关注页面
	$("#page6").click(function(){
		$("#page6").hide();
	});
	
	//我要试驾按钮
	$("#trybutton").click(function(){
		$("#page7").hide();
		$("#page4").show();
	});
	//障碍物移动
	var timer;
	window.getTime = 0;
	var speedX = 0.3;
	var speedY = 0.3;
	var speedX2 = -0.4;
	var speedY2 = -0.3;
	var speedX3 = 0.4;
	var speedY3 = -0.3;
	var speedX4 = -0.3;
	var speedY4 = 0.3;
	function bugMove(){
		
		clearInterval(timer);
		timer = setInterval(function(){
			bug1.style.left = parseFloat(bug1.style.left) + speedX + "%";
			bug1.style.top = parseFloat(bug1.style.top) + speedY + "%";
			if(parseFloat(bug1.style.left)<=0 || parseFloat(bug1.style.left)+parseFloat(bug1.style.width) >= 100){
				speedX = -speedX;
			}
			if(parseFloat(bug1.style.top)<=0 || parseFloat(bug1.style.top)+parseFloat(bug1.style.height) >= 100){
				speedY = -speedY;
			}
			
			bug2.style.left = parseFloat(bug2.style.left) + speedX2 + "%";
			bug2.style.top = parseFloat(bug2.style.top) + speedY2 + "%";
			if(parseFloat(bug2.style.left)<=0 || parseFloat(bug2.style.left)+parseFloat(bug2.style.width) >= 100){
				speedX2 = -speedX2;
			}
			if(parseFloat(bug2.style.top)<=0 || parseFloat(bug2.style.top)+parseFloat(bug2.style.height) >= 100){
				speedY2 = -speedY2;
			}
			
			bug3.style.left = parseFloat(bug3.style.left) + speedX3 + "%";
			bug3.style.top = parseFloat(bug3.style.top) + speedY3 + "%";
			if(parseFloat(bug3.style.left)<=0 || parseFloat(bug3.style.left)+parseFloat(bug3.style.width) >= 100){
				speedX3 = -speedX3;
			}
			if(parseFloat(bug3.style.top)<=0 || parseFloat(bug3.style.top)+parseFloat(bug3.style.height) >= 100){
				speedY3 = -speedY3;
			}
			
			bug4.style.left = parseFloat(bug4.style.left) + speedX4 + "%";
			bug4.style.top = parseFloat(bug4.style.top) + speedY4 + "%";
			if(parseFloat(bug4.style.left)<=0 || parseFloat(bug4.style.left)+parseFloat(bug4.style.width) >= 100){
				speedX4 = -speedX4;
			}
			if(parseFloat(bug4.style.top)<=0 || parseFloat(bug4.style.top)+parseFloat(bug4.style.height) >= 100){
				speedY4 = -speedY4;
			}
			getTime += 16;
			$("#min").html(Math.floor(getTime/1000));
			$("#sed").html(Math.floor(getTime%1000/16.7));
		},16);
	}
		
}); //jQuery结束