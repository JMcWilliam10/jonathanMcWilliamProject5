import React, { Component } from "react";

class Food extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return <h3 className="food">{this.props.copyright}</h3>;
  }
}

export default Food;
