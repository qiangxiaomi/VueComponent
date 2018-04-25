import _ from './util';
import installGlobalAPI from './global-api';

function Vue(options) {
    this._init(options);
}
// js原型对象
Vue.prototype = {
    constructor: Vue,
    ...require('./instance/init'),
    ...require('./instance/compile'),
    ...require('./instance/element'),
    ...require('./instance/bindings'),
    ...require('./instance/scope'),
    ...require('./api/lifecycle'),
    ...require('./api/data'),
    ...require('./api/dom')
};

Vue.options = {
    directives: {...require('./directives')},
    components: {}
};

installGlobalAPI(Vue);

module.exports = window.Vue = _.Vue = Vue;
