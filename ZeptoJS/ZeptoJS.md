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

# zepto02.html #



- $.fn:给所有Zepto对象添加方法

    	$.fn.empty = function(){
    		return this.each(function(){
    			this.innerHTML = '';
    		});
    	};

- $.grep:获取一个数组，新数组只包含回调函数中返回true的数组项

	    var grepArr = $.grep([1,2,3],function(item){
    		return item > 1;
    	});
    	console.log(grepArr);

- $.inArray:返回数组中指定元素的索引值，没有找到返回-1，第三个参数表示从该索引值开始向查找

	    var inArr1 = $.inArray("abc",['bcd','abc','edf','aaa']);
    	var inArr2 = $.inArray("abc",['bcd','abc','edf','aaa'],1);
    	var inArr3 = $.inArray("abc",['bcd','abc','edf','aaa'],2);
    	console.log(inArr1,inArr2,inArr3);

- $.isArray:判断是否为数组

	    var isArr = ['a','c'];
    	console.log($.isArray(isArr));

- $.isFunction:判断是否是function

	`console.log($.isFunction(grepArr));`

- $.isNumeric:判断是否为有限数值或一个字符串表示的数字

	`console.log($.isNumeric('111'));`

- $.isPlainObject:测试对象是否是通过{}或者new Object创建的

	    var isPla1 = $.isPlainObject({});
    	var isPla2 = $.isPlainObject(new Object);
    	var isPla3 = $.isPlainObject(new Date);
    	var isPla4 = $.isPlainObject(window);
    	console.log(isPla1,isPla2,isPla3,isPla4);//true true false false

- $.isWindow:判断是否为一个window对象

	> 这在处理iframe时非常有用，每个iframe都有它们自己的window对象，使用常规方法obj === window校验这些objects的时候会失败

	`console.log($.isWindow(window));`

- $.map:遍历集合中的元素，返回通过迭代函数的全部结果（一个新数组）,null和undefined将被过滤掉。

	    var mapArr = $.map([1,2,3,4,5],function(item,index){
    		if(item > 1){
    			return item*item;
    		}
    	})
    	console.log(mapArr);
    	var mapArr2 = $.map({"yao":1,"tai":2,"yang":3},function(item,index){
    		if(item>1){
    			return item*item;
    		}
    	});
    	console.log(mapArr2);

	>   $.map和$.grep的异同
	>    
	> 都是对数组进行操作
	> 	
	> map对数组进行遍历，返回满足条件的新数组
	> 	
	> grep起到筛选的作用，返回满足条件的值

- $.noop:引用一个空函数，什么都不处理

	`var callback = $.noop;`

- $.parseJSON:原生JSON.parse方法的别名，接收一个标准的JSON字符串，并返回解析后的javaScript对象

    `console.log($.parseJSON('{"name":"John"}'));`	

- $.trim:删除字符串首尾的空白符

	    console.log(" hello world ");
    	console.log($.trim(" hello world "));	

- $.type:获取javascript对象的类型，可能的类型有：null,undefined,boolean,number,string,function,array,date,regexp,object,error

	    console.log($.type(new Date));
    	console.log($.type("hello world"));
    	console.log($.type(1111));