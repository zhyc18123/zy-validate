// 保留两位小数
const validateMoneyNumber=(value)=>{
            let reg = /^\d{0,8}\.{0,1}(\d{1,2})?$/;
            return reg.test(value)
}
// 验证QQ号码
const qq=(value)=>{
            let reg = /^[1-9][0-9]{4,9}$/gim;
            return reg.test(value)
}
// 手机号码
const mobile=(value)=>{
            let reg = /^(0|86|17951)?(13[0-9]|15[012356789]|18[0-9]|14[57]|17[678])[0-9]{8}$/;
            return reg.test(value)
}
// 邮箱
const email=(value)=>{
            let reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
            return reg.test(value)
}
// 身份证
const IDcard=(value)=>{
            let reg =  /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;
            return reg.test(value)
}
// 含有非法字符(只能输入字母、汉字)
const regexn=(value)=>{
            let reg = /^[\s\u4e00-\u9fa5a-z0-9_-]{0,}$/;
            return reg.test(value)
}
// 正整数
const integer=(value)=>{
            let reg = /^[1-9]\d*$/
            return reg.test(value)
}
// 正整数（包括0）
const integerZero=(value)=>{
            let reg = /^[+]{0,1}(\d+)$/
            return reg.test(value)
}
    
    
    /**
     * 注意:  定义type 规则时 不用做非空验证 
     *        只需要传入 required:true 即可
     * */
    /*保留两位小数*/
    const isvalidateMoney = (rule, value, callback) => {
        if(value != null && value != "") {
            if(!validateMoneyNumber(value)) {
            callback(new Error('请输入正确的数字，最多保留两位小数!'))
            } else {
                callback()
            }
        }
        else{
            callback();
        }
    }
    /*验证QQ号码*/
    const isvalidateQQ= (rule, value, callback) => {        
        if(value != null && value != "") {
            if(!qq(value)) {
                callback(new Error('您输入的QQ号不正确!'))
            } else {
                callback()
            }
        }
        else{
            callback();
        }
    }
    /*验证手机号*/
       const isvalidateMobile= (rule, value, callback) => {        
        if(value != null && value != "") {
            if(!mobile(value)) {
                callback(new Error('您输入的手机号不正确!'))
            } else {
                callback()
            }
        }
        else{
            callback();
        }
    }
    /*邮箱*/
       const isvalidateEmail= (rule, value, callback) => {        
        if(value != null && value != "") {
            if(!email(value)) {
                callback(new Error('您输入的邮箱不正确!'))
            } else {
                callback()
            }
        }
        else{
            callback();
        }
    }
    /*身份证*/
       const isvalidateIDCard= (rule, value, callback) => {        
        if(value != null && value != "") {
            if(!IDcard(value)) {
                callback(new Error('您输入的身份证不正确!'))
            } else {
                callback()
            }
        }
        else{
            callback();
        }
    }
       
       /*含有非法字符(只能输入字母、汉字)*/
       const isvalidateRegexn= (rule, value, callback) => {        
        if(value != null && value != "") {
            if(!regexn(value)) {
                callback(new Error('含有非法字符(只能输入字母、汉字)!'))
            } else {
                callback()
            }
        }
        else{
            callback();
        }
    }
        /*请输入正整数*/
       const isvalidateInteger= (rule, value, callback) => {        
        if(value != null && value != "") {
            if(!integer(value)) {
                callback(new Error('请输入正整数!'))
            } else {
                callback()
            }
        }
        else{
            callback();
        }
    }
        /*请输入正整数(包括0）*/
       const isvalidateIntegerZero= (rule, value, callback) => {        
        if(value != null && value != "") {
            if(!integerZero(value)) {
                callback(new Error('请输入正整数或0!'))
            } else {
                callback()
            }
        }
        else{
            callback();
        }
    }
    export default {
        isvalidateMoney,
        isvalidateQQ,
        isvalidateMobile,
        isvalidateEmail,
        isvalidateIDCard,
        isvalidateRegexn,
        isvalidateInteger,
        isvalidateIntegerZero
    }