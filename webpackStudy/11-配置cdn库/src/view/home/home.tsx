import Vue from 'vue';
import Component from 'vue-class-component'

import './home.less'

@Component({})
export default class Home extends Vue {
    render() {
        return <div class='home-container'>home页面</div>
    }
}