1.命令行创建npm的配置文件
    npm init
2.添加一个gulp的开发依赖
    npm install gulp --save-dev
3.在项目跟目录下添加一个gulpfile.js（固定的）
    js文件，gulp主文件，文件名固定.


4.git指令
git init 
初始化，创建git代码仓库

git status 和 git status -s
查看代码状态  

git add file
添加代码为追溯状态，添加状态

git add --all 和 git add .
添加所有的文件为追溯状态  不需要追溯的文件 通过在仓库目录添加.gitignore文件 通过添加文件名或文件夹名来摘除不需要追溯的文件

git commit -m '第一次提交到代码仓库(这里一般放版本号)'
将追溯的文件提交到本地的仓库文件夹  -m（说明）

git log 更改日志

git reset --head 哈希值前6位

git remote -v 
查看上传和下载的地址

git remote add origin 加HTTP地址或者SSH地址 
设置上传地址和下载地址

git push origin master 
将本地代码上传到线上

git pull origin master
从线上将代码下载下来


git branch
查看当前目录中的项目版本分支

git branch [name]
创建一个新的项目版本分支

git checkout [name]
切换到另一个分支

git push -u origin [name]
提交一个新的分支




