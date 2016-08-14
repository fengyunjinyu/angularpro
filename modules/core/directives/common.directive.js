/**
 * 项目开发使用的基础组件指令
 */
(function(){
    'use strict';
    angular.module('com.module.core')
        .directive("inputPhone" , function(){
            return {
                restrict:'EA',
                scope:false,
                template:'<input type="text" name="phonenumber" placeholder="请输入你的手机号" ng-change="change()" ng-model="phonenumber">'
            }
        })
        .directive('adminBox' , function(){
            return {
                template:"<div></div>",
                restrict:'E',
                link:function postLink(scope , element){
                    element.text("This is AdminBox Directive");
                }
            }
        })
        .directive("home" , function(){
            return {
                template:'<div></div>',
                restrict:'E',
                link:function postLink(scope , element , attrs){
                    element.text('This is the home directive '+attrs);
                }
            }
        })//金额输入框组件
        .directive("inputMoney" , function(){
            // limitmoney :最低输入金额
            // maxmoney
            // summoney : 账户总金额
            return {
                restrict:'EA',
                //template:'',
                templateUrl:'modules/core/views/elements/inputmoney.html',
                scope:{
                    conf:'=' ,  //项目配置信息
                    state:''    //状态通道  ， 将用户当前输入金额之后的响应状态反射到页面上
                },
                link:function(scope , element , attrs){

                    /**
                     *
                     * @type {string}
                     *
                     this.debtinfo = {
                        minmoney:100, //最低投资额
                        maxmoney:15000,//最高投资额
                        useramount:1234//用户账户总金额
                     };

                     this.state = {

                     }
                     */


                    scope.inputmoney = "0.00";

                    //点击增减金额
                    scope.plusmoney=function(){

                        scope.inputmoney = parseInt(scope.inputmoney)+100;
                        //如果金额小于最小金额
                        conf.inputmoney = conf.inputmoney <conf.minmoney ? conf.minmoney : conf.inputmoney;
                        //如果金额大于该项目投资总额
                        conf.inputmoney = conf.inputmoney > conf.maxmoney ? conf.maxmoney : conf.inputmoney;

                        //如果输入金额大于账户总金额

                    };
                    //点击删除金额
                    scope.reducemoney=function(){
                        scope.inputmoney = parseInt(scope.inputmoney)-100;
                        scope.inputmoney = scope.inputmoney>0?scope.inputmoney:0;

                    };



                }
            }
        })
        .directive("dialog",function(){
            return {
                restrict:'EA',
                replace:true,
                templateUrl:'modules/core/views/elements/dialog.html',
                scope:{
                    conf:'='
                },
                link:function(scope , element , attrs){

                    scope.cancel = function(){
                        console.log("cancel");
                    };
                    scope.confirm = function(){
                        console.log("confirm");
                    }

                }

            }

        });
})();
