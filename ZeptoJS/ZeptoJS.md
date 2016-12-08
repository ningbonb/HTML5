# ZeptoJS #

Zepto是一个轻量级的针对现代高级浏览器的JavaScript库，它与jQuery有着类似的api。

# Zepto01.html #

- 当页面加载完成后调用
    
        Zepto(function($){
    		console.log("Ready to Zepto");
    	});
    
- 获取所有标签

	    $('p').css("background-color","red");
    
- 动态创建标签

    	var html = "<p>Hello</p>";
    	$(".content").append(html);
    	$("<p>Hello</p>").appendTo(".content");
    	$("<p />",{text:"Hello",id:"greeting",css:{color:'darkblue'}}).appendTo(".content");	

- 生成驼峰式命名

	    Zepto(function($){
    		$(".name").find("p").each(function(){
    			$(this).text($.camelCase($(this).text()));
    		});
    	});

- 检查父节点是否包含给定的dom节点

	    console.log($.contains($('.name')[0],$(".part")[0]));
    
	
- 遍历所有元素

	    $.each(['a','b','c'],function(index,value){
    		console.log('item %d is: %s',index,value);
    		var html = 'item '+index+' is: '+value+'<br>';
    		$(".item").append(html);
    	});
    	var hash = {name:'zepto.js',size:'micro'};
    	$.each(hash,function(key,value){
    		var html = 'key: '+key+' value: '+value+'<br>';
    		$(".item").append(html);
    	});
    
- extend

	    var target = {one: 'patridge'},
    		source = {two: 'turtle doves'};
    	var target2 = {one: 'patridge'},
    		source2 = {one: 'one',two:'turtle doves'};
    	console.log($.extend(target, source));
    	console.log($.extend(target2, source2));