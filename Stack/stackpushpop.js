

class Node{
    constructor(val,next){
      this.val = val;
      this.next = next;
    }
  }
  
  class Stack{
    constructor(){
      this.item=[];
      this.count=0;
    }
    push(x){
      this.item[this.count] = x;
      console.log(`${x} is added in a stack of size ${this.count}`);
      this.count++;
      this.count-1
    }
    pop(){
  if(this.item.length >0){
    this.item.pop();
    console.log(`${this.item} is removed in a stack of size ${this.count}`);
    this.count--
  }
    }
  }
  
  let newstack = new Stack();
  
  newstack.push(2)
  newstack.push(2)
  newstack.push(2)
  newstack.push(2)
  newstack.push(2)
  newstack.push(2)
  newstack.push(2)
  newstack.push(2)
  newstack.push(2)
  newstack.push(2)
  newstack.pop()
  newstack.pop()
  newstack.pop()
  newstack.pop()
  newstack.pop()
  newstack.pop()
  newstack.pop()
  newstack.pop()
  newstack.pop()
  
  console.log(newstack)