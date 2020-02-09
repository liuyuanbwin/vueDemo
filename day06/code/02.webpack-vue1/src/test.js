//这是 node 中 向外暴露成员的形式:
// module.exports = {

// }

// 在 ES6 中也通过 规范的形式,  规定了 ES6 中如何 导入和导出模块
// ES6 中导入模块, 使用 import 模块名称 from '模块标识符" import "表示路径"
//ES6 中, 使用 export default 和 export 向外暴露成员
var info = {
  name: "zs",
  age: 30
}

export default info
// 注意 在一个模块中, export default 只允许向外暴露一次
// export default {
//   address: '北京'
// }
// 注意: export default 向外暴露的成员,可以使用任意变量来接收
// 注意: 在一个模块中,可以同时使用 export default 和 export 向外暴露成员

export var title = '小星星'

// 注意 使用export 向外暴露的成员,只能使用 { } 的形式接受,这种形式叫做 按需导出
// 注意: export 可以向外暴露多个成员, 同时,如果某些成员,我们在 import 的时候不需要,则在{}中可以不定义 
// 注意: 使用 export 导出的成员, 必须按照导出时候的名字,来使用 {} 按需接受
// 注意: 使用 export 导出的成员, 如果就想换个名称,可以使用 as 起别名
export var content = '哈哈哈'