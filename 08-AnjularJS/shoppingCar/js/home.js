/**
 * Created by Administrator on 2016/11/9.
 */
var app = angular.module("myApp",['filterMaoMao']);
app.directive("navBar",function () {
    return {templateUrl:"template/navBar.html"};
});
app.controller("mainC",function ($scope,$http) {
    //开始数据请求
    $http({url:"php/product2.php?categary=全部",method:"get"}).then(function (resp){
        //console.log(resp);
        if(resp.status == 200){
            //绑定数据模型
            $scope.products = resp.data;
            //异步请求，只有请求成功后才会回调当前匿名函数，直接在下面调用products不会有数据
            //$scope.updateDataOfCategary("全部");
            $scope.categaryProducts = resp.data;
            //更新页面
            getPage();
            $scope.getProductsPage(1);
        }
    },function (error) {
        
    });

    //点击事件
    $scope.updateDataOfCategary = function (categary) {
        //保存当前点击的分类，ng-class函数判断使用
        window.chooseCategary = categary;
        if(categary == "全部"){
            //console.log(1111111);
            $scope.categaryProducts = $scope.products;
        }else{
            //console.log(categary);
            var arr = [];
            for(var i = 0; i < $scope.products.length; i++){
                if(categary == $scope.products[i].categary){
                    arr.push($scope.products[i]);
                }
            }
            //console.log(arr);
            //筛选后的结果绑定到新的模型上
            $scope.categaryProducts = arr;
        }
        //更新页码
        getPage();
        //默认显示第一页
        $scope.getProductsPage(1);
    }

    //默认全部：
    window.chooseCategary = "全部";
    //ng-class:绑定事件：只要界面发生变化，比如点击事件触发，或者界面刷新，都会重新布局，触发ng-class绑定的事件
    $scope.chooseCategaryActive = function (categary) {
        //console.log(categary);
        return window.chooseCategary == categary ? 'btn-primary' : "";
        //return 'btn-primary';
    };

    //分页
    function getPage() {
        var pages = [];
        for(var i = 0; i < $scope.categaryProducts.length/3;i++){
            pages.push(i+1);
        }
        $scope.pages = pages;
    }
    //处理点击分页，页面显示3个，页码变成每页代表3个
    $scope.getProductsPage = function (page) {
        //page:1 2 3 4
        //1:0-3（1-1）*3
        //2:下标：3（2-1）*3
        //3:下标：6（3-1）*3
        //截取下标（page-1）*3
        var index = (page - 1) * 3;
        //截取数组
        //splice:截取数组，返回截取后的值组成新的数组，但是原数组会被修改
        //concat:会copy一个新的数组返回，如果参数不传，copy原数组
        var cProductsCopy = $scope.categaryProducts.concat();
        var newProducts = cProductsCopy.splice(index,3);
        //console.log(newProducts);
        //绑定模型，对应每页显示的数据
        $scope.currentPageProducts = newProducts;
    };
});