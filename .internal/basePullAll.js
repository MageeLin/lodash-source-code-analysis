import map from '../map.js'
import baseIndexOf from './baseIndexOf.js'
import baseIndexOfWith from './baseIndexOfWith.js'
import copyArray from './copyArray.js'

/**
 *  `pullAll`系列方法的基础实现
 *
 * @private
 * @param {Array} array 要修改的数组。
 * @param {Array} values 要移除值的数组。
 * @param {Function} [iteratee] iteratee（迭代器）调用每个元素。
 * @param {Function} [comparator] comparator（比较器）调用每个元素。
 * @returns {Array} 返回 `array`.
 */
function basePullAll(array, values, iteratee, comparator) {
  // 使用comparator时用baseIndexOfWith，否则用baseIndexOf
  const indexOf = comparator ? baseIndexOfWith : baseIndexOf
  // 拿到要移除数组的长度
  const length = values.length

  let index = -1
  // 把array的指针赋给seen
  let seen = array

  // 如果array和values引用的同一个对象
  if (array === values) {
    // 就把values换个地址
    values = copyArray(values)
  }
  // 如果iteratee参数存在，就把seen的所有元素执行下iteratee后的新数组再返回给seen
  if (iteratee) {
    seen = map(array, (value) => iteratee(value))
  }
  // 开始迭代
  while (++index < length) {
    let fromIndex = 0
    const value = values[index]
    // 当iteratee存在时，则转换下（因为之前把array的转换了，现在需要转换values的），否则返回value
    const computed = iteratee ? iteratee(value) : value

    // 如果在seen（array）中能找到匹配值的索引
    while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
      // 也就是iteratee参数存在
      if (seen !== array) {
        // 则从seen中删去该值
        seen.splice(fromIndex, 1)
      }
      // array中也删去该值
      array.splice(fromIndex, 1)
    }
    // 内层while执行完后，就决定当前的元素要不要删
  }
  // 外层while执行完后，就决定了array中每一个元素要不要删
  return array
}

export default basePullAll
