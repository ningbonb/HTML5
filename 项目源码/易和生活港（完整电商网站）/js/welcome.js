//欢迎页
$(function(){
	//选择城市
	$(".welcome_search_box").click(function(){
		$("#welcome_add_choose").show();
	});
	//点击选择城市
	$("#welcome_add_city").click(function(){
		$("#welcome_add").html($(this).html());
		$("#welcome_add_choose").hide();
	});
	$(".welcome_add_name span").click(function(){
		$("#welcome_add").html($(this).html());
		$("#welcome_add_choose").hide();
	});
});
