import _ from '../util';
import config from '../config';

module.exports = {
    bind: function () {
        if (!this.el.__vue__) {
            // 判断该组件是否已经被挂载
            // document.createComment创建并返回一个注释节点 <!--b-component-->
            this.anchor = document.createComment(`${config.prefix}component`);
            // this.el: <my-component message="Hello World!"></my-component>
            _.replace(this.el, this.anchor);// 插入anchor，移走el
            console.log('=======================this.el', this.el);
            // this.expression: my-component
            this.setComponent(this.expression);
        }
    },

    update: function () {

    },

    /**
     * @param value {String} 组件标签名, 如 "my-component"
     */
    setComponent: function (value) {
        if (value) {
            // this.vm:Vue,
            this.Component = this.vm.$options.components[value];
            console.log('========================this.component', this.Component);
            this.ComponentName = value;
            this.mountComponent();
        }
    },

    /**
     * 构建、挂载组件实例
     */
    mountComponent: function () {
        // 构建组件实例
        let newComponent = this.build();
        console.log('============================newComponent', newComponent);
        // 挂载组件
        newComponent.$before(this.anchor);
        console.log('=============================after newComponent', newComponent);
    },

    /**
     * 构建组件实例
     * @returns {VueComponent}
     */
    build: function () {
        if (this.Component) {
            let options = {
                name: this.ComponentName,
                el: this.el.cloneNode(),
                parent: this.vm,
                isComponent: true
            };
            // 实例化组件
            let child = new this.Component(options);
            return child;
        }
    }
};
