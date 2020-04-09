# 排序

## 1.冒泡排序
`一次比较相邻的两个元素，如果后一个小于前一个，则交换，这样从头到位一次，就将对打的放到了末尾`

![alt 属性文本](https://user-gold-cdn.xitu.io/2017/5/24/2b79ee330b7276e15152c96e93ffb782?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)
```js
function bubbleSort (arr) {
  let max = arr.length - 1;
  for (let j = 0; j < max; j++) {
    // 声明一个变量，作为标志位
    let done = true;
    for (let i = 0; i < max - j; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        done = false;
      }
    }
    if (done) {
      break;
    }
  }
  return arr;
}

bubbleSort([3,2,1,4,5,1,4,5]) // [1, 1, 2, 3, 4, 4, 5, 5]
```

## 2.快速排序
```js
function quickSort(arr) {
    if(arr.length < 2) return arr
    let middle = Math.floor(arr.length / 2)
    let flag = arr.splice(middle,1)[0]
    let left = [],right = []
    for(let i = 0; i<arr.length;i++){
        if(arr[i] < flag){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return quickSort(left).concat([flag], quickSort(right))
}
```


## 3. 插入排序

```js
function insertionSort(arr) {
    let len = arr.length;
    let preIndex, current;
    for (let i = 1; i < len; i++) {
        preIndex = i - 1;
        current = arr[i]
        while (preIndex >= 0 && arr[preIndex] > current) {
            arr[preIndex + 1] = arr[preIndex];
            preIndex--;
        }
        arr[preIndex + 1] = current
    }
    return arr
}

insertionSort([1, 2, 3, 5, 6, 5, 3, 2, 6, 7, 8, 15, 20]) // [ 1, 2, 2, 3, 3, 5, 5, 6, 6, 7, 8, 15, 20 ]
```
