/**
 * Created by Administrator on 2016/8/4.
 */
(function(){
    'use strict';
    angular.module("com.module.users")
        .config(function ($stateProvider) {
            $stateProvider.state("login",{
                url:'/login',
                templateUrl:'modules/users/views/login.html',
                controller:'LoginCtrl'
            }).state("register",{
                url:'/register',
                templateUrl:'modules/users/views/register.html'
                //controller:'RegisterCtrl'
            })
        })
})();