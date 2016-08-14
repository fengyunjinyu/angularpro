/**
 * Created by Administrator on 2016/8/7.
 */
(function(){
    'use strict';
    angular.module("tm.pagination",[])
        .directive('tmPagination' , function(){
            return {
                restrict:'EA',
                template:'<div class="pagelist">'+
                    '<ul class="pagination" ng-show="conf.totalItems>0">'+
                    '<li ng-class="{disabled:conf.currentPage == 1}" ng-click="prevPage()"><span>$laquo</span></li>'+
                    '<li ng-repeat="item in pageList track by $index" ng-class="{active:item == conf.currentPage , seprate : item ==\'...\'} " '+
                    ' ng-lick="changeCurrentPage(item)"'+
                    '<span></span>'+
                    '</li>'+
                    '<li ng-class="{disabled:conf.currentPage == conf.numberOfPages}" ng-click="nextPage()"><span>&raquo</span></li>'+
                    '</ul>',
                replace:true,
                scope:{
                    conf:'='
                },
                link:function(scope , element , attrs){
                    scope.changeCurrent = function(item){
                        if(item== '...'){
                            return ;
                        }else{
                            $scope.conf.currentPage = item;
                        }

                    };

                    scope.conf.pagesLength = parseInt(scope.conf.pagesLength)?
                        parseInt(scope.conf.pagesLength) : 9;
                    if(scope.conf.pagesLength % 2 ===0){
                        scope.conf.pagesLength = scope.conf.pagesLength -1 ;

                    }

                    if(!scope.conf.perPageOptions){
                        scope.conf.perPageOptions=[10,15,20,30,50];

                    }
                    function getPagination(){
                        scope.conf.currentPage = parseInt(scope.conf.currentPage) ?
                            parseInt(scope.conf.currentPage) : 1;
                        scope.conf.totalItems = parseInt(scope.conf.totalItems);
                        if(scope.conf.remberPerPage){

                        }
                    }
                }


            }
        })
})();