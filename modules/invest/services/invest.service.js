/**
 * 投资列表service
 *
 */
(function(){
    'use strict';
    angular.module("com.module.invest")
        .service('InvestService' , function($http){

            /**
             * 获取轮播列表
             */
            this.getBannerSlide = function(){
                return $http({
                    method:'get',
                    url:'http://localhost/haxpp_admin/index.php/Home/invest/banners'
                });

            };
            /**
             * 获取首页图标广告信息
             */
            this.getIconList = function(){

            }

        });
})();