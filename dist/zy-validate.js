!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define("zy-validate",[],r):"object"==typeof exports?exports["zy-validate"]=r():e["zy-validate"]=r()}("undefined"!=typeof self?self:this,function(){return function(e){function r(n){if(t[n])return t[n].exports;var u=t[n]={i:n,l:!1,exports:{}};return e[n].call(u.exports,u,u.exports,r),u.l=!0,u.exports}var t={};return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},r.p="/dist/",r(r.s=0)}([function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=function(e){return/^[1-9][0-9]{4,9}$/gim.test(e)},u=function(e){return/^1[3456789]\d{9}$/.test(e)},i=function(e){return/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(e)},o=function(e){return/^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(e)},a=function(e){return/^[\s\u4e00-\u9fa5a-z0-9_-]{0,}$/.test(e)},l=function(e){return/^[1-9]\d*$/.test(e)},s=function(e){return/^[+]{0,1}(\d+)$/.test(e)},c=function(e,r,t){null!=r&&""!=r?n(r)?t():t(new Error("您输入的QQ号不正确!")):t()},d=function(e,r,t){null!=r&&""!=r?u(r)?t():t(new Error("您输入的手机号不正确!")):t()},f=function(e,r,t){null!=r&&""!=r?i(r)?t():t(new Error("您输入的邮箱不正确!")):t()},g=function(e,r,t){null!=r&&""!=r?o(r)?t():t(new Error("您输入的身份证不正确!")):t()},p=function(e,r,t){null!=r&&""!=r?a(r)?t():t(new Error("含有非法字符(只能输入字母、汉字)!")):t()},b=function(e,r,t){null!=r&&""!=r?l(r)?t():t(new Error("请输入正整数!")):t()},h=function(e,r,t){null!=r&&""!=r?s(r)?t():t(new Error("请输入正整数或0!")):t()},m=function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];e.prototype.filterRules=function(e){var r=[];if(e.required&&r.push({required:!0,message:"该输入项为必填项!",trigger:"blur"}),e.maxLength&&r.push({min:1,max:e.maxLength,message:"最多输入"+e.maxLength+"个字符!",trigger:"blur"}),e.min&&e.max&&r.push({min:e.min,max:e.max,message:"字符长度在"+e.min+"至"+e.max+"之间!",trigger:"blur"}),e.type){switch(e.type){case"email":r.push({validator:f,trigger:"blur,change"});break;case"qq":r.push({validator:c,trigger:"blur,change"});break;case"mobile":r.push({validator:d,trigger:"blur,change"});break;case"IDCard":r.push({validator:g,trigger:"blur,change"});break;case"regexn":r.push({validator:p,trigger:"blur,change"});break;case"integer":r.push({validator:b,trigger:"blur,change"});break;case"integerZero":r.push({validator:h,trigger:"blur,change"});break;default:rule.push({})}}return r}};"undefined"!=typeof window&&window.Vue&&m(window.Vue),r.default={install:m}}])});
//# sourceMappingURL=zy-validate.js.map