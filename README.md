### redux  reaxt-redux midllewares 源码解析

## 1. creat-react-app  快速生成一个项目
## 2. 修改目录结构
>   src
>    |- components  测试组件目录
>    |- middlewares 中间件源码目录 (logger  thunk  promise)
>    |- myredux     redux 源码目录
>    |- react-redux react-redux 源码目录
>    |- store       状态管理目录
>    |- index.js    入口文件

## 3. 生成couter组件
## 4. 用最基础的redux 实现状态修改
>  核心方法   
>     |- getState()   -> 获取当前状态
>     |- subscrib()   -> 订阅执行内容(一般为修改状态的函数)
>     |- dispatch()   -> 发布 action 触发执行内容
> 
