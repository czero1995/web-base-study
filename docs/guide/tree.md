# 树的遍历

* 树结构
```js
let tree = {
    value: 1,
    left: {
        value: 2,
        left: {
            value: 4
        }
    },
    right: {
        value: 3,
        left: {
            value: 5,
            left: {
                value: 7
            },
            right: {
                value: 8
            }
        },
        right: {
            value: 6
        }
    }
}
```

## 1.广度优先遍历

```js
let levelOrderTraversal = function (node) {
    if (!node) {
        throw new Error('Empty Tree')
    }

    let que = []
    que.push(node)
    while (que.length !== 0) {
        node = que.shift() // 删除数组的第一个元素
        console.log(node.value)

        if (node.left) que.push(node.left)
        if (node.right) que.push(node.right)
    }
}

levelOrderTraversal(tree) // 1 2 3 4 5 6 7 8
```

## 2.深度优先遍历

### 2-1.先序遍历
```js
let preOrder = function(node){
    if(node){
        console.log(node.value)
        preOrder(node.left)
        preOrder(node.right)
    }
}

preOrder(tree) // 1 2 4 3 5 7 8 6
```

### 2-2.中序优先遍历
```js
let inOrder = function(node){
    if(node){
        inOrder(node.left)
        console.log(node.value)
        inOrder(node.right)
    }
}

inOrder(tree) // 4 2 1 7 5 8 3 6
```

### 2-3.后序优先遍历
```js
let postOrder = function(node){
    if(node){
        postOrder(node.left)
        postOrder(node.right)
        console.log(node.value)
    }
}

postOrder(tree) // 4 2 7 8 5 6 3 1
```