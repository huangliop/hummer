# Hummers/蜂鸟
开箱即用的React脚手架，以及创建可发布到Npm上的react组件的模板工程
集成create-react-app 、mobx。

**其他文档**

[Antd移动端文档](https://mobile.ant.design/index-cn)

[Antd PC端文档](https://ant.design/docs/react/introduce-cn)

[React官方中文文档](https://doc.react-china.org/docs/installation.html)

## 需要的软件

[node](https://nodejs.org)

[git](https://git-scm.com/downloads)

## 推荐编辑器

[Visual Studio Code](https://code.visualstudio.com/)

## 以CRA模板方式安装(推荐)

`npx creat-react-app my-app --template cra-template-hummer`

## 使用步骤

### 修改网页标题
[修改标题](https://github.com/huangliop/hummer-mobile/blob/master/README.md#%E4%BF%AE%E6%94%B9%E6%A0%87%E9%A2%98)
### 修改package.json
[修改开发使用接口的代理](https://github.com/huangliop/hummer-mobile/blob/master/README.md#%E8%B0%83%E7%94%A8%E6%8E%A5%E5%8F%A3)
[修改发布目录]()`如果还未确定，也可等到发布时再修改`
### 开发
在src/pages下新建页面,如`MyPage.js` `MyPage.css`。`页面使用驼峰命名法`

[在src/App.js中引入页面](https://github.com/huangliop/hummer-mobile/blob/master/README.md#%E5%BC%82%E6%AD%A5%E5%8A%A0%E8%BD%BD%E7%BB%84%E4%BB%B6)

添加接口地址,请在transport-layer/ApiUrl.js中添加

调用接口，请模仿stores/UserStore.js中的写法
### 运行
yarn start
### 发布

`yarn build` 或者`npm run build` 生成build目录

#### 准备服务器
`由于前端都是一些静态资源文件，所以推荐使用node的express框架作为服务器`

***以下操作都是在Linux系统上***

##### 安装node
***先使用 node -v 命令检查是否已经装有node***
>[下载Lnux版node](https://nodejs.org/en/download/)

>将下载的压缩包上传至需要部署的服务器 

>解压：先执行`xz -d node.tar.xz ` 再执行 `tar xvf node.tar`

>链接node命令: `ln -s /my/node-v0.10.26-linux-x64/bin/npm/node /usr/local/bin/node`  /my/bin/node 为自己安装的node的路径

> 链接npm命令:`ln -s /my/node-v0.10.26-linux-x64/bin/npm /usr/local/bin/npm`  /my/node-v0.10.26-linux-x64/bin/npm 为自己安装的node下的npm的位置.

如果完成以上步骤后还是未成功，请自行百度解决。
#### 安装pm2
***建议使用pm2进行node进程管理***

> npm install pm2 -g

如果没有网络，请安下面方法安装

>`npm config get prefix` 获得node的安装目录

>在已经安装了pm2的服务器上拷贝一份到没有网络的服务器的node目录下的lib/node_modules下面

>运行构建命令:`npm build pm2 -g`

#### 发布步骤
> `mkdir mywebapp` 创建一个文件夹用于存放静态资源

> `cd mywebapp` 进入创建的目录

> `npm install express` 安装express，如果没有网络，可以从其他地方直接拷贝node_modules过来

> 将工程生成的build目录和server.js上传到服务器的 mywebapp下

>`pm2 start server.js --name="myapp" --env production --watch` 创建应用

设置开机启动请看[这里](http://pm2.keymetrics.io/docs/usage/startup/#init-systems-supported)

### 发布更新
将生成好的build目录覆盖服务器的相同文件后，运行
`pm2 reload myapp`

## 更多详细使用方法
[详细使用方法](https://github.com/huangliop/hummer-mobile)
