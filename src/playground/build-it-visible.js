class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);

    this.state = {
      visibility: false,
    }
  }

  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility,
      }
    })
  }

  render() {
    return(
      <div>
        <h1>Visibility Toggle</h1>
        { this.state.visibility? (
          <div>
            <button onClick={this.handleToggleVisibility}>Hide Details</button>
            <p>Details</p>
          </div>
        )
        : <button onClick={this.handleToggleVisibility}>View Details</button> }
      </div>
    )
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
