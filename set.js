function mySet(){
    var collection = []

    //checks the presence of an element and returns true or false
    this.has = function(element){
        return (collection.indexOf(element) !== -1)
    }

    //returns all the values in the set
    this.values = function(){
        return collection
    }

    //adds an element to the set
    this.add = function(element){
        if(!this.has(element)){
            collection.push(element)
            return true
        }
        return false
    }

    //removes an element from the set
    this.remove = function(element){
        if(this.has(element)){
            index = collection.indexOf(element)
            collection.splice(index, 1)
            return true
        }
        return false
    }

    this.size = function(){
        return collection.length
    }

    //returns the union of two sets
    this.union = function(otherSet){
        var unionSet = new mySet()
        var firstSet = this.values()
        var secondSet = otherSet.values()
        firstSet.forEach(function(e){
            unionSet.add(e)
        })
        secondSet.forEach(function(e){
            unionSet.add(e)
        })
        return unionSet
    }

    //returns the intersection of two sets
    this.intersection = function(otherSet){
        var intersectionSet = new mySet()
        var firstSet = this.values()
        firstSet.forEach(function(e){
            if(otherSet.has(e)){
                intersectionSet.add(e)
            }
        })
        return intersectionSet
    }

    //returns the difference of two sets
    this.difference = function(otherSet){
        var differenceSet = new mySet()
        var firstSet = this.values()
        firstSet.forEach(function(e){
            if(!otherSet.has(e)){
                differenceSet.add(e)
            }
        })
        return differenceSet
    }
}

var setA = new mySet()
var setB = new mySet()
setB.add('a')
setB.add('b')
setA.add('a')
setA.add('c')
console.log(setA.values())
console.log(setA.size())
console.log('union', setA.union(setB).values())
console.log('intersection', setA.intersection(setB).values())
console.log('difference', setA.difference(setB).values())