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

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const appRoot = document.getElementById('app');
const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length >  0 ? 'Here are your options' : 'No options'}</p>
      <p>{app.options.length}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should i do?</button>
      <button onClick={onRemoveAll}>Remove All Items</button>
      <ol>
        {app.options.map((option) => <li key={option}>{option}</li>)}
      </ol>
      {/* {app.options && app.options.length > 0 ? <p>Here are your options: {app.options}</p> : <p>No options</p>} */}
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
}

renderApp();
