// 类使用extends 继承,使用super调用父类
class Lady {
    content="你好"
    sayHello(){
        return this.content
    }
}
class Goddess extends Lady{
    // 重写父类方法
    sayHello(){
        return super.sayHello() + "JOJO"
    }
    sayHi(){
        return this.content + "hi!"
    }
}
console.log(new Goddess().sayHello());
console.log(new Goddess().sayHi());

// 类的访问类型 public公共的,在类的内部和外部都可以调用,protected 受保护的,只能在类的内部使用,也可以在继承中的类中使用 private 私有的,只能在类的内部使用,继承的类的内部也不可用 默认是public 
class Demo{
    protected uname = "sroxck1"
    private userName = "sroxck2"
}
// let demoExample1 = new Demo().uname // 报错 不可访问 受保护的
// let demoExample2 = new Demo().userName // 报错 不可访问 私有的
class DemoSon extends Demo{
    log(){
        console.log(this.uname) // 成立 protected 可以在继承的类中访问
        // console.log(this.username) // 报错 private 只能在本类中使用
    }
}
// 类的构造函数
class Demo2{
    uname:string
    constructor(name:string){
        this.uname = name
    }
}
let p = new Demo2("sroxck")
console.log(p.uname);
// 类的成员变量声明必须赋值或者在构造器里面赋值,可以简写
class Demo3{
    constructor(public name:string){} // 省略成员变量的声音和构造函数方法体内的赋值,直接在参数上加入public修饰符就可以完成声明成员变量并赋值的工作
}
let person = new Demo3('sims')
console.log(person.name); // 和上面相同的效果

//类的构造函数继承
class DemoExtends {
    constructor(public name:string){}
}
class DemoExtendsSon extends DemoExtends {
    constructor(public age:number){
        super("sroxck:jdd") // 子类继承父类的时候,子类如果要写构造方法,必须手动调用super()去执行父类的构造方法,此语句必须放在第一行(先有父,再有子)
        // 父类没有构造方法也必须调用,因为会有一个默认的空的构造函数
    }
}
console.log(new DemoExtendsSon(22).age,new DemoExtendsSon(22).name);


// 类的getter和setter
class Shower{
    constructor(private showerTime:number){}
    get shower(){
        return this.showerTime - 10
    }
    set shower(num:number){
        this.showerTime = num+10
    }
}

const xizao = new Shower(30)
xizao.shower = 40
console.log(xizao.shower);
// 设置get和set后 可以直接通过对象.属性的方式去.get的方法名 获取值而不用调用
// set 直接通过set方法名 赋值即可,可以把get和set方法的名字看做是一个成员变量,访问和修改时,会执行对应的包装函数
// get和set的作用: 可以使用get和set暴露出私有private成员属性,让外界可以访问到经过包装后的私有属性

// 类的静态属性和方法 static
class MyShower{
    static showerTime:number = 20
    static viewShowerTime(){
        console.log(this.showerTime);
    }
}
MyShower.viewShowerTime()
// 静态方法和属性可以直接通过类名进行访问

// 类的只读属性
class ReadonlyClass{
    readonly _name:string
    constructor(name:number){
        this._name=name as unknown as string
    }
}
console.log(new ReadonlyClass(22)._name);
// 给类的成员变量添加readonly修饰符即可只读 
// 类型强制转换 先转为unknown 在转换为你需要的类型即可,会造成数据损失和精度丢失
