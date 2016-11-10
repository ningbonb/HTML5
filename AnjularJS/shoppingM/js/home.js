/**
 * Created by Administrator on 2016/11/9.
 */
var app = angular.module("myApp",['filterMaoMao']);
app.directive("navBar",function () {
    return {templateUrl:"template/navBar.html"};
});
app.controller("mainC",function ($scope,$http) {

});