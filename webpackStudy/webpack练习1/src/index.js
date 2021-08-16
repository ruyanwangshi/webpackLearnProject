// import React from "react";
// import ReactDOM from "react-dom";
// import App from "../app.js";
import '../public/less/index.less';
import Vue from 'vue';
// const Home = () => import('../view/home.vue') 
import Home from '../view/home.vue';
import _ from 'lodash'

console.log('test')

new Vue({
    render: h => h(Home)
}).$mount('#root')


function run(gen) {
    let arg = [].slice.call(arguments, 1),it;
    it = gen.apply(this, args);
    return Promise.resolve().then(function handleNext(value) {
        const next = it.next(value);
        return (function handleResult(next){
            if(next.done){
                return next.value;
            } else {
                return Promise.resolve(next.value).then(handleNext, function handleErr(err){
                    return Promise.resolve(it.throw(err)).then(handleResult)
                })
            }
        })(next);
    })
}

// ReactDOM.render(<App />, document.getElementById("app"));
