/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let node = new ListNode(0)
  let result
  //链表节点生成函数
  function ListNode(val) {
    this.val = val
    this.next = null
  }

  //l1和l2同时为null时停止循环
  while (l1 !== null || l2 !== null) {
    if (!result) {
      result = node
    } else {
      //result不为空的话将node设置为node.next
      if (node.next !== null) {
        node = node.next
      } else {
        node.next = new ListNode(0)
        node = node.next
      }
    }

    //将l1和l2的val相加之后赋值给新的链表节点
    let num1 = l1 ? l1.val : 0
    let num2 = l2 ? l2.val : 0
    let sum = num1 + num2
    node.val += sum
    //如果值大于10则进1
    if (node.val >= 10) {
      node.val -= 10
      node.next = new ListNode(1)
    }
    //将l1和l2设置为下一个节点
    l1 = l1 ? l1.next : null
    l2 = l2 ? l2.next : null
  }

  //返回结果
  return result
}

/**
 * {
 *  element: 2,
 *  next: {
 *    element: 4,
 *    next: {
 *      element: 3,
 *      next: null
 *    }
 *   }
 * }
 */
