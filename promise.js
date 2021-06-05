new Promise((resolve,reject)=>{
    setTimeout(() => {
        let a = 2
        if(a==3){
            resolve('s d ')
        }else{
            reject('error')
        }
    }, 2000);
}).then(res=>{
    console.log(res);
}).catch(e=>{
    console.log(e);
})