/**
 * 用户登录
 */

(function(){
    'use strict';
    angular.module("com.module.user").controller("LoginCtrl" , function($scope , AppAuth){

        var me = this;
        this.user={
            username:'dojos',
            password:'hhh'
        };

        this.login = function(){
            console.log("dodod");
            AppAuth.login(me.user);
        }

    })
})();
