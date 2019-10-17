### redux  reaxt-redux midllewares 源码解析

## 1. creat-react-app  快速生成一个项目
## 2. 修改目录结构
>   src<br/>
>    |- components  测试组件目录 <br/>
>    |- middlewares 中间件源码目录 (logger  thunk  promise)<br/>
>    |- myredux     redux 源码目录<br/>
>    |- react-redux react-redux 源码目录<br/>
>    |- store       状态管理目录<br/>
>    |- index.js    入口文件<br/>

## 3. 生成couter组件
## 4. 用最基础的redux 实现状态修改
>  核心方法   <br/>
>     |- getState()   -> 获取当前状态<br/>
>     |- subscrib()   -> 订阅执行内容(一般为修改状态的函数)<br/>
>     |- dispatch()   -> 发布 action 触发执行内容<br/>
> 
> 至此 基础redux 已经实现  代码地址: https://github.com/wanghang2017/reduxLearn/tree/1.0.0-light
