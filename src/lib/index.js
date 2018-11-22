import {
        isvalidateMoney,
        isvalidateQQ,
        isvalidateMobile,
        isvalidateEmail,
        isvalidateIDCard,
        isvalidateRegexn,
        isvalidateInteger,
        isvalidateIntegerZero
    } from './validate.js'
exports.install = function (Vue, options) {
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