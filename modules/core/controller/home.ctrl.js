/**
 * app.home 页面 控制器
 */

(function(){
    'use strict';
    angular.module('com.module.core')
        .controller('HomeCtrl' , function($scope , $rootScope ,bannerlist){

            $scope.title = "APP-Home";
            console.log('jjjs');
            console.log(bannerlist);

            $scope.banners = bannerlist.banners;

            $scope.hxinfo = bannerlist.hxinfo;

            $scope.dialog_info={
                isshow:false,
                title:'提示',
                content:'你的账户有问题',
                confirm:function(){
                    this.content="Confirm";

                },
                cancel:function(){
                    this.isshow = false;

                },
                updateTitle:function(str_title){
                    this.title = str_title;
                },
                updateContent:function(str_content){
                    this.content = str_content;
                }

            }

        })
})();
