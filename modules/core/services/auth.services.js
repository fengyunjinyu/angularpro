/**
 * Created by Administrator on 2016/8/12.
 */

(function(){
    'use strict';
    angular.module("com.module.core")
        .service("AuthService" ,function($q , $http){

            //定义允许通过的state
            this.allowState=[
                'app',
                'app.invest'
            ];

        });
})();
