//元素加载完成(不需要等待资源加载完成, 如果需要检测资源加载完成, 使用window.onload)
$(function(){
	//预加载图片
	var loadingImgs = ["img/activity_rule.png", "img/bg.jpg", "img/bg2.png", "img/close.png", "img/p1_btns_wrap.png", "img/p1_first.png", "img/p1_from.png", "img/p1_second.png", "img/p1_sub.png", "img/p1_third.png", "img/p2_kuang.png", "img/p2_qian.jpg", "img/p2_scoring.png", "img/p2_shou.png", "img/p2_txt1.png", "img/p2_txt2.png", "img/p2_txt3.png", "img/p2_zhuan.png", "img/p3_acquire.png", "img/p3_again.png", "img/p3_bg.jpg", "img/p3_share.png", "img/p3_share_btn.png", "img/prize.png", "img/qian.png", "img/ranking.png", "img/ranking_bg.png", "img/shiyong.png", "img/shizhong.png", "img/shou.png", "img/start_game.png", "img/tiaozhan.png", "img/yingqu.png"];
	//记录完成的张数
	var loadingNum = 0;
	//依次创建图片
	for(var i = 0; i < loadingImgs.length; i++) {
		//var img = document.createElement("img");
		var img = new Image();
		img.src = loadingImgs[i];
		img.onload = function() {
			//张数加1
			loadingNum++;
			//计算百分比
			var precent = Math.floor(loadingNum / loadingImgs.length * 100) + "%";
			//显示百分比
			$("#loading").html(precent);
			//判断是否加载完成
			if(loadingNum == loadingImgs.length) {
				$("#loading-wrap").hide();
				//进入第一页(默认隐藏)
				$("#page1").show();
			}
		}
	}//图片创建结束

	//点击开始按钮
	$("#start").click(function(){
		$("#user-alert").slideDown();
	});
	//所有弹出层的关闭按钮
	$(".close").click(function(){
		$(".alert-wrap").slideUp();
	});

	//点击数钱榜
	$(".rank1").click(function(){
		//查询数据库通过ajax请求
		//查询排行接口，不需参数，查询默认前五个
		var rankUrl = 'http://ningbonuc.applinzi.com/countMoney2/php/rank.php';
		$.get(rankUrl,function(data){
			//console.log(data);
			//json解析
			var obj = JSON.parse(data);
			var users = obj["data"];
			//console.log(users);
			//console.log(typeof user);
			for(var i = 0; i < users.length; i++){
				var user = users[i];
				//头像
				$(".photo").eq(i).prop("src",user['headimgurl']);
				//姓名
				$(".name").eq(i).html(user.nickname);

				//得分
				$(".score").eq(i).html(user.score);
			}
			$("#rank-alert").show();
		});
		//$("#rank-alert").show();
	});

	//活动规则
	$(".rule").click(function(){
		$("#rule-alert").fadeIn();
	});

	//活动奖品
	$(".prize").click(function(){
		$("#prize-alert").show();
	});

	//使用说明
	$(".explain").click(function(){
		$("#explain-alert").show();
	});

	//提交信息开始游戏
	$("#user-form>input[type=button]").click(function(){
		$("#user-alert").hide();
		$("#page1").hide();
		//页面2显示
		$("#page2").show();
		//加载页面2js
		enterP2();
	});

	//页面2的js
	function enterP2(){
		//记录文字图片数组读的下标
		var index = 0;
		var textImgs = ["img/p2_txt1.png","img/p2_txt2.png","img/p2_txt3.png"];
		var textTimer = setInterval(function(){
			index++;
			if(index == 4) index = 0;
			$("#text").prop("src",textImgs[index]);
		},1500);

		//禁止掉页面的上下滚动
		touch.on("#page2","touchstart",function(event){
			event.preventDefault();
		});
		
		//通过定时器的值判断游戏是否开始
		var countDownTime;//undefined没有开始
		//开始触摸
		touch.on("#money-wrap", "touchstart", function(event) {
			//倒计时计时
			countDownTimeFn();
		});
		window.countDownTimeFn = function(){
					//没有开始, 可以创建计时器,之后在点击定时器不会被创建了
			if(countDownTime == undefined) {
					//游戏的总时间
					var allTime = 60;
					countDownTime = setInterval(function() {
					allTime--;
					$(".time-clock").html(allTime);
					//判断游戏是否结束
					if (allTime == 0) {
						//游戏结束
						clearInterval(countDownTime);
						//保证下次判断可以进来
						countDownTime = undefined;
						//进入第三页
						$("#page2").hide();
						$("#page3").show();
						//页面3布局，并且传入总的钱数
						enterPage3(window.moneyCount);
					}
				}, 1000);
			}
		}
		//记录数钱的数量
		window.moneyCount = 0;
		//向上滑动
		touch.on("#money-wrap", "swipeup", function () {
			//修改数字
			moneyCount++;
			var score_str = ("00" + moneyCount).substr(-3);
			$(".time-num").eq(0).html(score_str[0]);
			$(".time-num").eq(1).html(score_str[1]);
			$(".time-num").eq(2).html(score_str[2]);
			
			//钱向上飞
			var moneyImg = $('<img src="img/p2_qian.jpg" id="money">');
			//插入到以前地方
			$("#money-wrap").append(moneyImg);
			//起飞
			moneyImg.addClass("fly");
			//钱飞走后移除
			 setTimeout(function () {
			 	moneyImg.remove();
			 }, 1000);
		});


	}//页面2js函数结束

	//页面3
	function enterPage3(moneyCount) {
		//***获取到用户名，id等，把上传得分
		//1.更新玩家数据库分数信息（只保留最高分）查询自己的历史最高分：openid查询出
		//2.查出当前该成绩在所有用户里的排名：通过自己的score
		uploadScore(moneyCount);
		//显示最终成绩
		$("#result-money").html("￥" + moneyCount + "00");

		//点击再来一次
		$("#again").click(function() {
			$("#page3").hide();
			$("#page2").show();
			//enterPage2();
			$(".time-num").html("0");
			$(".time-clock").html("60");
			//重新计时
			window.countDownTimeFn();
			window.moneyCount = 0;

		});
		//点击分享
		$("#share").click(function() {
			$("#share-alert").show();
		});
		//隐藏分享
		$("#share-alert").click(function() {
			$(this).hide();
		});
	}//页面3结束

	//更新分数
	function uploadScore(moneyCount){
		//1.查询openid
		var openidUrl = "http://ningbonuc.applinzi.com/countMoney2/php/get_openid.php";
		$.get(openidUrl,function(data){
			var openid = data;
			//console.log("请求完成");
			//console.log(data);
			//更新分数：两个参数：用户的openid，用户的最新分数
			//http://ningbonuc.applinzi.com/countMoney2/php/update_score.php
			var upUrl="http://ningbonuc.applinzi.com/countMoney2/php/update_score.php";
			$.ajax({
				url:upUrl,
				data:{
					openid:openid,
					score:moneyCount
				},
				success:function(data){
					//console.log(data);
					//{"bestScore":"8","code":0}
					//获取最好成绩，可以通过code码判断日志信息
					var bestScore = JSON.parse(data)["bestScore"];
					$("#best-wrap").html("我的辉煌战绩：￥" + bestScore+"00，当前的排名：");

					//查询最好成绩在所有玩家的一个排名
					selectSelfRank(bestScore);
				}
			});
		});
	}//uploadScore结束


	//查询成绩排名
	function selectSelfRank(bestScore){
		var rankUrl = "http://ningbonuc.applinzi.com/countMoney2/php/rank_set.php?score="+bestScore;
		$.get(rankUrl,function(data){
			//console.log(data);
			//{"rank":1,"code":0}
			//数据解析
			var randObj = JSON.parse(data);
			var rank = randObj["rank"];
			$("#best-wrap").html("我的辉煌战绩：￥" + bestScore+"00，当前的排名："+rank);
		});
	}//查询成绩排名结束

	//网络请求
	//http://ningbonuc.applinzi.com/countMoney2/php/getJS_SDK_%20config.php
	var urls = "http://ningbonuc.applinzi.com/countMoney2/php/getJS_SDK_%20config.php"
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
				link: 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxb56f1725c4f779a9&redirect_uri=http://ningbonuc.applinzi.com/countMoney2/php/auth.php&response_type=code&scope=snsapi_userinfo&state=canshu#wechat_redirect', // 分享链接
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
				title: '这是一个很正经的游戏', // 分享标题
				desc: '一个很好玩的有戏', // 分享描述
				link: 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxb56f1725c4f779a9&redirect_uri=http://ningbonuc.applinzi.com/countMoney2/php/auth.php&response_type=code&scope=snsapi_userinfo&state=canshu#wechat_redirect', // 分享链接
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

		/*
		//通过事件触发
		var choosIMG = document.getElementById("choosIMG");
		choosIMG.addEventListener("touchstart", function() {
			wx.chooseImage({
				count: 4, // 默认9
				sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
				sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
				success: function(res) {
					var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
					var show = document.getElementById("show");
					show.src = localIds[0];
					upload(localIds[0]);
				}
			});
		});
	var previewImage = document.getElementById("previewImage");
	previewImage.addEventListener("touchstart",function(){
		wx.previewImage({
		   current: 'http://zhongbeidx.applinzi.com/JSSDKNew/img/IMG_1282.JPG', // 当前显示图片的http链接
		   urls: ["http://zhongbeidx.applinzi.com/JSSDKNew/img/IMG_1282.JPG","http://zhongbeidx.applinzi.com/JSSDKNew/img/IMG_1284.JPG"] // 需要预览的图片http链接列表
		});
	});
	//上传
	function upload(localId){
		wx.uploadImage({
	    localId: localId, // 需要上传的图片的本地ID，由chooseImage接口获得
	    isShowProgressTips: 1, // 默认为1，显示进度提示
	    success: function (res) {
	        var serverId = res.serverId; // 返回图片的服务器端ID
	        //alert(serverId);
	        download(serverId);
	    }
		});
	}
	//下载
	function download(serverId){
		wx.downloadImage({
			serverId: serverId, // 需要下载的图片的服务器端ID，由uploadImage接口获得
		  isShowProgressTips: 1, // 默认为1，显示进度提示
		  success: function (res) {
		   	var localId = res.localId; // 返回图片下载后的本地ID
		   	//alert()
		   }
		});
		
	}
	
	//开始录音
	var startRecord = document.getElementById("startRecord");
	startRecord.addEventListener("touchstart",function(){
		wx.startRecord();
	});
	
	//结束
	var stopRecord = document.getElementById("stopRecord");
	var localId;//保存录音结束id
	stopRecord.addEventListener("touchstart",function(){
		wx.stopRecord({
			success: function (res) {
		  		localId = res.localId;
		   }
		});
	});
	
	//播放
	var playVoice = document.getElementById("playVoice");
	playVoice.addEventListener("touchstart",function(){
		wx.playVoice({
			localId: localId // 需要播放的音频的本地ID，由stopRecord接口获得
		});
	});
		
	*/
	}//配置函数结束

});//jQery结束