class BaseClass {
  constructor(param = 0) {
    this.param = param;
  }
  plus(...numbers) {
    for (let i = 0; i < numbers.length; i++) {
      const numbersinArrayFor = numbers[i];
      this.param += numbersinArrayFor;
    }
    return this;
  }
  minus(...numbers) {
    if (typeof this.param === "number") {
      numbers.map((num) => {
        return (this.param -= num);
      });
      return this;
    } else {
      this.param = this.param.slice(0, -numbers);
      return this;
    }
  }
  multiply(multiplier) {
    if (typeof this.param === "number") {
      this.param *= multiplier;
      return this;
    } else {
      this.param = this.param.repeat(multiplier);
      return this;
    }
  }
  divide(divider) {
    if (typeof this.param === "number") {
      this.param /= divider;
      return this;
    } else {
      let k = Math.floor(this.param.length / divider);
      this.param = this.param.slice(0, k);
      return this;
    }
  }
  get() {
    return this.param;
  }
}
const InstanceBase = new BaseClass(80);

// IntBuilder
class IntBuilder extends BaseClass {
  constructor(param = 0) {
    super(param);
  }
  mod(reminder) {
    this.param %= reminder;
    return this;
  }
  static random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
}
const instanceInt = new IntBuilder(10);

// StringBuilder
function StringBuilder(param = "") {
  this.param = param;
}
StringBuilder.prototype = Object.create(BaseClass.prototype);

StringBuilder.prototype.remove = function (str) {
  this.param = this.param.split(str).join("");
  return this;
};
StringBuilder.prototype.sub = function (from, num) {
  this.param = this.param.split("").splice(from, num).join("");
  return this;
};
const instanceStr = new StringBuilder("Hello");
