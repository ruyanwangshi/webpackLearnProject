import Vue from 'vue'
// 这辈子能不接触到vue2+ts的就都别接触了
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
