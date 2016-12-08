/**
 * 路由管理控制
 */
(function(){
    'use strict';
    angular
        .module("com.module.core")
        .config(function($stateProvider , $urlRouterProvider){
            $stateProvider
                .state('router' ,{
                    url:'/router',
                    template:'<div class="loopback">Router Error</div>',
                    controller:'RouteCtrl'
                })
                .state("error" , {
                    url:'/error',
                    template:'<div>Router Error</div>'
                })
                .state("login" ,{
                    url:'/login',
                    templateUrl:'mods/core/views/login.html',
                    controllerAs:'ctrl',
                    controller:'LoginCtrl'
                })
                .state('app' , {
                    abstract:true,
                    url:'/app',
                    templateUrl:'mods/core/views/layout.html',
                    controllerAs:'ctrl',
                    controller:function($scope , AppAuth){
                        this.logout = function(){
                            AppAuth.logout();
                        }
                    }
                })
                .state('app.home',{
                    url:'',
                    templateUrl:'mods/core/views/app.html',
                    controllerAs:'ctrl',
                    controller:function($scope , AppAuth){


                    }
                });
            $urlRouterProvider.otherwise('/router');
        })
})();