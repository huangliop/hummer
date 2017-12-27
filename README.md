# Hummers/蜂鸟
开箱即用的React脚手架。
集成create-react-app 、antd、mobx。

**组件使用请将下面的文档**
[移动端文档](https://mobile.ant.design/index-cn)

[PC端文档](https://ant.design/docs/react/introduce-cn)
## 推荐编辑器
[Visual Studio Code](https://code.visualstudio.com/)
## 安装
npm install -g hummers

## 使用步骤

### 1.创建项目
hummer mobile [dir]:创建适用于移动设备的web工程，dir为输出的目录

[具体教程](https://github.com/huangliop/hummer-mobile/blob/master/README.md)

hummer pc [dir]:创建适用于PC的web工程，dir为输出的目录

[具体教程](https://github.com/huangliop/hummer-pcweb/blob/master/README.md)
### 2.添加依赖
进入上面创建的文件夹
yarn install 或者 npm install
### 3.修改网页标题
[修改标题](https://github.com/huangliop/hummer-mobile/blob/master/README.md#%E4%BF%AE%E6%94%B9%E6%A0%87%E9%A2%98)
### 4.修改package.json
[修改开发使用接口的代理](https://github.com/huangliop/hummer-mobile/blob/master/README.md#%E8%B0%83%E7%94%A8%E6%8E%A5%E5%8F%A3)
[修改发布目录]()`如果还未确定，也去等到发布时再修改`
### 5.开发
在src/pages下新建页面,如`MyPage.js` `MyPage.css`。`页面使用驼峰命名法`

[在src/App.js中引入页面](https://github.com/huangliop/hummer-mobile/blob/master/README.md#%E5%BC%82%E6%AD%A5%E5%8A%A0%E8%BD%BD%E7%BB%84%E4%BB%B6)

添加接口地址,请在transport-layer/ApiUrl.js中添加

调用接口，请模仿stores/UserStore.js中的写法
### 6.运行
yarn start
### 7.发布
[服务器准备]()

修改server.js中接口代理地址

运行 yarn build

将生成的build目录和server.js拷贝到发布的服务器某目录下。

在服务器中运行命令

`pm2 start server.js --name="my-app" -i [cpu核数] `
### 8.发布更新
将生成好的build目录覆盖服务器的相同文件后，运行
`pm2 reload my-app`

## 更多详细使用方法
[详细使用方法:移动端](https://github.com/huangliop/hummer-mobile)

[详细使用方法:PC端](https://github.com/huangliop/hummer-pcweb)