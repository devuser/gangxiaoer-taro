# gangxiaoer-taro

博雅塔小程序，基于Taro的版本，同步发布百度小程序，支付宝小程序。

## 微信小程序的官方描述

服务于机械加工行业，钢材流通领域，相关上下游供应链；努力提升行业效率；在线视听课程；行业标准解读；行业资讯和价格指数；从业人员周边生态。

## 更新记录

1. 博雅塔微信小程序 v0.01 基于`mpvue`框架 开始熟悉框架 20181016
2. 博雅塔微信小程序 v1.01 基于`mpvue`框架 提交腾讯通过审核 20181205
3. 博雅塔微信小程序 v1.02 基于`mpvue`框架 提交腾讯通过审核 20181229
4. 博雅塔百度小程序 v0.01 基于`Taro`框架 实验性开发 20190114
5. 博雅塔支付宝小程序 v0.01 基于`Taro`框架 实验性开发 20190114

## tslint

安装步骤

在 `macOS` 下环境准备工作

```bash
sudo npm install -g typescript tslint tsling-react
```

在当前目录下运行初始化命令，该命令创建初始的 `tslint.json`

```bash
tslint --init
```

使用 `tslint` 的命令

```bash
tslint --fix -c ./tslint.json 'src/**/*{.ts,.tsx}'
```

修改`package.json`新增 `tslint` 行

```json
"scripts": {
    "tslint": "tslint --fix -c ./tslint.json 'src/**/*{.ts,.tsx}'",
},
```

## 使用有赞组件库的分支

有兴趣的同学可以在查阅本项目的`show-user-vant-weapp`分支，显示如何引入`vant-weapp`。

修改过如下几个文件

1. `config/index.js` 增加如下配置代码

    ```json
    copy: {
        patterns: [
        {
            from: 'src/components/vant-weapp/wxs/',
            to: 'dist/components/vant-weapp/wxs/'
            // ,
            // ignore: '*.js'
        } // 指定需要 copy 的目录
        ],
        options: {}
    },

    ```
2. 修改`pages/index/index.tsx`增加如下代码

    ```json
        usingComponents: {
        // 'van-row': '/static/vant/di/index', 'van-col': '/static/vant/dist/col/index',
        // 'wxs': '../../components/vant-weapp/wxs/utils', 
        // 'van-action-sheet':
        // '/components/vant/action-sheet/index', 'van-cell-group':
        // '/components/vant/cell-group/index', 'van-area':
        // '/components/vant/area/index', 'van-field': '/components/vant/field/index',
        'van-button' : '../../components/vant-weapp/button/index',
        'van-panel' : '../../components/vant-weapp/panel/index'
        // 'van-tabbar':
        // '/components/vant/tabbar/index', 'van-card': '/components/vant/card/index',
        // 'van-tabbar-item': '/components/vant/tabbar-item/index'
        }
    }
    ```
3. 修改`pages/index/index.tsx`的 `Render` 方法 增加如下代码
    ```html
        <van-button type="primary" size='small' onclick={this.onVantBtnClick.bind(this)}>
        纯粹为测试Vant-weapp，点击控制台输出日志
        </van-button>
    ```
4. 修改`pages/index/index.tsx`的 `onVantBtnClick` 方法 增加如下代码  
    ```javascript
    onVantBtnClick(e:any){
    console.log(e)
    }
    ```  