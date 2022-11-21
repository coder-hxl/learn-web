// 通常情况下，在定义一个函数时，都会给参数添加类型注解
function foo(message: string) {}

const names = ['a', 'b', 'c']
// item根据上下文的环境推导出来的，这个时候可以不添加类型注解
// 上下文中的函数：可以不添加类型注解
names.forEach(function (item) {
  console.log(item.split(''))
})
