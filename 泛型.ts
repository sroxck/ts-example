function join<Sroxck>(first:Sroxck,second:Sroxck){
    return `${first}${second}`
}
join<string>('sroxck','@jdd.com')
// 函数指定了泛型,参数使用了这个泛型,参数的类型可以是任意的,但是必须和泛型保持一致
// 意思就是说不知道传什么类型,等调用的时候在指定类型

function join1<Sroxck>(first:Sroxck,second:number){
    return `${first}${second}`
}
join1<string>('sroxck',2)
// 此案例中 first参数使用了泛型类型,再调用的时候传递了string类型,name就必须是string类型,类型占位符

// 泛型中数组的使用
function sgg<ANY>(par:ANY[]){
    return par
}
sgg<string>(['3','4'])

function sgg1<ANY>(par:Array<ANY>){
    return par
}
sgg1<string>(['3','4'])


// 可以指定多个泛型
function fx<T,E>(one:T,two:E) {
    return `${one}${two}`
}
fx<string,number>('22',3)
