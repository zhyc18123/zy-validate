# 验证form表单插件

# 使用方式

# 安装和引入
        npm install zy-validate
        在main.js引入
        import validate from 'zy-validate/dist/zy-validate.js'
        Vue.use(validate)

# 参数说明
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
         传入一个item对象，里面包含required(必需）,maxLength,min,max,type属性，如：
         item={required:true,maxLength:100,min:1,max:20,type:'qq'}
# 注意
    min和max必须同时存在

