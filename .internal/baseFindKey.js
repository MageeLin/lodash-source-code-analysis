/**
 * `findKey`和`findLastKey`方法的基础实现，使用`eachFunc`来迭代`collection`
 *
 * @private
 * @param {Array|Object} collection 要检查的的collection
 * @param {Function} predicate 每次迭代时调用的函数
 * @param {Function} eachFunc 遍历`collection`的函数
 * @returns {*} 返回查到的元素或它的key，查不到则返回`undefined` ？
 */
function baseFindKey(collection, predicate, eachFunc) {
  // 初始化result
  let result
  // eachFunc是用于迭代的方法
  eachFunc(collection, (value, key, collection) => {
    // predicate是每次迭代时的断言，判断真假
    if (predicate(value, key, collection)) {
      result = key
      return false
    }
  })
  // 最后返回查到的key
  return result
}

export default baseFindKey
