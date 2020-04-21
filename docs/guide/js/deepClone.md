## 深克隆

```js
const deepClone = (obj) => {
  const target = {};
  for (const key in obj) {
    if (Reflect.has(obj, key)) {
      typeof obj[key] === "object"
        ? (target[key] = deepClone(obj[key]))
        : (target[key] = obj[key]);
    }
  }
  return target;
};
```