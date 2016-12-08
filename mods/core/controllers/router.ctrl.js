

(function(){
    'use strict';
    angular.module("com.module.core")
        .controller('RouteCtrl' , function( AppAuth , $location){
            console.log(AppAuth.haslogin());
            if(!AppAuth.haslogin()){
                $location.path('/login')
            }else{
                $location.path('/app')
            }
        });
})();
