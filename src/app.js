console.log('app.js is running');

const app = {
  title: 'Indecision App',
  subtitle: 'This is some info',
  options: ['one']
}

const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length >  0 ? 'Here are your options' : 'No options'}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
    {/* {app.options && app.options.length > 0 ? <p>Here are your options: {app.options}</p> : <p>No options</p>} */}
  </div>
);

let count = 0;

const addOne = () => {
  count++;
  renderCounterApp();
}

const minusOne = () => {
  count--;
  renderCounterApp();
}

const resetCount = () => {
  count = 0;
  renderCounterApp();
}


const appRoot = document.getElementById('app');

const renderCounterApp = () => {
  const template2 = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={resetCount}>Reset Count</button>
    </div>
  );

  ReactDOM.render(template2, appRoot);
}

renderCounterApp();
