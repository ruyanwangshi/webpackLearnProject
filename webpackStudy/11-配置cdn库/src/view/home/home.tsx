import Vue from 'vue'
import Component from 'vue-class-component'

import './home.less'

@Component({
  data() {
    return {
      number: 123,
    }
  },
})
export default class Home extends Vue {
  private number: number
  changeNumber() {
      this.number = 456
      console.log('测试')
  }
  render() {
    return (
      <div class="home-container">
        {this.number}
        <button onClick={this.changeNumber}>点击</button>
      </div>
    )
  }
}
