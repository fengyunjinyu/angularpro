/**
 * 指令的测试
 */
(function(){
    'use strict';
    angular.module("com.module.core")
        .directive("myDirective"  , function(){
            return {
                restrict:'A',
                template:'Inside myDirective,{{formname}}--- {{ myProperty }}',
                scope:{
                    //这里指定哪些变量可以与外部世界通信
                    formname:'@'
                    //双向绑定 使用=
                    //ngModel:'='
                    //父级作用于绑定 使用& 引用
                    //
                }
            }
        })
        .directive("myInheritScopeDirective" , function(){
            return {
                restrict:'A',
                template:'inHerit inside myDirective,{{myProperty}}',
                scope:true
            }
        })
})();
