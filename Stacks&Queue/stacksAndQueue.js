class Stack{
    constructor(){
        this.items = []
    }

    push(item){
        return this.items.push(item)
    }

    pop(){
        return this.items.pop()
    }

    peek(){
        return this.items[this.items.length - 1]
    }

    isEmpty(){
        return this.items.length===0
    }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);