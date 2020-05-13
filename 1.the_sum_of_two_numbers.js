/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 *
 * https://leetcode-cn.com/problems/two-sum/description/
 *
 * algorithms
 * Easy (46.23%)
 * Likes:    6244
 * Dislikes: 0
 * Total Accepted:    548.1K
 * Total Submissions: 1.2M
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 *
 * 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
 *
 * 示例:
 *
 * 给定 nums = [2, 7, 11, 15], target = 9
 *
 * 因为 nums[0] + nums[1] = 2 + 7 = 9
 * 所以返回 [0, 1]
 *
 *
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  // 初始化result
  let res = []
  let dd = {}
  // 遍历数组, 除了最后一项
  for (let i = 0; i < nums.length; i++) {
    if (dd[target - nums[i]] !== undefined) {
      res.push(dd[target - nums[i]])
      res.push(i)
      break
    } else {
      dd[nums[i]] = i
    }
  }
  return res
}
/**
 * twoSum([123, 23, 43, 1111, 21], 44)
 * i = 0, dd: {123:0}
 * i = 1, dd: {123: 0, 23: 1}
 * i = 2, dd: {123: 0, 23: 1, 43: 2}
 * i = 3, dd: {123: 0, 23: 1, 43: 2, 1111: 3}
 * i = 4, res: [1, 4]
 */
