import * as React from 'react';
import { render } from 'react-dom'
var {createProvider} = require('koa-cola/client');

var Provider = createProvider([
    require('../api/controllers/IndexController').default,
],{
    index : require('./pages/index').default,
});

render(<Provider />, document.getElementById('app'))