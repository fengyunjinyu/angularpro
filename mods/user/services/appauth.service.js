/**
 * Created by Administrator on 2016/12/1.
 */
(function(){
    'use strict';
    angular.module("com.module.user").factory("AppAuth" , function( $cookieStore ,$http  , $location){
        var self={
            login:function(data){
                $http.post('/appleshop/index.php/user/login' , {
                    email:data.email,
                    password:data.password
                }).then(function(response){

                    if(response.data.status==10000){
                        console.log("登录成功");
                        $cookieStore.put('person' ,data);
                        $location.path('/router');
                    }else{
                        console.log("登录fail");
                    }
                    console.log(response);
                } , function(){
                    console.log('error');
                })

            },

            logout:function(){
                console.log("failed");
                $cookieStore.remove('person');
                $location.path("/login");
            },
            haslogin:function(){
                var $user = $cookieStore.get('person')
                if($user){
                    console.log("logined ");
                    return true;
                }else{
                    return false;

                }
            }

        };
        return self;

    })
})();