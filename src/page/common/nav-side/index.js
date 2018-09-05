/*
 * @Author: nqlz 
 * @Date: 2018-09-04 21:46:45 
 * @Last Modified by: nqlz
 * @Last Modified time: 2018-09-05 00:09:12
 */
require ('./index.css');
var _mm = require ('util/mm.js');
var templateIndex = require ('./index.string');
//c导航
var navSide = {
    option:{
        name : '',
        navList : [
                {name : 'user-center',desc: '个人中心', href : './user-center.html'},
                {name : 'order-list',desc: '我的订单', href : './order-list.html'},
                {name : 'pass-update',desc: '修改密码', href : './pass-update.html'},
                {name : 'about',desc: '关于mmall', href : './about.html'}
        ]
    },
    init : function (option){
        //合并选项
        $.extend(this.option,option);
        this.renderNav();
    },
    //渲染导航菜单
    renderNav:function(){
        //计算active的数据
        for (var i = 0,iLength = this.option.navList.length;i<iLength;i++){
            if (this.option.navList[i].name === this.option.name){
                this.option.navList[i].isActive = true;
            }
        }
        //渲染list数据
        var navHtml = _mm.renderHtml(templateIndex,{
            navList : this.option.navList 
        });
        //把HTML放入容器
        $('.nav-side').html(navHtml);
    }
};
module.exports = navSide;