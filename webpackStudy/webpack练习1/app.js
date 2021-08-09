import React, { Component } from 'react'

import Test from './view/test'
export default class App extends Component {
  constructor() {
    super()
    this.message = 'hello react'
  }
  toest() {
    console.log(this.message)
  }
  render() {
    return (
      <div className="testName">
        <div className="container">{this.message}</div>
        <img src="./public/image/test.jpg" alt="" />
        <Test />
      </div>
    )
  }
}
