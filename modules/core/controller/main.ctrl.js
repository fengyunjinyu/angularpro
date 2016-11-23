/**
 * Created by Administrator on 2016/8/4.
 */
(function(){
    angular.module("com.module.core")
        .controller("MainCtrl",function( $scope , $rootScope ,$state ){

            $scope.logout = function(){
                $state.go('login');
            };

            $scope.ftmenu = false;

            $scope.modal_info={
                "title":'提示',
                "content":'提示新内容',
                "show":false,
                'click_event':function(){
                    alert("按钮点击默认事件");

                }
            }
            $scope.dialog_info={
                "title":"提示",
                "content":'你的账户有问题',
                "show":false,
                "cancel_event":function(){
                    console.log("cancel");
                },
                "confirm_event":function(){
                    console.log("confirm")
                }
            };

            /**
             * 弹框事件侦听
             */

            $scope.$on("show_modal" , function(d , data){
                console.log(data);
                $scope.modal_info = data;
            });
            $scope.$on("show_dialog" , function(d , data){
                console.log(data)
                $scope.dialog_info = data;
            });

            $scope.$on("hide_ftmenu" , function(d , data){
                $scope.ftmenu = false;

            })

        });

})();