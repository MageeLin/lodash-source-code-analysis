import memoize from '../memoize.js'

/** 用于memoize缓存的最大条数 */
const MAX_MEMOIZE_SIZE = 500

/**
 * `memoize`方法的特殊版本，当缓存数超过`MAX_MEMOIZE_SIZE`时会清理memoized
 *
 * @private
 * @param {Function} func 将该函数的输出缓存
 * @returns {Function} 返回一个新的memoized函数
 */
function memoizeCapped(func) {
  // 这里借用resolver函数，计算result.cache的size
  const result = memoize(func, (key) => {
    const { cache } = result
    // 当size达到300时，清理cache
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear()
    }
    return key
  })

  return result
}

export default memoizeCapped
