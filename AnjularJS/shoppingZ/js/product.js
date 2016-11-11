/**
 * Created by Administrator on 2016/11/10.
 */
app.controller("productC",function ($scope,$http) {


    function asyRequestData(categary) {
        //开始数据请求
        $http({url:"php/product2.php?categary="+categary,method:"get"}).then(function (resp){
            //console.log(resp);
            if(resp.status == 200){
                if(categary == "全部"){
                    //绑定数据模型
                    $scope.products = resp.data;
                }
                //异步请求，只有请求成功后才会回调当前匿名函数，直接在下面调用products不会有数据
                //$scope.updateDataOfCategary("全部");
                $scope.categaryProducts = resp.data;
                //更新页面
                getPage();
                $scope.getProductsPage(1);
            }
        },function (error) {

        });
    }
    //第一次调用
    asyRequestData("全部");

    //点击事件
    $scope.updateDataOfCategary = function (categary) {
        //保存当前点击的分类，ng-class函数判断使用
        window.chooseCategary = categary;
        //开始新的数据请求
        asyRequestData(categary);
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
        //保存页码
        window.choosePage = page;
    };

    //处理选中页码高亮
    $scope.chooseActivePage = function (page) {
        return window.choosePage == page ? "btn-primary" : "";
    }
});