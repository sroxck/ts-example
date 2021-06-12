
function out<T>(str:T):void{
    if(typeof str === 'string'){
        let list:string[] = str.split('')
        list.forEach((item:string)=>{
            console.log(item);
        })
    }
}
out<string>('你好')
