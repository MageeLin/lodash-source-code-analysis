/**
 * 此方法类似 `forOwn`，但是它是反方向开始遍历 `object` 的。
 *
 * @since 2.0.0
 * @category Object
 * @param {Object} object 要迭代遍历的object
 * @param {Function} iteratee 每次迭代调用 iteratee 函数
 * @returns {Object} 返回 `object`.
 * @see forEach, forEachRight, forIn, forInRight, forOwn
 * @example
 *
 * function Foo() {
 *   this.a = 1
 *   this.b = 2
 * }
 *
 * Foo.prototype.c = 3
 *
 * forOwnRight(new Foo, function(value, key) {
 *   console.log(key)
 * })
 * // => 如果 `forOwn` 先打印 'a' 后打印 'b'，则此方法先打印 'b' 后打印 'a'
 */
 function forOwnRight(object, iteratee) {
  if (object == null) {
    return;
  }
  // 同样是用 Object.keys
  const props = Object.keys(object);
  let length = props.length;
  while (length--) {
    // 同样不可以用 iteratee 返回 false 来打断迭代
    iteratee(object[props[length]], iteratee, object);
  }
}

export default forOwnRight;
