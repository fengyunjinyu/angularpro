/**
 * app.home 页面 控制器
 */

(function(){
    'use strict';
    angular.module('com.module.core')
        .controller('HomeCtrl' , function($scope , $rootScope ,bannerlist){

            $scope.title = "APP-Home";
            console.log(bannerlist);

            $scope.banners = bannerlist.banners;

            $scope.hxinfo = bannerlist.hxinfo;

            $scope.show_modal=function(){

                $scope.$emit('show_modal', {
                    "title":"invest_index_notice_emit_parent",
                    "content":"Modal测试",
                    "show":true,
                    "clickevent":function(){
                        this.show = false;
                    }
                });

            }

            //$scope.$emit("hide_ftmenu");

            $scope.show_dialog = function(){

                $scope.$emit('show_dialog', {
                    "title":"Dialog测试",
                    "content":"独立弹出框测试",
                    "show":true,
                    "cancel_event":function(){
                        console.log("cancel");
                        this.show = false;
                    },
                    "confirm_event":function(){
                        console.log("select confirm")
                        this.show = false;
                    }
                });

            }

        })
})();
