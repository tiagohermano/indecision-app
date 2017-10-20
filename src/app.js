console.log('app.js is running');

var template2 = (
  <div>
    <h1>Tiago</h1>
    <p>Age: 21</p>
    <p>Location: Brazil</p>
  </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);
