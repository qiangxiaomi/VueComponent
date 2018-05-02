import Vue from '../src/index';
// 组件定义：global-api.js
var MyComponent = Vue.extend({
    template: '<p>{{message}}</p>'
});
// 组件注册
Vue.component('my-component', MyComponent);

// 初始化app这个Vue实例的时候，当遍历解析到my-component时，由于进行过组件注册，所以需要特殊处理
const app = new Vue({
    el: '#app'
});

window.app = app;

