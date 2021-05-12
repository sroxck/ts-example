// 使用接口来描述类的方法和属性

interface discriptionClass {
    currentTime:Date;
    setTime(d: Date):Date
}

class TimeTool implements discriptionClass{
    result:any;
    currentTime:any
   
    setTime(date:any){
        return date
    }
}
let ss = new TimeTool()
console.log(ss.setTime(new Date()));
console.log(ss.currentTime);
// 接口只能检查类的公共部分,不会检查公共和私有两部分

// 类的接口是分为静态类型和实例类型的
// TS中类的静态部分指的是这个类（函数）本身
// 实例部分指的是类实例化出来的对象     
// 以下实例
interface staticandexample {
}
