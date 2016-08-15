/**
 * Created by Administrator on 2016/8/4.
 */
(function(){
    'use strict';
    angular.module("com.module.invest")
        .config(function( $stateProvider ){
            $stateProvider.state("app.invest",{
                url:'/invest',
                abstract:true,
                templateUrl:'modules/invest/views/invest.html'
                //templateUrl:'',
                //controller:'InvestCtrl',

            }).state("app.invest.list" , {
                url:'/list',
                templateUrl:"modules/invest/views/invest_list.html",
                controllerAs:'investlist',
                controller:function(){
                    this.active =1;
                    this.debtinfo = {
                        elem:'jojox',
                        size:'59',
                        color:'#ff4657'
                    };
                    this.handler = new drawCircle(this.debtinfo);

                    this.reDraw = function(active,size){
                        this.active = active;
                        this.handler.clearDraw();
                        this.handler.drawCircle();
                        this.handler.drawPathSize(size);
                    }
                    this.handler.drawCircle();
                    this.handler.drawPath();


                }
            }).state("app.invest.debtnow" ,{
                //立即投资
                url:'/invest/debt/:id',
                templateUrl:'modules/invest/views/invest_now.html',
                controllerAs:"investnow",
                controller:function(){

                    this.debtinfo = {
                        minmoney:100, //最低投资额
                        maxmoney:15000,//最高投资额
                        useramount:1234//用户账户总金额
                    };

                    this.dialog_info={
                        isshow:false,
                        title:'提示',
                        content:'你的账户有问题',
                        confirm:function(){
                            this.content="Confirm";

                        },
                        cancel:function(){
                            this.isshow = false;

                        },
                        updateTitle:function(str_title){
                            this.title = str_title;
                        },
                        updateContent:function(str_content){
                            this.content = str_content;
                        }
                    };

                    this.investevent =function(){


                        this.dialog_info.title="警告";
                        this.dialog_info.content="当前债权不足";

                        this.dialog_info.isshow = true;

                    };



                }
            }).state("app.invest.debtinfo" , {
                url:'/invest/debtinfo',
                templateUrl:'modules/invest/views/invest_iteminfo.html'
            })

        });


})();