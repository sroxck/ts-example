// 元编程
import 'reflect-metadata'
function inject(argt:string){
    return function(target: Object,targetKey: string,index: number){
        Reflect.defineMetadata(argt,'12345',target)

    }
}
class indexcon {
    public indexserver:string;
    constructor(@inject("5151") indexserver:string){
        this.indexserver =indexserver
    }
}
//IOC注入
const indexL =new indexcon('index')
console.log(indexL.indexserver);
console.log(Reflect.getMetadata('5151',indexcon));
