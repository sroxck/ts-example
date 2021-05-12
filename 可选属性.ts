interface isChose{
    color?: string,
    number?: number,
}
function demo(colorobj:isChose):isChose{
    let result:isChose = {}
    if(colorobj.color){
        result.color = colorobj.color
    }
    if(colorobj.number){
        result.number = colorobj.number
    }
    return result
}
console.log(demo({color:'string',number:233}));
// 可选属性可以在不确定会有哪些属性的时候可以对可能存在的属性进行预定义
// 还有一个好处是:如果引用了一个不存在的属性会进行编译报错提醒
// 也就是说,属性可以没有,可以有,有只能是接口中定义的属性,添加其他属性会报错
// 如果想添加其他属性不报错的话,可以添加索引签名,如下例
interface isChose2{
    color?: string,
    number?: number,
    [propName:string]:any //索引签名
}
function demo2(colorobj:isChose2){
    // 
    console.log(colorobj);
    
}
demo2({number:33,name:33}) // 成立,可以添加接口中不存在的属性
// 还有一个方法绕过类型检查,因为不会经过额外属性检查
let method = {a:33,b:33}
demo2(method)