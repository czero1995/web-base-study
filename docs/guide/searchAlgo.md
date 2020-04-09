# 查找算法

## 1.二分查找法
1. 首先设定两个指针，low和height,表示最低索引和最高索引
2. 取中间位置索引middle,判断middle处的值是否与所要查找的数相同，相同则结束查找，middle处的值比所要查找的值小就把low设为middle+1,如果middle处的值比所要查找的值大就把height设为middle-1
3. 在新区间继续查找，直到找到low>height找不到所要查找的值结束查找

```js
function binarySearch(arr, target){
    let max = arr.length -1
    let min = 0
    while(min <= max){
        let mid = Math.floor((max + min) / 2)
        if(target < arr[mid]){
            max = mid - 1
        } else if(target > arr[mid]){
            min = mid + 1
        } else{
            return mid
        }
    }
    return -1
}
```