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
