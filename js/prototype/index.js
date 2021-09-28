// eslint-disable-next-line max-classes-per-file
class Sportsman {
  constructor(name){
    this.name = name;
  }

  run () {
    console.log(`${this.name} is running`);
  }
}

class Swimmer extends Sportsman {
  constructor(name, swimStyle) {
    super(name);
    this.swimStyle = swimStyle;
  }

  swim() {
    console.log(`${this.name} is swimming ${this.swimStyle}`);
  }
}

const obj1 = {
  names: 'James'
}

console.log(obj1);

const obj = new Sportsman('John');
obj.run();
console.log(obj);

const swimObj = new Swimmer("John", "breakstroke");
swimObj.swim();
console.log(swimObj);