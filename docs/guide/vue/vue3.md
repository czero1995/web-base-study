### Vue3.0源码基础实现

```js
 const proxyData = new Proxy(data, {
   get(target,key,receive){ 
     // 只处理本身(非原型)的属性
     const ownKeys = Reflect.ownKeys(target)
     if(ownKeys.includes(key)){
       console.log('get',key) // 监听
     }
     const result = Reflect.get(target,key,receive)
     return result
   },
   set(target, key, val, reveive){
     // 重复的数据，不处理
     const oldVal = target[key]
     if(val == oldVal){
       return true
     }
     const result = Reflect.set(target, key, val,reveive)
     console.log('set', key, val)
     return result
   },
   deleteProperty(target, key){
     const result = Reflect.deleteProperty(target,key)
     console.log('delete property', key)
     console.log('result',result)
     return result
   }
 })

  // 声明要响应式的对象,Proxy会自动代理
 const data = {
   name: "zhangsan",
   age: 20,
   info: {
     address: "北京" // 需要深度监听
   },
   nums: [10, 20, 30]
 };

```