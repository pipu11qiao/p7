Monorepo架构

什么是Monorepo

Monorepo 是一种代码组织思想，它要求我们只用一个代码仓库来管理一个大项目的所有资源、子项目。简单来说以前放在多个repo里的代码现在就放在一个repo就行了。

共享依赖
管理项目之间的依赖，解决发布版本的问题

写组件的项目A 都是基于vue-cli 打包的配置
写页面的项目B vue-cli axios lodash 
写文档库的项目C vue-cli vuepress

B 依赖 A 
C 依赖 A 



# lerna add 

增加本地或者远程package作为当前项目packages里面的依赖

```sh
# 安装module1作为module2的业务依赖

lerna add module-1 --scope module-2

# 安装module1作为module2的业务依赖

lerna add module-1 --scope module-2 --dev

# 安装module1 作为所有子项目的依赖，除了module1的自身

lerna add module-1

# 向所有子项目中安装babel-core

lerna add babel-core

```

5932*18854558196*
中国移动公众号 


191062