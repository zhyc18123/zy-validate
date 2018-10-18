
import button from './button.vue' // 导入组件
const zyPcUi = {
    install (Vue, options) {
        Vue.component(button.name, button)
    }
}
export default zyPcUi // 导出..