let lang = require('./lang');
let extend = lang.extend;

extend(exports, lang);
extend(exports, require('./dom'));
extend(exports, require('./debug'));
extend(exports, require('./options'));
