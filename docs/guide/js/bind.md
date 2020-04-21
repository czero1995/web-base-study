
## bind
```js
Function.prototype.bind2 = function(context){
    if(typeof this !== 'function'){
        throw new Error('is not a function')
    }
    var self = this
    var args = Array.prototype.slice.call(arguments,1)
    

    var fBound = function(){
        var bindArgs = Array.prototype.slice.call(arguments);
        return self.apply(this instanceof fBound ? this : context , args.concat(bindArgs))
    }

    fBound.prototype = this.prototype
    return fBound;
}
```