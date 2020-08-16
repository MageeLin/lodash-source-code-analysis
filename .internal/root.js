/* global globalThis, self */
import freeGlobal from './freeGlobal.js'

/** 检测自由变量 `globalThis` */
const freeGlobalThis = typeof globalThis === 'object' && globalThis !== null && globalThis.Object == Object && globalThis

/** 检测自由变量 `self`. */
const freeSelf = typeof self === 'object' && self !== null && self.Object === Object && self

/** 用于global对象的引用 */
// 经过测试，在Chrome84环境下 globalThis、self和this是生效的，都指向window
// 在node12环境下，globalThis、global和this是生效的，都指向global
const root = freeGlobalThis || freeGlobal || freeSelf || Function('return this')()

export default root
