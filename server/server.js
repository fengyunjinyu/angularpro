(function(window , angular , underfined){
    'use strict';

    var urlBase = 'http://localhost/angularpro/';
    var authHeader = "authorization";
    function getHost(url){
        var m = url.match(/^(?:https?:)?\/\/([^\/]+)/);
        return m ? m[1] : null;
    }

    var urlBaseHost = getHost(urlBase) || location.host;

    var module = angular.module('lbServices' , ['ngResource']);

    module.factory("Invest" , ['LoopBackResource' , '$injector',
        function(Resource , $injector){
            var R = Resource(
                urlBase+"data/invest/:id" ,
                {id:'@id'},
                {
                    'bannerlist':{
                        //isArray:true,
                        url:urlBase+"data/bannerlist.json",
                        method:'get'
                    }
                }
            );
            R.moduleName = "Invest";
            return R;
        }
    ]);


    module.factory("Users" , ['LoopBackResource' ,
        '$injector' ,
        function(Resource , $injector){
            var R = Resource(
                urlBase+"/users/:id",
                {"id":'@id'},
                {
                    "prototype$__get__user": {
                        url: urlBase + "/accessTokens/:id/user",
                        method: "GET"
                    },
                    "create": {
                        url: urlBase + "/accessTokens",
                        method: "POST"
                    },
                    'edit':{
                        url:urlBase+"/edit/:id",
                        method:'POST',
                        isArray:true
                    }
                }
            );
            R.moduleName = "Users";
            return R;
    }]);


        module.provider("LoopBackResource" , function LoopBackResourceprovider(){
            this.$get = ['$resource' , function($resource){
                var LoopBackResource = function(url, params, actions){
                    console.log(arguments);
                    var resource = $resource(url, params , actions);
                    resource.prototype.$save = function(success , error){
                        var result  = resource.upsert.call(this , {} , this,success,error);
                        return result.$promise || result;

                    };
                    return resource;

                };

                LoopBackResource.getUrlBase = function(){
                    return urlBase;
                }
                LoopBackResource.getAuthHeader = function(){
                    return authHeader;
                };

                return LoopBackResource;

            }]
        })

})(window , window.angular);
