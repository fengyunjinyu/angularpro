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
            }).state("app.account" , {
                url:'/account',
                template:"<ui-view></ui-view>",
                abstract:true
            }).state("app.account.main" ,{
                url:'',
                templateUrl:'modules/users/views/account.html'
            }).state("app.account.infos" , {
                url:'/infos',
                templateUrl:'modules/users/views/account_infos.html'
            }).state("app.account.recharge" , {
                /**
                 * 账户充值
                 */
                url:'/recharge',
                template:'账户充值',
                controllerAs:'ctrl',
                controller:function(account_infos){
                    this.account_details = accountinfos;
                },
                resolve :{
                    account_infos : function( Account ){
                        return Account.getdetails();
                    }
                }
            })
        })
})();