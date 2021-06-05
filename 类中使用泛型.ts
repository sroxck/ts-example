// class Girl<T>{
//     constructor(private girls:T[]){}
//     getGirl(index:number):T{
//         return this.girls[index]
//     }
// }
// // const GirlOne = new Girl(['sims','sroxck','any'])
// const GirlOne = new Girl<string>(['s'])
// console.log(GirlOne.getGirl(0));


//泛型继承接口
// interface Person {
//     name:string
// }
// class Girl1<T extends Person>{
//     constructor(private girls:T[]){}
//     getGirl(index:number):string{
//         return this.girls[index].name
//     }
// }
// // const GirlOne = new Girl(['sims','sroxck','any'])
// const GirlOne1 = new Girl1([{name:'ss',s:3}])
// console.log(GirlOne1.getGirl(0));
// 必须传递name

//(泛型约束)
// 只能在number和string类型中选择一个
class Girl<T extends number | string>{
    constructor(private girls:T[]){}
    getGirl(index:number):T{
        return this.girls[index]
    }
}
// const GirlOne = new Girl(['sims','sroxck','any'])
const GirlOne = new Girl<string>(['s'])
console.log(GirlOne.getGirl(0));
