### 本项目前端开发规范

-----------

CSS:

: 如有多个单词则以 "_" 分割  ```(例: section_title, section_title_action)```

: 本项目所有颜色均使用 src/main/index.scss 里定义的颜色 ```(例: color: var(--primary-color))```

------------

文件/夹命名

: 如有多个单词则以 "-" 分割 ```(例: todo-item.vue)```

: 模块的入口文件须为 index.vue ```(例: login/index.vue)```


-----------

除此之外请参考 [Vue官方风格指南](https://cn.vuejs.org/v2/style-guide/) | [Markdown 官方教程](https://markdown.com.cn/)

预览此文件请[下载Markdown Preview Enhanced插件](https://shd101wyy.github.io/markdown-preview-enhanced/#/zh-cn/)



### Git提交

##### 下载并安装 cz-git
``` SHEEL
$: sudo npm install -g cz-git commitizen
$: sudo echo '{ "path": "cz-git" }' > ~/.czrc
```
下载[.commitlintrc.js](https://github.com/pxyi/public/blob/main/.commitlintrc.js)文件放置在```$HTML```目录下

##### 使用方法
```SHEEL
$: git add .
$: cz 或者 git cz
```