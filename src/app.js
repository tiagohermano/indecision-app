class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePickOption = this.handlePickOption.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);

    this.state = {
      options: []
    }
  }

  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: [],
      }
    });
  }

  handleAddOption(option) {
    if (!option) {
      return 'Enter a valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    this.setState((prevState) => {
      return {
        options: prevState.options.concat([option])
      }
    })
  }

  handlePickOption() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }

  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action
          hasOptions={this.state.options.length > 0}
          handlePickOption={this.handlePickOption}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    )
  }
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  );
}

const Action = (props) => {
  return (
    <div>
      <button
        onClick={props.handlePickOption}
        disabled={!props.hasOptions}
        >
        What should i do?
      </button>
    </div>
  );
}

const Option = (props) => {
  return (
    <div>{props.optionText}</div>
  );
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.state = {
      error: undefined
    }
  }

  onFormSubmit(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState({ error });
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onFormSubmit}>
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.map(option => <Option key={option} optionText={option} />)}
      <Option />
    </div>
  );
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
