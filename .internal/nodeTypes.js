import freeGlobal from './freeGlobal.js'
// 什么是free variable（自由变量）
// https://blog.csdn.net/weixin_39408343/article/details/101532803


/** 检测自由变量`exports` */
const freeExports = typeof exports === 'object' && exports !== null && !exports.nodeType && exports

/** 检测自由变量`module`. */
const freeModule = freeExports && typeof module === 'object' && module !== null && !module.nodeType && module

/** 检测流行的CommonJS扩展`module.exports`. */
const moduleExports = freeModule && freeModule.exports === freeExports

/** 检测来Node.js的自由变量`process` */
const freeProcess = moduleExports && freeGlobal.process

/** 被用来使用更快的Node.js帮助方法 */
const nodeTypes = ((() => {
  try {
    /* 检测Node.js v10+版本以上的公开`util.types`方法. */
    /* Node.js 启用代码: DEP0103. */
    const typesHelper = freeModule && freeModule.require && freeModule.require('util').types
    // 有util.types方法就用，没有就用freeProcess
    return typesHelper
      ? typesHelper
      /* Legacy process.binding('util') for Node.js earlier than v10. */
      : freeProcess && freeProcess.binding && freeProcess.binding('util')
  } catch (e) {}
})())

export default nodeTypes
