// 使用namespace 声明一个命名空间 HOme{ 在这里写的内容不会被暴露成全局的,使用export可以暴露出去}
// 在使用的时候,需要使用命名空间.暴露的内容,比如new Home.page()
// 命名空间可以嵌套生成子命名空间
namespace Home{
    export namespace Son {
        class s{
            
        }
    }
    class Header{
        constructor(){
            const ele = document.createElement('div')
            ele.innerText = 'this is header'
            document.body.appendChild(ele)
        }
    }
    class Content{
        constructor(){
            const ele = document.createElement('div')
            ele.innerText = 'this is Content'
            document.body.appendChild(ele)
        }
    }
    class Footer{
        constructor(){
            const ele = document.createElement('div')
            ele.innerText = 'this is Footer'
            document.body.appendChild(ele)
        }
    }
    export class Page{
        constructor(){
            new Header()
            new Content()
            new Footer()
        }
    }
}



