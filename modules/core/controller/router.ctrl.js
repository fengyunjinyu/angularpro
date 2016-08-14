/**
 * Created by Administrator on 2016/8/4.
 * 路由集中管理控制器
 */
(function(){
    'use strict';
    angular.module('com.module.core')
        .controller('RouteCtrl' , function($rootScope,$state, $location){
            //所有路由均通过这个控制器  所以在这里拦截
            //$location.path('/login');

            /*
            $rootScope.on('$stateChangeStart' , function(event , toState , toParams , fromState , fromParams){
                console.log("state-change");
                if(toState.name=="login") return;
                if(!$rootScope.user || !$rootScope.user.token){
                    event.preventDefault();
                    //跳转到登录
                    $state.go("login" , {from:fromState.name});
                }

            });

            */
        }).run(function( $rootScope  , $state , AuthService){
            console.log($state);
            console.log($state.current);

            $rootScope.$on('userIntercepted' , function(errorType){
                var statename = $state.current.name;

                console.log("jjss");
                //$state.go("login" , {from:$state.current.name,w:errorType});
            });
        });
})();
