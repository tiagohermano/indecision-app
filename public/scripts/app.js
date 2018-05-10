'use strict';

var appRoot = document.getElementById('app');

var buttonActive = false;

var onToggleDetails = function onToggleDetails() {
  buttonActive = !buttonActive;
  renderApp();
};

var renderApp = function renderApp() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Visibility Toggle'
    ),
    buttonActive ? React.createElement(
      'div',
      null,
      React.createElement(
        'button',
        { onClick: onToggleDetails },
        'Hide Details'
      ),
      React.createElement(
        'p',
        null,
        'Details'
      )
    ) : React.createElement(
      'button',
      { onClick: onToggleDetails },
      'View Details'
    )
  );

  ReactDOM.render(template, appRoot);
};

renderApp();
