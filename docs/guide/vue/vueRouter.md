## Vue-Router

### hashRouter基础实现


```js
/**
 * hash变化
 * a：js修改url
 * b:手动修改url的hash
 * c:浏览器前进,后退
 */

window.onhashchange = event => {
  console.log("old url", event.lodURL);
  console.log("new url", event.newURL);
  console.log("hash", location.hash);
};

//  页面初次加载，获取hash
document.addEventListener("DOMContentLoaded", () => {
  console.log("hash:", location.hash);
});

// JS修改url
document.getElementById("btn1").addEventListener("click", () => {
  location.href = "#/user";
});


```

### historyRouter基础实现

```js
/**
 * 用url规范的路由，但跳转时不刷新页面
 * 用， history.pushState，windown.onpopstate
 */

//  页面初次加载
document.addEventListener("DOMContentLoaded", () => {
  console.log("load:", location.pathname);
});

// 打开一个新的路由
// [注意]用pushState方式，浏览器不会刷新页面

// JS修改url
document.getElementById("btn1").addEventListener("click", () => {
  const state = { name: "page1" };
  console.log("切换路由到", "page1");
  history.pushState(state, "", "page1");
});

// 监听浏览器前进、后退
window.onpopstate = event => {
  console.log("onpopstate", event.state, location.pathname);
};

```