const foo: string = "hello typescript";

interface Animal {
  name: string;
  say: (name: string) => void;
}

class Cat implements Animal {
  name: string;
  constructor(name:string) {
    this.name = name
  }
  say() {
    console.log(this.name);
  }
}

const cat = new Cat('123');

const Pr = Promise.resolve(123)

cat.say(123);
