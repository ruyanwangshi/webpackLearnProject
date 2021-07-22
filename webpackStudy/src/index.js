import './css/test.css'
import './testJs/test.ts'

// 测试可选链
const obj = {
  name: {
    title: ''
  }
}



let a = 1
let b = 2

function* foo() {
  a++
  yield
  b = b * a
  a = (yield b) + 3
}

function* bar() {
  b--
  yield
  a = (yield 8) + b
  b = a * (yield 2)
  a = (yield b) + 3
}

function step(gen) {
  let it = gen()
  let last
  return function () {
    last = it.next(last).value
  }
}

let a = 1,b = 2;
const s1 = step(foo)
const s2 = step(bar)

// s2();



console.log('我是入口')
