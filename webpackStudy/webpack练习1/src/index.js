import '../public/less/index.less';

import ReactDOM from "react-dom";
import App from "../app.js";
import React from "react";

function run(gen) {
    const arg = [].slice.call(arguments, 1),it;
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

ReactDOM.render(<App />, document.getElementById("app"));
