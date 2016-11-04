
$(".mine_menu a").click(function(){
	$(".mine_menu a").css({
		"color" : "#666666",
		"text-decoration" : "none"
	});
	$(this).css({
		"color" : "#ED7122",
		"text-decoration" : "underline"
 	});
	$(".mine_box").hide();
	$(".mine_box").eq($(this).index()).show();
});

//我的账户等级
var zhNum = 8990;
//调用账户函数
zhanghuV(zhNum);

//账户函数
var index = 0;
var pre = 0;
function zhanghuV(zhNum){
	if(zhNum<=500){
		index = 1;
		pre = (zhNum / 500) * 100;
	}else if(zhNum<=2000){
		index = 2;
		pre = ((zhNum - 500)/(2000 - 500))*100;
	}else if(zhNum<=5000){
		index = 3;
		pre = ((zhNum - 2000)/(5000 - 2000))*100;
	}else if(zhNum<=20000){
		index = 4;
		pre = ((zhNum - 5000)/(20000 - 5000))*100;
	}else if(zhNum<=50000){
		index = 5;
		pre = ((zhNum - 20000)/(50000 - 20000))*100;
	}else if(zhNum<=100000){
		index = 6;
		pre = ((zhNum - 50000)/(100000 - 50000))*100;
	}else{
		index = 7;
		pre = 100;
	}
	for(var i = 0; i < 7; i++){
		if(i < index){
			$(".zhuanghu_v").eq(i).css("background","#EC6A17");
			if(i-1 < 0){
				$(".zhuanghu_p_pre").eq(i).css("width",pre+"%");
			}else{
				$(".zhuanghu_p").eq(i-1).css("background","#EC6A17");
				$(".zhuanghu_p_pre").eq(i).css("width",pre+"%");
			}
		}
	}
}

//我的积分添加数据
var jifenNum = 4;
for(var i = 0; i < jifenNum; i++){
	var jfTr = document.createElement("tr");
	var jfTd1 = document.createElement("td");
	var jfTd2 = document.createElement("td");
	var jfTd3 = document.createElement("td");
	jfTd1.innerText = "2015-04-05 16:20:10";
	jfTd2.innerText = "+80";
	jfTd3.innerText = "消费赠送";
	jfTr.appendChild(jfTd1);
	jfTr.appendChild(jfTd2);
	jfTr.appendChild(jfTd3);
	$(".jifen_wrap table").append(jfTr);
}
