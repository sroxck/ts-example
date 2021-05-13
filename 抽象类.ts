abstract class DemoDemo{
    names:string="33"
    abstract logerr():void
    abstract sf:string
    aha(){
        console.log(222);
    }
}
class demodemo extends DemoDemo{
    sf='33'
    logerr(){
        console.log("33");
    }
}
new demodemo().logerr()
console.log(new demodemo().names);
new demodemo().aha()


// 抽象类
// 格式: 在类的声明前加上abstract 即可声明抽象类
// 抽象方法 方法名前加abstract 并且不用写方法体,也可以定义抽象属性,但是不能定义静态抽象
// 抽象方法中可以定义成员变量,也可以定义普通方法和静态方法
// 继承抽象类,需要实现里面全部的抽象方法和抽象属性