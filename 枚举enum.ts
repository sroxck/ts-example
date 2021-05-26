// 枚举enum的实际作用

// 通常工作中后台返回状态,是这样的
// 0,1,2,3,4,5 分别对应不同的状态,但是需要前端自己去转义,如success,error,info,warning,primary等
//初级程序员做法

// function getState(state:number){
//     if(state == 0){
//         return 'success'
//     }else if(state == 1){
//         return 'error'
//     }
//     //....
// }
// 有点经验的程序员会定义一个常量,增加了语义化
// const _State = {
//     success:0,
//     error:1,
// }
// function getState(state:number){
//     if(state == _State.success){
//         return 'success'
//     }else if(state == _State.error){
//         return 'error'
//     }
//     //....
// }

// 使用enum枚举可减少此操作的步骤
// enum _State1 {
//     success,error
// }
// function getState(state:number){
//     if(state == _State1.success){
//         return 'success'
//     }else if(state == _State1.error){
//         return 'error'
//     }
//     //....
// }
//枚举会有一个默认的索引,从0开始,按顺序递增
// _State1.success 0
// _State1.error 1
// 可以手动设置
enum _State1 {
    success = 1,error=3,info
}
function getState(state:number){
    if(state == _State1.success){
        return 'success'
    }else if(state == _State1.error){
        return 'error'
    }
    //....
}
//此时索引从1开始
//error手动设置了3,所以info是4
//enum也可以设置其他类型的值,但是一旦设置了,就必须为所有值设置