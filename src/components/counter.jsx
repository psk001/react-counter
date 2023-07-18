import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
  };

  // constructor(){
  //   super();
  //   this.handleIncrement= this.handleIncrement.bind(this;)
  // }

  formatCount = () => {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  };

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    // console.log(classes);
    return classes;
  }

  handleIncrement = () => {
    let cnt = this.state.value;
    cnt++;
    this.setState({ value: cnt });
  };

  render() {

    return (
      // <React.Fragment>
      <div>
        <span className={this.getBadgeClasses()}> {this.formatCount()}</span>
        <button
          // onClick={ () => this.handleIncrement(product)}
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button onClick={this.props.onDelete} className="btn btn-danger btn-sm m2">Delete</button>
        {/* </React.Fragment> */}
      </div>
    );
  }
}

export default Counter;
