// 获取dom需要使用相关类型
const inputElement = document.querySelector<HTMLInputElement>('input')
inputElement?.addEventListener('click',(e:MouseEvent)=>{
    const x = e.clientX
})
const eij = document.querySelector('input') as HTMLInputElement
// 如果类型不指定 不用泛型或者断言会有如下问题

const jlj = document.querySelector('input')
console.log(jlj!.value);//对象可能是null 所以使用不了value 可以通过!操作强行使用
