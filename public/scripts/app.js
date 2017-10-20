'use strict';

console.log('app.js is running');

var template2 = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Tiago'
  ),
  React.createElement(
    'p',
    null,
    'Age: 21'
  ),
  React.createElement(
    'p',
    null,
    'Location: Brazil'
  )
);
var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);
