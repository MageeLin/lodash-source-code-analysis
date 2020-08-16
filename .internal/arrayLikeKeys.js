import isArguments from '../isArguments.js'
import isBuffer from '../isBuffer.js'
import isIndex from './isIndex.js'
import isTypedArray from '../isTypedArray.js'

/** 用于检查是否为对象自身属性 */
const hasOwnProperty = Object.prototype.hasOwnProperty

/**
 * 创建一个array，存放类数组对象的可枚举属性键
 *
 * @private
 * @param {*} value 要查询的类数组对象
 * @param {boolean} inherited 指定是否返回原型链上的属性键
 * @returns {Array} 返回属性名组成的数组
 */
function arrayLikeKeys(value, inherited) {
  // 通过以下的几种判断，可以发现类数组对象包括数组、arguments、buffer、typedArray
  const isArr = Array.isArray(value)
  const isArg = !isArr && isArguments(value)
  const isBuff = !isArr && !isArg && isBuffer(value)
  const isType = !isArr && !isArg && !isBuff && isTypedArray(value)
  // 以上四项任一项为真则skipIndexes为真
  const skipIndexes = isArr || isArg || isBuff || isType
  // 初始化length和result，如果是上述几种，就会有自身的length值
  const length = value.length
  const result = new Array(skipIndexes ? length : 0)
  // 如果不是类数组对象就忽略了
  let index = skipIndexes ? -1 : length
  while (++index < length) {
    // 把indexKey插入到数组中
    result[index] = `${index}`
  }
  // 下面是处理非index类型的key
  for (const key in value) {
    // 当需要查询原型属性或者key属于自身属性时
    if ((inherited || hasOwnProperty.call(value, key)) &&
        //
        !(skipIndexes && (
        // 排除该情况：是类数组对象且key为length的情况
        // Safari 9 has enumerable `arguments.length` in strict mode.
          (key === 'length' ||
           // Skip index properties.
           isIndex(key, length))
        ))) {
      // 总体来说，就是自身的其他属性都可以push，是否添加原型属性看skipIndexes（当然都是再非length情况下）
      result.push(key)
    }
  }
  return result
}

export default arrayLikeKeys
