class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleReset = this.handleReset.bind(this);

    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    try {
      const stringCount = localStorage.getItem('count');
      const count = JSON.parse(stringCount);

      if (count) {
        this.setState(() => ({ count }));
      }
    } catch (e) {
      // Do nothing
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.count !== this.state.count) {
      const json = JSON.stringify(this.state.count);
      localStorage.setItem('count', json);
    }
  }

  handleAddOne() {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }

  handleMinusOne() {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  }

  handleReset() {
    this.setState(() => ({ count: 0 }));
  }

  render() {
    return(
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    )
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'));
