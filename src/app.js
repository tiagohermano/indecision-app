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

const user = {
  name: 'Tiago',
  location: 'Brazil',
  age: 21
}

function getLocation(location) {
  if(location){
    return <p>Location: {location}</p>;
  } else {
    return <p>Location: Unknown</p>
  }
}

const template2 = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);
const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
