/**
 * 使用 iteratee 遍历一个 object 自身的可枚举属性键。
 * `iteratee` 会传入3个参数：(value, key, object)。
 * 如果返回 `false`，iteratee 会提前退出遍历。
 *
 * @since 0.3.0
 * @category Object
 * @param {Object} object 要迭代遍历的object
 * @param {Function} iteratee 每次迭代调用 iteratee 函数
 * @see forEach, forEachRight, forIn, forInRight, forOwnRight
 * @example
 *
 * function Foo() {
 *   this.a = 1
 *   this.b = 2
 * }
 *
 * Foo.prototype.c = 3
 *
 * forOwn(new Foo, function(value, key) {
 *   console.log(key)
 * })
 * // => Logs 'a' then 'b' (不能保证迭代顺序).
 */
 function forOwn(object, iteratee) {
  object = Object(object);
  // 直接用 Object.keys 来获取键，然后来迭代
  // 这里的 iteratee 不需要返回 false 打断迭代
  Object.keys(object).forEach((key) => iteratee(object[key], key, object));
}

export default forOwn;

