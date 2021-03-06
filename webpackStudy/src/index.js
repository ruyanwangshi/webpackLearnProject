import './css/index.css'
import './testJs/test.ts'
import Img from './img/test.jpg'

function test() {
  const img = new Image();
  img.src = Img;
  document.documentElement.appendChild(img)

  const Icon = document.createElement('i')
  Icon.className = 'iconfont icon-arrow-up-circle icon-style'
  document.documentElement.appendChild(Icon)
}
test()
console.log('更改测试')

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

// let a = 1,b = 2;
const s1 = step(foo)
const s2 = step(bar)

// s2();



console.log('我是入口')
