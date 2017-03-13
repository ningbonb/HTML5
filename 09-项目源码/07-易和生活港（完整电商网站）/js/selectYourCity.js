$(function(){
	//选择地址
	$(".select_name span").click(function(){
		$(".select_now span").html($(this).html());
		$(".topMenu_choose a").html($(this).children().html());
		window.open("home.html","_self");
	});
})
