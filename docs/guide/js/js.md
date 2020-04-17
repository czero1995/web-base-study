
## 防抖

## 节流

## bind
 
## call

## apply

## 深克隆

## 原型链继承 

## 如何实现一个new
```js
function _new(fn, ...arg) {
    const obj = Object.create(fn.prototype);
    const ret = fn.apply(obj, arg);
    return ret instanceof Object ? ret : obj;
}
```
