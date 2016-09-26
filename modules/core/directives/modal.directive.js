(function(){
    'use strict';
    angular.module("com.module.core")
        .directive('uiAlert' , function(){
            return {
                restrict :'AE',
                templateUrl: 'modules/core/views/modal.html',
                scope:{
                    color:'@',
                    title:'@',
                    items:'='
                },
                link: function(scope , elements , attrs){

                },
                compile:function(){

                }
            }
        })
})()
