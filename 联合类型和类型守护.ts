// 联合类型: 使用|分割两个类型

let abs : string | number;
abs = "abs" // true
abs = 520  // true
// abs = false // error

// 类型守护
// 使用联合类型时系统无法断定使用哪个类型调用方法或属性,所以需要类型守护
// 类型守护有很多方法,这里展示四种基础方法
// 第一种 类型断言
class One {
     one:boolean = true
     say(){
        console.log('你好');
    }
}
class Two {
     one:boolean = false
     skill(){
        console.log('学js');
    }
}
function save (name:One|Two){
    // name.say // error 报错 因为系统不知道你传进来的是one还是two
    // 进行类型守护 判断有没有某个值,然后进行断言
    if(name.one){
        (name as One).say() 
    }else{
        (name as Two).skill() 
    }
}
save(new Two()) // 学js
// 第二种 in 关键字

function save1 (name:One|Two){
    // 进行类型守护  in 用来判断对象中有没有某个属性或者方法,类,接口,都可以使用in关键字
    if('say' in name){
        name.say() 
    }else{
        name.skill() 
    }
}
// 第三种 typeof

function add(num:string|number,num2:string|number){
    // 进行类型守护 typeof关键字
    if(typeof num ==="string"||typeof num2 ==="string" ){
        return `${num}${num2}`
    }
        return num+num2
}
// 第四种 instanceof
