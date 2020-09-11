import baseUnset from './baseUnset.js'
import isIndex from './isIndex.js'

/**
 * `pullAt`方法的基础实现，不支持单独的索引或捕获被移除的元素
 *
 * @private
 * @param {Array} array 要修改的数组
 * @param {number[]} indexes 要删除元素的索引数组
 * @returns {Array} 返回数组
 */
// 注意： 传到indexes中的数组必须已经排序过，不然会出bug
function basePullAt(array, indexes) {
  // 初始化
  let length = array ? indexes.length : 0
  const lastIndex = length - 1

  // 开始从右向左循环
  while (length--) {
    // 此处有bug，应该移到while循环外，否则每次的previous都是重新定义的
    let previous
    // index是当前迭代的索引
    const index = indexes[length]
    // 当length === lastIndex，是让第一次循环能执行
    // 或 index !== previous时，是让后来能运行，因为indexes其实已经排序过了，
    // 所以只用跟前一个元素比较看看有没有重复就可以了，重复就跳过
    if (length === lastIndex || index !== previous) {
      // 让previous等于index
      previous = index
      // 删除该位置的索引
      if (isIndex(index)) {
        array.splice(index, 1)
      } else {
        baseUnset(array, index)
      }
    }
  }
  return array
}

export default basePullAt
