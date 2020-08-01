import slice from '../slice.js'

/**
 * 比如`dropWhile` 和 `takeWhile`之类的方法的基础实现
 *
 * @private
 * @param {Array} array 要查询的数组
 * @param {Function} predicate 每次迭代时调用的函数
 * @param {boolean} [isDrop] 指示丢弃还是保留元素。
 * @param {boolean} [fromRight] 指示从右向左迭代
 * @returns {Array} 返回剪切后的数组
 */
function baseWhile(array, predicate, isDrop, fromRight) {
  // 获取数组长度
  const { length } = array
  // 根据fromRight获取起始位置
  let index = fromRight ? length : -1

  // 开始迭代，把运算都写到了迭代条件里了
  // 从头到尾或从尾到头是给index规定了个[0,length-1]的范围
  // && 符号后面的内容是看看什么时候predicate返回假值就结束，就可以拿到当前的index了
  while ((fromRight ? index-- : ++index < length) &&
    predicate(array[index], index, array)) {}

  // 真值表
  // idDrop为真，fromRight为真，就把[index，length]内容删掉；
  // idDrop为真，fromRight为假，就把[0，index]内容删掉；
  // idDrop为假，fromRight为真，就把[index，length]内容保留；
  // idDrop为假，fromRight为假，就把[0，index]内容保留；
  return isDrop
    ? slice(array, (fromRight ? 0 : index), (fromRight ? index + 1 : length))
    : slice(array, (fromRight ? index + 1 : 0), (fromRight ? length : index))
}

export default baseWhile
