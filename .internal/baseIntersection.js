import SetCache from './SetCache.js'
import arrayIncludes from './arrayIncludes.js'
import arrayIncludesWith from './arrayIncludesWith.js'
import map from '../map.js'
import cacheHas from './cacheHas.js'

/**
 * `intersection`家族方法的基础实现，接受要检查的array组成的arrays
 *
 * @private
 * @param {Array} arrays 要检查的arrays
 * @param {Function} [iteratee] 每个元素调用的iteratee函数
 * @param {Function} [comparator] 每个元素调用的比较器函数
 * @returns {Array} 返回包含所有传入数组交集元素的新数组。
 */
function baseIntersection(arrays, iteratee, comparator) {
  // 当比较器函数存在时，includes设为arrayIncludesWith，否则设为arrayIncludes
  const includes = comparator ? arrayIncludesWith : arrayIncludes
  // arrays中第一个array的长度（因为是以第一个为基础）
  const length = arrays[0].length
  // 整个arrays的长度
  const othLength = arrays.length
  // 定义一个与arrays等长的缓存数组
  const caches = new Array(othLength)
  // 初始化返回结果
  const result = []

  let array
  let maxLength = Infinity
  let othIndex = othLength

  // 从右向左迭代
  while (othIndex--) {
    // array来放置迭代时arrays中的每个array
    array = arrays[othIndex]
    if (othIndex && iteratee) {
      // 当iteratee存在时，将array中的每个元素转换下
      array = map(array, (value) => iteratee(value))
    }
    // 防止数组过长
    maxLength = Math.min(array.length, maxLength)
    // 下面的条件是，比较器函数不存在，并且（iteratee函数存在或者数组过长）
    caches[othIndex] = !comparator && (iteratee || (length >= 120 && array.length >= 120))
      // 就会用到效率较高的SetCache
      ? new SetCache(othIndex && array)
      : undefined
  }
  // 重新把array设为处理后的arrays的第一个参数
  array = arrays[0]

  let index = -1
  const seen = caches[0]
  // 处理到这一步时，caches中充满了length比较长的array和对应的键
  outer:
  while (++index < length && result.length < maxLength) {
    let value = array[index]
    // 这一步就是对第一个array进行简单的iteratee处理
    const computed = iteratee ? iteratee(value) : value

    value = (comparator || value !== 0) ? value : 0
    // 下面就是检查cache中是否存在，相同的，存在就push到结果里
    if (!(seen
      ? cacheHas(seen, computed)
      : includes(result, computed, comparator)
    )) {
      othIndex = othLength
      while (--othIndex) {
        const cache = caches[othIndex]
        if (!(cache
          ? cacheHas(cache, computed)
          : includes(arrays[othIndex], computed, comparator))
        ) {
          continue outer
        }
      }
      if (seen) {
        seen.push(computed)
      }
      result.push(value)
    }
  }
  return result
}

export default baseIntersection
