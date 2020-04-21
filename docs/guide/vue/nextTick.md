### nextTick

#### 异步更新队列
`Vue在更新Dom时是异步执行的，只要侦听到数据变化时，Vue将开启一个队列，并缓冲在同一事件循环中发生的所有数据变更。如果同一个watcher被多次触发，只会被推入到队列中一次。这种在缓冲时去除重复数据对于避免不必要的计算和DOM操作非常重要。然后，在下一个事件循环'tick'中，Vue刷新队列并执行实际(已去重的)工作。Vue在内部对异步队列尝试使用原生的Promise.then、Mutation Observer和setImmediat，如果执行环境不支持，则会采用setTimeout(fn,0)代替。`

#### Watcher队列
`当某个响应式数据发生变化的时候，它的setter函数会通知闭包中的Dep,Dep则会调用它管理的所有Watch对象。触发Watch对象的update实现`

`当异步执行update的时候，会调用queueWatcher函数`

#### nextTick实现原理
`nextTick执行的目的是在microtask或者task中推入一个function,在当前栈执行完毕(也许还会有一些排在前面的需要执行的任务)以后执行nextTick传入的function`

#### 为什么用microtask
`根据HTML Standard，在每个task运行完以后，UI都会重渲染，那么在microtask中就完成数据更新，当前task结束就可以得到最新的。反之，如果新建一个task来做数据更新，那么渲染就会进行两次。`