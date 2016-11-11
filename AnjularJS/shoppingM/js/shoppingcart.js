/**
 * Created by Administrator on 2016/11/10.
 */
app.controller("checkoutController",function ($scope) {
    //删除的事件
    $scope.delete = function (product) {
        //从根控制器scope的数组中删除
        //console.log($scope.shoppingCarts);//继承根控制器
        //获取下标
        var index = $scope.shoppingCarts.indexOf(product);
        //删除
        $scope.shoppingCarts.splice(index,1);
    };
})