/**
 * Created by Administrator on 2016/8/4.
 */
(function () {
    'use strict';
    angular.module("com.module.core")
        .controller('LayoutCtrl' , function($scope , $rootScope , $cookies ){

            $scope.ft_menus = [
                {catname:'我要投资',state:'app.invest.main'},
                {catname:'我的账户',state:'app.account.main'},
                {catname:'活动中心',state:'app.activity.main'}
            ]

        })
})();