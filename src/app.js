console.log('app.js is running');

const app = {
  title: 'Indecision App',
  subtitle: 'This is some info',
  options: [],
}

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderApp();
  }
}

const onRemoveAll = () => {
  app.options = [];
  renderApp();
}

const appRoot = document.getElementById('app');
const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length >  0 ? 'Here are your options' : 'No options'}</p>
      <p>{app.options.length}</p>
      <ol>
        <li>Item one</li>
        <li>Item two</li>
      </ol>
      {/* {app.options && app.options.length > 0 ? <p>Here are your options: {app.options}</p> : <p>No options</p>} */}
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
        <button onClick={onRemoveAll}>Remove All Items</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
}

renderApp();
