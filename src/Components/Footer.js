import React, { Component } from "react";

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return <h3 className="footer">{this.props.copyright}</h3>;
  }
}

export default Footer;
