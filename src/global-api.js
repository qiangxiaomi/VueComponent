import _ from './util';

module.exports = function (Vue) {
    /**
     * 组件构造器
     * 返回组件构造函数
     * @param extendOptions {Object} 组件参数
     * @returns {VueComponent}
     */
    Vue.extend = function (extendOptions) {
        let Super = this;
        extendOptions = extendOptions || {};
        let Sub = createClass();
        // Object.create()创建的对象是没有Object的原型方法和属性的(toString,hasOwnProperty等)，以Super.prototype作为它的原型
        Sub.prototype = Object.create(Super.prototype);
        // Sub.prototype.constructor指向了Super.prototype,被重写了
        Sub.prototype.constructor = Sub;
        // 将原始的Vue的options和组件的options进行合并
        Sub.options = _.mergeOptions(Super.options, extendOptions);
        return Sub;
    };

    /**
     * 构造组件构造函数本身
     * 为什么不能直接定义VueComponent,而要每声明一个组件,都new一个构造函数呢?
     * 因为在extend函数中,我们把options当做VueComponent的自定义属性,
     * 那么就意味着如果我们一直使用同一个构造函数的话, 那么所有组件最终的options都会是一样的
     * @returns {Function}
     */
    function createClass() {
        return new Function('return function VueComponent(options){ this._init(options)}')();  // eslint-disable-line
    }

    /**
     * 注册组件
     * @param id
     * @param definition
     * @returns definition
     */
    Vue.component = function (id, definition) {
        // this.options为Vue本身自带选项，包括components和directives
        this.options.components[id] = definition;
        console.log('===========================this.options', this.options);
        return definition;
    };
};
