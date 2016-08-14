/**
 * Created by Administrator on 2016/8/4.
 */
(function(){
    angular.module("com.module.core")
        .controller("MainCtrl",function( $scope , $rootScope ,$state ){

            $scope.logout = function(){
                $state.go('login');
            };








        });

})();