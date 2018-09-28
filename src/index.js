class SmartCalculator {
  constructor(initialValue) {
      this._number = ' ' + initialValue;
  }

  toString() { // переопределение бызовой функции
    return eval(this._number);
  }

  add(operand = 0) {
      this._number = this._number + '+' + operand;
      return this; // для последовательного вызова функции
  }

  subtract(operand = 0){
      this._number = this._number + '-' + operand;
      return this;
  }

  multiply(operand = 1) {
      this._number = this._number + '*' + operand;
      return this;
  }

  devide(operand = 1){
    this._number = this._number + '/' + operand;
      return this;
  }

  pow(operand = 1){
      this._number = this._number + '**' + operand;
      return this;
  }
}

module.exports = SmartCalculator;
