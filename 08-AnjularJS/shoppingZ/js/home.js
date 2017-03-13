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

    $scope.total = 0;
    $scope.totalPrice = 0;
    //本地数组，保存添加到购物车的商品
    $scope.addToShoppingCart = function (product) {
        //php/addToCart.php?id=1&name=足球&price=100
        $http.get("php/addToCart.php?id="+product.id+"&name="+product.name+"&price="+product.priec).success(function (resp) {
            //console.log(resp);
            //绑定价格和数量
            $scope.total = resp['total'];
            $scope.totalPrice = resp['totalPrice'];
        });
    };
    //查询服务器的总数和价格
    $scope.updatePrice = function () {
        $http.get("php/totalPrice.php").success(function (resp) {
            //绑定价格和数量
            $scope.total = resp['total'];
            $scope.totalPrice = resp['totalPrice'];
        });
        }
    $scope.updatePrice();
});