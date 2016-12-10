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

- add:添加元素到当前匹配的元素集合中来。如果没有给定content参数，则在整个document中查找

	`$('li').add('p,h2').css('background-color','red');`

- addClass:添加class类名

	`$('li').addClass('width');`

- after:在匹配元素后插入内容（外部插入）。内容可以为html字符串，dom节点，或者节点组成的数组

	`$('li:first-child').after('<p>A note below the label</p>')`

- before:在匹配元素前面插入内容（外部插入）。内容同after。

	`$('ul').before('<p>before</p>');`

- append:在每个匹配的元素末尾插入内容（内部插入）。内容同after。

	`$('ul').append('<li>new list item end</li>');`

- appendTo:功能与append类似，格式相反。内容同after。

	`$('<li>new list item head</li>').appendTo('ul');`

- attr:读取或设置dom的属性

	> 如果没有给定参数，则读取对象集合中第一个元素的属性值。
	> 
	> 如果参数为null，那么这个属性将被移出（类似removeAttr）
	> 
	> 多个属性值可以通过对象键值对的方式进行设置
	> 
	> 要读取DOM属性如checked和selected，使用prop
    
    	$('form').attr('action','##');
    	$('form').attr('action',null);
    	console.log($('form').attr('action'));
    	//多个属性
    	$('form').attr({
    		action: '#',
    		method: 'post'
    	});
    	console.log($('form').attr('method'));

- children:获得匹配元素的直接子元素

	    var child1 = $('ul').children();
    	console.log(child1);
    	var child2 = $('ul').children(':first-child');
    	console.log(child2);

- clone:通过深度克隆来复制集合中的所有元素，此方法不会将数据和事件处理程序复制到新的元素
    
    	var newDiv = $('ul').clone();
    	console.log(newDiv);


# Zepto03.html #

- closest:匹配上级元素

	    var clo1 = $("input[type='text']").closest('form');
    	var clo1 = $("input[type='text']").closest('div');
    	var clo2 = $("input[type='text']").parents();
    	console.log(clo1);
    	console.log(clo2);

- concat:添加元素并形成一个新数组

	    var arr = ['1','2','3'];
    	var arr2 = arr.concat('4');
    	console.log(arr2);

- contents:获得匹配元素的子元素，包括文字和注释节点

	`console.log($('.form').contents());`

- css:读取或设置DOM元素的css属性

	    var elem = $('h1');
    	console.log(elem.css('background-color'));
    	elem.css('background-color','#368');
    	elem.css('background-color','');
    
    	elem.css({
    		backgroundColor: '#8EE',
    		fontSize: 28
    	});
    
    	var elemStyle = elem.css(['backgroundColor','fontSize'])['fontSize'];
    	console.log(elemStyle);

- data:读取或写入dom的date属性

	    $("#btn").click(function(){
    		$('div').data("greeting","Hello World");
    		alert($('div').data("greeting"));
    	});

- each:遍历集合中的每一个元素

	    $('form').each(function(index){
    		console.log('input %d is %o',index,this);
    	});

- empty:清空对象集合中的每个元素的DOM内容

	`//$('.form').empty();`

- eq:从当前对象集合中获取给定索引值的元素（从0开始）

	    console.log($('li').eq(0));
    	console.log($('li').eq(-1));

- filter:返回对象集合中满足css选择器的项

	    var filt = $('div').filter('.form');
    	console.log(filt);

- find:在当前集合内查找符合css选择器的每个元素的后代元素

	    var find1 = $('form').find('select');
    	console.log(find1);

- first:获取当前元素集合中的第一个元素

	`console.log($('li').first());`

- forEach:遍历集合中的每个元素

	    $('ul').forEach(function(item,index,array){
    		console.log(item);
    	});

- get:从当前对象集合中获取所有元素或单个元素，当index参数表不存在时，以普通数组的方式返回所有元素。与eq不同，该方法返回的时DOM节点，不是Zepto对象集合

	    var elements = $('h1');
    	console.log(elements.get());
    	console.log(elements.get(0));

- has:判断当前对象集合是否含有符合选择器的元素，或者是否包含指定的DOM节点，如果有，返回新的对象集合

	    var onlyLi = $('ul>li').has('a[href]');
    	console.log(onlyLi);

- hasClass:检查对象是否又元素含有指定的class

    	var hasClass1 = $('li').hasClass('list3');
    	console.log(hasClass1);//true

- height:获取对象集合中的第一个元素的高度，或者设置对象集合中所有元素的高度

	    console.log($('form').height());
    	console.log($(window).height());
    	console.log($(document).height());
    	$('li').height('30px');

- hide:通过设置css的属性display为none来将对象集合中的元素隐藏

	`// $('h1').hide();`

- html:获取或设置对象集合元素中的html内容。

	    console.log($('li').eq(2).html());
    	$('li').eq(2).html('list33333');

- index:获取一个元素的索引值(从0开始)

	`console.log($('li[class="list3"]').index());`