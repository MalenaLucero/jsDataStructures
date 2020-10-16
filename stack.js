//functions: push, pop, peek, length

var Stack = function(){
    this.count = 0
    this.storage = {}

    //Adds a value onto the end of the stack
    this.push = function(value){
        this.storage[this.count] = value
        this.count++
    }

    //Removes a value at the end of the stack
    this.pop = function(){
        if(this.count === 0){
            return undefined
        }
        this.count--
        var result = this.storage[this.count]
        delete this.storage[this.count]
        return result
    }

    this.peek = function(){
        return this.storage[this.count-1]
    }

    this.size = function(){
        return this.count
    }
}

var myStack = new Stack()
console.log('size', myStack.size())
myStack.push('uno')
myStack.push('dos')
myStack.push('tres')
console.log('size', myStack.size())
console.log('pop', myStack.pop())
console.log('size', myStack.size())
console.log('peek', myStack.peek())