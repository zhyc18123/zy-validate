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
            let reg = /^1[3456789]\d{9}$/;
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
const install = function (Vue, opts = {}) {
    /**
     * 参数 item 
     * required true  必填项
     * maxLength  字符串的最大长度
     * min 和 max 必须同时给 min < max  type=number
     * type 邮箱      email
     *      QQ        qq
     *      手机号     mobile
     *      身份证     IDCard
     *      非法字符（字母，汉字）     regexn
     *      正整数     integer 
     *      正整数（0） integerZero
     *      各种自定义类型   定义在 ./validate 中    持续添加中.......
     * */
    
    Vue.prototype.filterRules = function (item){
        let rules = [];
        if(item.required){
           rules.push({ required: true, message: '该输入项为必填项!', trigger: 'blur' });
        }
        if(item.maxLength){
           rules.push({ min:1,max:item.maxLength, message: '最多输入'+item.maxLength+'个字符!', trigger: 'blur' })
        }
        if(item.min&&item.max){       
           rules.push({ min:item.min,max:item.max, message: '字符长度在'+item.min+'至'+item.max+'之间!', trigger: 'blur' })
        }
        if(item.type){
            let type = item.type;
            switch(type) {
                case 'email':
                    rules.push( { validator: isvalidateEmail, trigger: 'blur,change' });
                    break;   
                case 'qq':
                    rules.push( { validator: isvalidateQQ, trigger: 'blur,change' });
                    break;
                case 'mobile':
                    rules.push( { validator: isvalidateMobile, trigger: 'blur,change' });
                    break;   
                case 'IDCard':
                    rules.push( { validator: isvalidateIDCard, trigger: 'blur,change' });
                    break;    
                case 'regexn':
                    rules.push( { validator: isvalidateRegexn, trigger: 'blur,change' });
                    break;    
                case 'integer':
                    rules.push( { validator: isvalidateInteger, trigger: 'blur,change' });
                    break;   
                case 'integerZero':
                    rules.push( { validator: isvalidateIntegerZero, trigger: 'blur,change' });
                    break;        
                default:
                    rule.push({});
                    break;
            }
        }
       
     
        return rules;
    };
};
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}
export default {
    install,
}