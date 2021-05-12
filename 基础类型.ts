let isBool: boolean = false
let isString: string = "字符串"
let isNumber: number = 100
let isArray: number[] = [1,2,3]
let isObj1:{} = {any:333}
let isObj2:{size:string} = {size:'22'}
let isArraytwo: Array<number> = [1,2,3]
let isAny: any = "33"
let isAnyTwo: any = 333
let isAnyArray:any[] = [1,'1',false]
//元组最重要的特性是可以限制数组元素的个数和类型，它特别适合用来实现多值返回
// 元组,表示一个已知类型和数量的数组,如下例:isTuple数组只能有2个元素,类型是String,Number,类型顺序也必须一致
let isTuple : [string, number] = ['2',3]
// 枚举 数字类型枚举可以手动设置起始索引,后面的值自动++,如果字符串枚举和数字枚举混用,所有元素都需要手动设置
enum Color {red = 1,pink,black}
let c: Color = Color.pink // c = 2
// 空值 void,函数如果没有返回值可以设置,变量设置没有意义,因为赋值只能设置undefined和null
function returnVoid():void{}
// 联合类型
let sfsf: number|null = null
// 函数返回值类型设置
function returnString():string{return "string"}
let isNull: null= null //成立
//never类型,返回never类型的函数必须有永远无法到达的终点,如异常
function returnNever():never{
    throw new Error() // 被异常中断
}
// 函数参数是对象 除了指定的参数,传入其他参数报错
function nameHaha(params:{a:string,b:number}) {
    console.log(params);
    
}
nameHaha({b:22,a:"s"})
// 函数参数解构 除了指定的参数,传入其他参数报错
function nameGaga({a,b}:{a:number,b:string}){
    console.log(a,b);
}
nameGaga({a:33,b:'ss'})

// 箭头函数
let fn :(name:string)=>string=(ss)=>ss

// 类型断言,当你知道类型是什么的时候,通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型。类型是any 但是我知道他实际是String
let stringLength: any = "hello";
let stringLengthNuber1: number = (<string>stringLength).length
let stringLengthNuber2: number = (stringLength as string).length
