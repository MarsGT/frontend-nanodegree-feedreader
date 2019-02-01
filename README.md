# 优达学城前端纳米学位订阅阅读器测试项目
本项目 Fork 自 [frontend-nanodegree-feedreader](https://github.com/udacity/frontend-nanodegree-feedreader) 项目，原项目为基于 Web 端的 RSS 阅读器，本项目通过为其编写测试用例的方式，进一步熟悉开发过程中的测试流程及其方法。

## 测试部分概述
本项目测试部分主要基于 [Jasmine](http://jasmine.github.io/)，测试代码均位于项目的 [feedreader.js](jasmine/spec/feedreader.js) 文件中。<br>
本项目无须安装，只需网页浏览器即可简单运行(建议使用 Chrome 或 FireFox 浏览器)。运行方法：双击 index.html，或直接将 index.html 拖拽到浏览器打开。<br>
另外，除优达学城的前端课程以外，本项目在编写时亦参考了 [Jasmine 官方文档(3.3)](https://jasmine.github.io/api/3.3/global) 以及 [Jasmine 中文指南](https://yq.aliyun.com/articles/53426) 中的相关内容。

## 测试用例介绍
- **RSS Feeds**<br>
  测试所加载的 Feed 内容的资源列表的变量，用于确保该变量(即 allFeeds 数组)被正确声明，且包含了相关内容
- **The menu**<br>
  测试应用左上角的抽屉菜单的初始状态是否符合预期，以及在点击时是否可以正常切换
- **Initial Entries**<br>
  测试应用打开时，是否可以正常加载初始内容
- **New Feed Selection**<br>
  测试应用是否可以加载资源列表中其余的内容

## 测试结果
- [x] RSS Feeds
  - [x] are defined
  - [x] URL defined and Not empty
  - [x] name defined and Not empty
- [x] The menu
  - [x] element is hidden by default
  - [x] changes visibility when the menu icon is clicked
- [x] Initial Entries
  - [x] `loadFeed()` is called and completes its work
- [x] New Feed Selection
  - [x] `loadFeed()` still works properly

以上测试全部通过。

## 更多内容
如果你对此项目感兴趣，可以访问 [优达学城论坛](https://discussions.youdaxue.com/c/fend/nd001-feed-reader-testing) 了解更多相关信息。