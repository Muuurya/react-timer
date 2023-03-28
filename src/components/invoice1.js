import React, { Component } from "react";

export default class invoice1 extends Component {
  render() {
    const { invoice1, invoice2, invoice3, invoice4 } = this.props;
    return (
      <div>
        <h1>{invoice1}</h1>
      </div>
    );
  }
}
