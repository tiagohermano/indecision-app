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
