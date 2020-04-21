## 原型链继承
```js
function Parent(){
    this.name = 'kevin'
}
Parent.prototype.getName = function(){
    console.log(this.name)
}

function Child(){

}
Child.prototype = new Parent();
var child1 = new Child()
console.log(child1,getName()) // kevin
```

1.引用类型的属性被所有实例共享
2.在创建child实例时，不能像Parent传参

## 借用构造函数(经典继承)

```js
function Parent(){
    this.names = ['kevin', 'daisy']
}
function Child(){
    Parent.call(this)
}
var child1 = new Child()
child1.name.push('newPush')
console.log(child1.names) // ['kevin','daisy','newPush']

var child2 = new Child()
console.log(child2.names) // ['kevin','daisy']
```

优点:
1.避免了引用类型的属性被所有实例共享
2.可以在Child中向Parent传参
缺点:
方法都在构造函数中定义，每次创建实例都会创建一遍方法

## 组合继承
原型链继承和经典集成双剑合璧
```js
function Parent(name){
    this.name = name;
    this.colors = ['red', 'blue','green']
}
Parent.prototype.getName = function(){
    console.log(this.name)
}
function Child(name,age){
    Parent.call(this.name)
    this.age = age
}

Child.prototype = new Parent()
Child.prototype.constructor = Child

var child1 = new Child('kevin', '18')
child1.colors.push('black')

console.log(child1.name) // kevin
console.log(child1.age) // 18
console.log(child1.colors) // ['red', 'blue', 'green', 'black']

var child2 = new Child('daisy', '20')
console.log(child2.name) // daisy
console.log(child2.age) // 20
console.log(child2.colors) // ['red', 'blue', 'green']
```
优点:
融合原型链继承和构造函数的有点，是JavaScript最常用继承模式.

## 原型式继承
```js
function createObj(o){
    function F(){}
    F.prototype = o;
    return new F()
}
```
缺点:
包含引用类型的属性值始终都会共享相应的值，这点跟原型链继承一样。


## 寄生式继承
创建一个仅用于封装继承过程的函数，该函数在内部以某种形式来做增强对象，最后返回对象
```js
function createObj(o){
    var clone = Object.create(o)
    clone.sayName = function(){
        console.log('h1')
    }
    return clone
}
```
缺点:
跟借用构造函数模式一样，每次创建对象都会创建一遍方法

## 寄生组合式继承
```js
function object(o){
    function F(){}
    F.prototype = o
    return new F()
}
function prototype(child,parent){
    var prototype = object(parent.prototype)
    prototype.constructor = child
    child.prototype = prototype
}
```