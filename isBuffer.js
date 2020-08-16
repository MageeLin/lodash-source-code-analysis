import root from './.internal/root.js'

/** 检测自由变量 `exports` */
const freeExports = typeof exports === 'object' && exports !== null && !exports.nodeType && exports

/** 检测自由变量 `module`. */
const freeModule = freeExports && typeof module === 'object' && module !== null && !module.nodeType && module

/** 检测流行的CommonJS扩展 `module.exports`. */
const moduleExports = freeModule && freeModule.exports === freeExports

/** 内置值的引用 */
const Buffer = moduleExports ? root.Buffer : undefined

/* 与其他`lodash`方法同名的方法的内置方法引用 */
const nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined

/**
 * 检查值是否为buffer
 *
 * @since 4.3.0
 * @category Lang
 * @param {*} value 要检查的值
 * @returns {boolean} 如果值是一个buffer则返回true，否则返回false
 * @example
 *
 * isBuffer(new Buffer(2))
 * // => true
 *
 * isBuffer(new Uint8Array(2))
 * // => false
 */

// 返回nativeIsBuffer，如果nativeIsBuffer是undefined的话，代表着非node环境，直接返回false
const isBuffer = nativeIsBuffer || (() => false)

export default isBuffer
