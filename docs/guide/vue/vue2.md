### Vue2.0基础源码实现


```js
 function defineReactive(target, key, value) {
   //深度监听
   observer(value);
 
   Object.defineProperty(target, key, {
     get() {
       return value;
     },
     set(newValue) {
       //深度监听
       observer(value);
       if (newValue !== value) {
         value = newValue;
 
         updateView();
       }
     }
   });
 }
 
 function observer(target) {
   if (typeof target !== "object" || target === null) {
     return target;
   }
 
   if (Array.isArray(target)) {
     target.__proto__ = arrProto;
   }
 
   for (let key in target) {
     defineReactive(target, key, target[key]);
   }
 }
 
 // 重新定义数组原型
 const oldAddrayProperty = Array.prototype;
 const arrProto = Object.create(oldAddrayProperty);
 ["push", "pop", "shift", "unshift", "spluce"].forEach(
   methodName =>
     (arrProto[methodName] = function() {
       updateView();
       oldAddrayProperty[methodName].call(this, ...arguments);
     })
 );
 
 // 视图更新
  function updateView() {
   console.log("视图更新");
 }
 
 // 声明要响应式的对象
 const data = {
   name: "zhangsan",
   age: 20,
   info: {
     address: "北京" // 需要深度监听
   },
   nums: [10, 20, 30]
 };
 
 // 执行响应式
 observer(data);

```

