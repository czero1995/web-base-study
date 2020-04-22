# Event Loop
`Node中的Event Loop和浏览器是完全不相同的东西。`

Node.js采用V8作为js的解析引擎，而I/O处理方面使用了自己设计的libuv,libuv是一个机遇事件驱动的跨平台抽象层，封装了不同操作系统一些底层特性，对外提供统一的API，事件循环机制也是它里面的实现。

Node.js的运行机制如下:
V8引擎解析JavaScript脚本。
解析后的代码，调用Node Api
libuv库负责Node API的执行。它将不同的任务分配给不同的线程,形成一个Event Loop(事件循环),以异步的方式将任务的执行结果返回给v8引擎。
v8引擎再将结果返回给用户。

## 六个阶段
其中libuv引擎中的事件循环分为6个阶段，它们会按照顺序反复运行。每当进入某一个阶段的时候，都会从对应的回调队列中取出函数去执行。当队列为空或者执行的回调函数数量到达系统设定的阈值,就会心如下一个阶段。

外部输入数据-轮训阶段-坚持噶阶段-关闭时间回调阶段-定时器检测阶段-I/O事件回调阶段-闲置阶段-轮训阶段

timer阶段:这个阶段执行timer(setTimeout、setInterval)的回调
I/O callbacks阶段:处理一些上一轮循环中的少数未执行的I/O回调
idle,prepare阶段:仅node内部使用
poll阶段:获取新的I/O事件，适当的条件下node将堵塞在这里
check阶段:执行setImmediate()的回调
close callbacks阶段:执行socket的close事件回调

Node端:microtask在事件循环的各个阶段之间执行
浏览器端:microtack在事件循环的macrotask执行完执行