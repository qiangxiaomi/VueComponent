import Vue from '../src/index';
// 组件定义
var MyComponent = Vue.extend({
    template: '<p>{{message}}</p>'
});
// 组件注册
Vue.component('my-component', MyComponent);

const app = new Vue({
    el: '#app'
});

window.app = app;

