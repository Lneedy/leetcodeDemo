/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 *
 * https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (30.19%)
 * Likes:    2371
 * Dislikes: 0
 * Total Accepted:    208.7K
 * Total Submissions: 667.4K
 * Testcase Example:  '"abcabcbb"'
 *
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 *
 * 示例 1:
 *
 * 输入: "abcabcbb"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 *
 *
 * 示例 2:
 *
 * 输入: "bbbbb"
 * 输出: 1
 * 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 *
 *
 * 示例 3:
 *
 * 输入: "pwwkew"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
 * 请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 *
 *
 */
/**
 * @param {string} s
 * @return {number}
 */
//  实现原理: 每次遍历是否存在该内容
var lengthOfLongestSubstring = function(s) {
  var res = 0 // 用于存放当前最长无重复子串的长度
  var str = '' // 用于存放无重复子串
  var len = s.length
  for (var i = 0; i < len; i++) {
    var char = s.charAt(i)
    var index = str.indexOf(char)
    if (index === -1) {
      str += char
      res = res < str.length ? str.length : res
    } else {
      str = str.substr(index + 1) + char
    }
  }
  return res
}
