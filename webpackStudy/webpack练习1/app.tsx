import React, { Component } from "react";

export default class App extends Component {
  constructor(public message:string) {
    super();
    this.message = "hello react";
  }
  toest() {
    console.log(this.message);
  }
  render() {
    return <div>{this.message}</div>;
  }
}