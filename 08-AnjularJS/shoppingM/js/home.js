/**
 * Created by Administrator on 2016/11/9.
 */
//ngRoute：注入路由模块
var app = angular.module("myApp",['filterMaoMao','ngRoute']);
app.directive("navBar",function () {
    return {templateUrl:"template/navBar.html"};
});
//配置路由
app.config(function ($routeProvider) {
    //$routeProvider.when("/",{templateUrl:"template/product.html"});
    //$routeProvider.when("/product",{templateUrl:"template/product.html"});
    $routeProvider.when("/shoppingcart",{templateUrl:"template/shoppingcart.html"});
    $routeProvider.otherwise({templateUrl:"template/product.html"});
})

app.controller("mainC",function ($scope,$http) {

    //本地数组，保存添加到购物车的商品
    var shoppingCart = [];
    $scope.addToShoppingCart = function (product) {
        //this:ng-repeat默认创建的一个scope对象
        //console.log(this.product);
        //console.log(product);
        //如果是点的同一件商品，该商品个数加1，如果之前没有添加过，直接放到数组
        if(shoppingCart.indexOf(product) == -1){//没有
            product.count = product.count ? product.count : 1;
            shoppingCart.push(product);
        }else{//之前添加过
            product.count++;
        }
        //console.log(shoppingCart);
        $scope.shoppingCarts = shoppingCart;
    };
    //计算购物车总数
    $scope.totalPriceAndCount =function () {
        var total = 0;
        var totalPrice = 0;
        for(var i = 0; i < shoppingCart.length; i++){
            //总的个数
            total += shoppingCart[i].count;
            //总价
            totalPrice += shoppingCart[i].count * shoppingCart[i].priec;
        }
        return {total:total,totalPrice:totalPrice};
    };
});