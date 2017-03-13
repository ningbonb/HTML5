/**
 * Created by Administrator on 2016/11/10.
 */
app.controller("checkoutController",function ($scope,$http) {

    //查询服务器购物车列表
    $http.get("php/shoppingCartList.php").success(function (resp) {
        //console.log(resp);
        $scope.shoppingCarts = resp;
    });
    //服务器删除
    //删除的事件
    $scope.delete = function (product) {
        //从根控制器scope的数组中删除
        //console.log($scope.shoppingCarts);//继承根控制器


        $http.get("php/deleteCart.php?id="+product.id).success(function (resp) {
            //console.log(resp);
            if(resp.code == 200){
                //更新界面
                //获取下标
                var index = $scope.shoppingCarts.indexOf(product);
                //删除
                $scope.shoppingCarts.splice(index,1);
                //更新价格
                $scope.updatePrice();
            }
        });

    };
});