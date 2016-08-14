/**
 * Created by Administrator on 2016/8/6.
 */
(function(){
    'use strict';
    angular.module("com.module.users" )
        .controller("LoginCtrl" , function ($scope,Users ) {
            $scope.phonenumber = "13120430396";
            $scope.change = function(){
                console.log($scope.phonenumber);
            }

            $scope.navlist = [
                {id:'1', text:'还想计划1'},
                {id:'2',text:'还想D计划'}
            ];

            $scope.last_index = 0;  //定义上一次的触发位置

            /*

            //定义回环组建
            $scope.mySwiper = new Swiper("#soha",  {
                speed:1000,
                loop:true,
                onSlideChangeStart:function(tabsSwiper){
                    if($scope.is_touch_slide){  //如果是滑动
                    }else{
                        //左右滑动触发下一个
                        if(tabsSwiper.previousIndex < tabsSwiper.activeIndex){

                        }
                    }
                },
                onSlideChangeEnd:function(){
                    $scope.is_touch_slide=true;
                }

            });
            */

            //点击菜单栏目中的项目 出发该函数  其中index 表示该项目在数组中的位置

            $scope.after_move_call = function(){


            }

            $scope.getmore = function(){
                Users.create();
            }



        })
})();