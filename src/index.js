// 重写了Vue对象
import _ from './util';
import installGlobalAPI from './global-api';

function Vue(options) {
    this._init(options);
}
// js原型对象
Vue.prototype = {
    constructor: Vue,
    // 初始化实例
    ...require('./instance/init'),
    // 渲染节点
    ...require('./instance/compile'),
    // 初始化节点
    ...require('./instance/element'),
    // 监听数据变化，computed，watch等
    ...require('./instance/bindings'),
    // 初始化options
    ...require('./instance/scope'),
    // 解析、渲染DOM
    ...require('./api/lifecycle'),
    // 处理data
    ...require('./api/data'),
    // 处理DOM
    ...require('./api/dom')
};

Vue.options = {
    directives: {...require('./directives')},
    components: {}
};

installGlobalAPI(Vue);

module.exports = window.Vue = _.Vue = Vue;
