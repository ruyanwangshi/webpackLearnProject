import Vue from 'vue'
import Component from 'vue-class-component'
import './pubilc/css/base.less'

import Home from './src/view/home/home'

@Component({
  data() {
    return {
      message: 'hello vue',
    }
  },
})
export default class App extends Vue {
  private message: string
  render() {
    return (<div class='test-name'>{this.message}
    <Home/>
    </div>)
  }
}
