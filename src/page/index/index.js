/*
* @Author: tradeoff
* @Date:   2018-08-15 23:23:25
 * @Last Modified by: nqlz
 * @Last Modified time: 2018-09-05 00:10:34
*/
// 'use strict';
// require('../module.js');
require ('page/common/nav/index.js');
require ('page/common/header/index.js');
var navSide = require ('page/common/nav-side/index.js');
navSide.init({
    name : 'user-center'
});    
var _mm=require('util/mm.js');
// _mm.request({
//     url:  '/apis/product/list.do?keyword=1',
//     success:function(res){
//         console.log(res);
//     },
//     error:function(errMsg){
//         console.log(errMsg);
//     }
// });
// console.log(_mm.getUrlParam('test'));
/* var html = '<div>{{data}}</div>';
var data = {
    data : 654
}
console.log(_mm.renderHtml(html,data)); */