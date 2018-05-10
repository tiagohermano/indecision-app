const appRoot = document.getElementById('app');

let buttonActive = false;

const onToggleDetails = () => {
  buttonActive = !buttonActive;
  renderApp();
}

const renderApp = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      { buttonActive? (
        <div>
          <button onClick={onToggleDetails}>Hide Details</button>
          <p>Details</p>
        </div>
      )
      : <button onClick={onToggleDetails}>View Details</button> }
    </div>
  );

  ReactDOM.render(template, appRoot);
}

renderApp();
