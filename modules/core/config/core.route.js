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
                .state('app' , {
                    abstract:true,
                    url:'/app',
                    templateUrl:'modules/core/views/app.html',
                    controller:'MainCtrl'

                })
                .state('app.home',{
                    url:'',
                    templateUrl:'modules/core/views/home.html',
                    controller:'HomeCtrl',
                    resolve:{
                        bannerlist:function(Invest){
                            var data = Invest.bannerlist().$promise;
                            return data;
                        }
                    }
                });
            $urlRouterProvider.otherwise('/route');
        })
        .factory('httpInterceptor' , ['$q' , "$injector" , function($q , $injector){
            var httpInterceptor = {
                'responseError':function(response){
                    if(response.status ==401){
                        var rootScope = $injector.get("$rootScope");
                        var state = $injector.get("$rootScope").$state.current.name;
                        rootScope.stateBeforeLogin = state;
                        rootScope.state.go("login");
                        return $q.reject(response);
                    }else if(response.status===404){
                        alert("404");
                        return $q.reject(response);
                    }

                },
                'response':function(response){
                    return response;
                }
            }
            return httpInterceptor;
        }])
        .config(['$httpProvider' , function($httpProvider){
            $httpProvider.interceptors.push('httpInterceptor');
        }])

        /*
        .factory("UserInterceptor" , ['$q' , "$rootScope" , function($q , $rootScope , AuthService){
            return {
                request:function(config){

                    //config.headers['TOKEN'] = $rootScope.user.token;
                    return config;
                },
                requestError:function(reqErr){
                    return reqErr;

                },
                responseError :function(response){
                    var data = response.data;

                    //如果未登录
                    if(data['errorCode']=='10090'){
                        $rootScope.user = {token:''};
                        $rootScope.$emit('userIntercepted' ,"notLogin" , response);
                    }
                    //如果登录超时
                    if(data['errorCode'] == '10020'){
                        $rootScope.$emit('userIntercepted',"sessionOut" , response);

                    }

                    return $q.reject(response);

                },
                'response':function(response){
                    console.log("jsxx");
                    var data = response.data;
                    //如果未登录
                    if(data.state==10010){
                        $rootScope.user = {token:''};
                        $rootScope.$emit('userIntercepted' ,"notLogin" , response);

                    }
                    //如果sessionToken失效
                    if(data.state==10020){
                        console.log("ashhfd");
                        $rootScope.$emit('userIntercepted',"sessionOut" , response);

                    }
                    return response;

                }
            }
        }])
        .config(['$httpProvider' , function( $httpProvider ){
            $httpProvider.interceptors.push('UserInterceptor');
        }])

        */

    ;
})();