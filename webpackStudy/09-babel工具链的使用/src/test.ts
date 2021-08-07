const foo: string = "hello typescript";

interface Animal {
  name: string;
  say: (name: string) => void;
}

class Cat implements Animal {
  name: string;
  say(name: string) {
    console.log(name);
  }
}

const cat = new Cat();

cat.say("123");
