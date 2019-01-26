
class calculator {
  constructor (x,y){
      this.x = x;
      this.y = y;
  }
    add() {
      this.result = this.x + this.y;
  }
  displayResult(){
    return console.log("the addition of "+this.x+" and "+this.y+" is :: "+this.result);
  }
}
module.exports =  calculator;

