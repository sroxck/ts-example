interface fnimpl {
    (name:string,num:number):string
    // 函数类型的接口表达形式,(参数名:参数类型):返回值类型
}
// 可以给变量使用函数类型接口,这样变量被赋值必须符合接口
let variable: fnimpl
variable = function(name:string,gsgs:number){
    return "str"
}
// 函数的参数名不必和接口定义相同,函数的参数会逐个进行检查,要求对应位置上的类型是正确的,顺序有要求
// 如果不指定函数参数,会自动进行推断,如下例
variable = function (name,gsds){
    return name
}
variable('sf',333)

// 可索引类型
// 接口也可以描述那些可以通过索引获取的值的类型
// 例:
interface indexInterFace{
    [index:number]:string
}
let arrlist:indexInterFace=['1','2']

interface indexInterFace1{
    [index:string]:string
    name:string
}
let arrlist1:indexInterFace1={name:'name'}

interface NumberDictionary {
    [index: string]: number;
    length: number;    // 可以，length是number类型
    // name: string       // 错误，`name`的类型与索引类型返回值的类型不匹配
  }
// 索引签名可以设置成只读
interface readonlydic{
    readonly [index:number]:any
}
let arrlistthree : readonlydic = [1,3,4]
// arrlistthree[0] = 2 // 只读的索引签名是不可以通过索引修改值的
