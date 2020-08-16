/** 检测Node.js中的自由变量`global`*/
// global必须是个对象，然后global不能为null，然后global.Object为Object，然后才把global返回
const freeGlobal = typeof global === 'object' && global !== null && global.Object === Object && global

export default freeGlobal
