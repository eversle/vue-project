# vue-project

## Project setup
```
yarn install
 <!-- or -->
pnpm install
```

### Compiles and hot-reloads for development
```
yarn serve
 <!-- or -->
pnpm serve
```

### Compiles and minifies for production
```
yarn build
 <!-- or -->
pnpm build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 命令解释 && 安装报错
+ 1 cmd执行vue ui唤起图形化页面
```
vue ui
```

+ 2 npm 查看某个依赖所有可安装版本
```
//查看unplugin-vue-components所有可安装版本
npm view unplugin-vue-components@* version

//查看unplugin-auto-import所有可安装版本,命令格式同上
npm view unplugin-auto-import@* version

//解决：
//TypeError: Components is not a function
//TypeError: Components is not a function
//执行命令查看可安装版本，选择稍低版本
npm view unplugin-vue-components@* version
yarn add unplugin-vue-components@0.25.1 -D
yarn add unplugin-auto-import@0.16.1

```
+ 3
```
//npm命令执行报错
npm ERR! code EPERM
npm ERR! syscall mkdir
npm ERR! path D:\DevEnv\nodejs\node_cache\_cacache\index-v5\5b\6b
npm ERR! errno -4048
npm ERR! Error: EPERM: operation not permitted, mkdir 'D:\DevEnv\nodejs\node_cache\_cacache\index-v5\5b\6b'     
npm ERR!  [Error: EPERM: operation not permitted, mkdir 'D:\DevEnv\nodejs\node_cache\_cacache\index-v5\5b\6b'] {
npm ERR!   errno: -4048,
npm ERR!   code: 'EPERM',
npm ERR!   syscall: 'mkdir',
npm ERR!   path: 'D:\\DevEnv\\nodejs\\node_cache\\_cacache\\index-v5\\5b\\6b',
npm ERR!   requiredBy: '.'
npm ERR! }
npm ERR!
npm ERR! The operation was rejected by your operating system.
npm ERR! It's possible that the file was already in use (by a text editor or antivirus),
npm ERR! or that you lack permissions to access it.
npm ERR!
npm ERR! If you believe this might be a permissions issue, please double-check the
npm ERR! permissions of the file and its containing directories, or try running
npm ERR! the command again as root/Administrator.

npm ERR! Log files were not written due to an error writing to the directory: D:\DevEnv\nodejs\node_cache\_logs
npm ERR! You can rerun the command with `--loglevel=verbose` to see the logs in your terminal

//无权限导致无法执行
//1、管理员运行powershell执行 
Set-ExecutionPolicy RemoteSigned
//2、在桌面右键vscode图标，『属性』选择『兼容性』，勾选『以管理员身份运行此程序』。
```
+ 4

## 环境变量配置
 env.development等文件修改baseURL
 vue.config.js中默认代理
 axios配置的baseURL

+ 5

+ 6
```

```
+ 7
```

```


```

```