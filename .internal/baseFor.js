/**
 * `baseForOwn` 的基础实现，它迭代由 `keysFunc` 返回的 `object`的属性，
 * 并为每个属性调用 `iteratee` 。
 * `iteratee` 可以通过显式返回 `false` 来提前退出迭代。
 * @private
 * @param {Object} object 要迭代遍历的object
 * @param {Function} iteratee 每次迭代调用 iteratee 函数
 * @param {Function} keysFunc 获取 `object` 的键的函数.
 * @returns {Object} 返回 `object`.
 */
 function baseFor(object, iteratee, keysFunc) {
  const iterable = Object(object);
  // 与其他for和each方法的区别在这，有一个专门的获取键的方法
  // 用于区别获取什么类型的键
  const props = keysFunc(object);
  let { length } = props;
  let index = -1;

  // 迭代
  while (length--) {
    const key = props[++index];
    // 使用iteratee来调用每个元素，同时如果显式返回false，终止迭代
    if (iteratee(iterable[key], key, iterable) === false) {
      break;
    }
  }
  return object;
}

export default baseFor;
