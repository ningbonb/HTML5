/**
 * Created by Administrator on 2016/11/10.
 */
//自定义过滤器
//1.新建一个过滤器模块，filterMaoMao是我们的模块名称
var cf=angular.module("filterMaoMao",[]);
//unique:过滤器名称
cf.filter("unique",function () {
    //返回的是一个函数对象
    //参数：data：指的是需要过滤的数据源数组，比如我们18里的data
    //property:需要过滤的属性 data|unique;
    //函数返回值；就是过滤后的新的数组
    return function (data,property) {
        //console.log(data,property);
        if(angular.isArray(data)){//过滤的数据源是否是数组
            var arr=[];
            for(var i=0;i<data.length;i++){
                var cValue=data[i][property];//篮球
                //如果数组没有，就保存这个值，有的话不保存
                //str.indexOf('S');str有s的话，返回对应下标，没有的话返回-1，数组一样
                if(arr.indexOf(cValue)==-1){//数组没有
                    arr.push(cValue);
                }
            }
            return arr;
        }
    }
});